<style lang='scss' scoped>
.sku {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 50px;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .sku-container {
    &.show {
      transform: translateY(0);
    }
    transition: transform 0.3s;
    transform: translateY(100%);
    width: 100%;
    height: 480px;
    background: #fff;
    border-radius: 10px 10px 0 0;
    position: relative;
    .sku-container-close {
      position: absolute;
      font-size: 30px;
      color: #999;
      transform: rotate(45deg);
      top: 10px;
      right: 20px;
    }
    .sku-container-top {
      width: 100%;
      height: 136px;
      padding: 18px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sku-container-top-img {
        width: 100px;
        height: 100px;
        background: #eee;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .sku-container-top-content {
        flex: 1;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .top-content-money {
          color: $jd-textcolor;
          font-size: 12px;
          font-weight: bold;
          display: flex;
          align-items: baseline;
          .top-content-money-price {
            font-size: 20px;
            margin-left: 0px;
          }
        }
        .top-content-intro {
          font-size: 12px;
          color: #262626;
          height: 30px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          span {
            color: #8c8c8c;
          }
        }
        .top-content-have {
          margin: 10px 0;
          color: #333;
          font-size: 13px;
        }
      }
    }
    .sku-container-middel {
      height: 298px;
      box-sizing: border-box;
      padding: 5px 0;
      width: 340px;
      margin: 0 auto;
      overflow: auto;
      .sku-container-middel-item {
        display: flex;
        flex-wrap: wrap;
        .middel-item-title {
          font-size: 13px;
          color: #333;
          width: 100%;
        }
        .middel-item-choose {
          font-size: 12px;
          line-height: 30px;
          height: 30px;
          padding: 0 18px;
          border-radius: 16px;
          margin: 10px 10px 10px 0;
          background: #f2f2f2;
          border: 1px solid #f2f2f2;
          color: #262626;
          &.active {
            color: $jd-textcolor;
            border: 1px solid $jd-backcolor;
            background: #fcedeb;
          }
        }
      }
      .sku-container-middel-skep {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
        font-size: 13px;
        margin-top: 10px;
      }
    }
    .sku-container-down {
      height: 50px;
      width: 355px;
      margin: 0 auto;
      overflow: hidden;
    }
  }
}
</style>

<template>
  <div class="sku" v-if="sell&&isShowShadow" @click="setSkuShow(false)">
    <div class="sku-container" @click.stop :class="{show:isShowContent}">
      <div class="sku-container-close" @click="setSkuShow(false)">+</div>
      <div class="sku-container-top">
        <div class="sku-container-top-img">
          <img :src="sell.imgUrl" alt />
        </div>
        <div class="sku-container-top-content">
          <div class="top-content-money">
            ￥
            <div class="top-content-money-price">{{finallyPrice}}</div>
          </div>
          <div class="top-content-have">库存 {{finallyNumber}}</div>
          <div class="top-content-intro">
            <span>已选</span>
            {{getChooseSku}} {{sell.quaity}}个
          </div>
        </div>
      </div>
      <div class="sku-container-middel">
        <div class="sku-container-middel-item" v-for="(item,index) in sell.skuList" :key="index">
          <div class="middel-item-title">{{item.key}}</div>
          <div
            class="middel-item-choose"
            :class="{active:itemize.isCheck}"
            @click="checkItem(index,num)"
            v-for="(itemize,num) in item.value"
            :key="num"
          >{{itemize.val}}</div>
        </div>
        <div class="sku-container-middel-skep">
          购买数量
          <van-stepper v-model="sell.quaity" />
        </div>
      </div>
      <div class="sku-container-down">
        <slot :info="{finallyPrice,finallyNumber,...sell}"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sku",
  data() {
    return {
      isShowShadow: false,
      isShowContent: false,
      finallyPrice: "0.00",
      finallyNumber: "9999",
      sell: null,
    };
  },
  props: {
    sellInfo: {
      type: Object,
      default: null,
    },
  },
  watch: {
    sellInfo: {
      handler(val) {
        this.sell = JSON.parse(JSON.stringify(val));
         if (!this.sell.productAttr) {
          this.sell.productAttr = JSON.parse(JSON.stringify(this.sell.defaultSku));
        }
        this.finallyPrice = this.sell.price;
        let newSkuList = this.sell.skuList.map((item, index) => {
          let activeIndex = item.value.findIndex(
            (op) => op === this.sell.productAttr[index].val
          );
          item.value = item.value.map((op, num) => {
            return {
              val: op,
              isCheck: activeIndex === num ? true : false,
            };
          });
        });
        this.$set(this.sell.skuList, newSkuList);
        for (let i = 0; i < this.sell.stockPriceList.length; i++) {
          if (
            this.isTrueToSku(
              this.sell.productAttr,
              this.sell.stockPriceList[i].skill
            )
          ) {
            this.finallyPrice = this.sell.stockPriceList[i].price;
            this.finallyNumber = this.sell.stockPriceList[i].number;
            break;
          }
        } 
      },
      deep: true,
    },
  },
  created() {
    this.sell = JSON.parse(JSON.stringify(this.sellInfo));
    if (!this.sell.productAttr) {
      this.sell.productAttr = JSON.parse(JSON.stringify(this.sell.defaultSku));
    }
    this.finallyPrice = this.sell.price;
    let newSkuList = this.sell.skuList.map((item, index) => {
      let activeIndex = item.value.findIndex(
        (op) => op === this.sell.productAttr[index].val
      );
      item.value = item.value.map((op, num) => {
        return {
          val: op,
          isCheck: activeIndex === num ? true : false,
        };
      });
    });
    this.$set(this.sell.skuList, newSkuList);
    for (let i = 0; i < this.sell.stockPriceList.length; i++) {
      if (
        this.isTrueToSku(
          this.sell.productAttr,
          this.sell.stockPriceList[i].skill
        )
      ) {
        this.finallyPrice = this.sell.stockPriceList[i].price;
        this.finallyNumber = this.sell.stockPriceList[i].number;
        break;
      }
    }
  },
  computed: {
    getChooseSku() {
      if (this.isAllChoose()) {
        let str = "";
        this.sell.productAttr.forEach((item) => {
          str += `${item.key}:${item.val}`;
        });
        return str;
      }
      return "请选择规格";
    },
  },
  methods: {
    setSkuShow(bool) {
      if (bool) {
        this.isShowShadow = true;
        setTimeout(() => {
          this.isShowContent = true;
        }, 300);
      } else {
        this.isShowContent = false;
        setTimeout(() => {
          this.isShowShadow = false;
        }, 300);
      }
    },
    checkItem(index, num) {
      // 选择sku
      this.sell.skuList[index].value = this.sell.skuList[index].value.map(
        (item, number) => {
          item.isCheck = false;
          if (number === num) item.isCheck = true;
          return item;
        }
      );
      if (this.isAllChoose()) {
        for (let i = 0; i < this.sell.skuList.length; i++) {
          this.sell.productAttr[i].val = this.sell.skuList[i].value.find(
            (op) => op.isCheck
          ).val;
        }
        let canfindIt = false;
        for (let i = 0; i < this.sell.stockPriceList.length; i++) {
          if (
            this.isTrueToSku(
              this.sell.stockPriceList[i].skill,
              this.sell.productAttr
            )
          ) {
            // 匹配上了
            canfindIt = true;
            this.finallyPrice = this.sell.stockPriceList[i].price;
            this.finallyNumber = this.sell.stockPriceList[i].number;
          }
        }
        if (!canfindIt) {
          this.finallyPrice = this.sell.price;
          this.finallyNumber = "9999";
        }
      } else {
        this.finallyPrice = this.sell.price;
        this.finallyNumber = "9999";
      }
    },
    isAllChoose() {
      // 判断是否全选
      let flag = true;
      this.sell.skuList.forEach((item) => {
        let op = false;
        for (let i = 0; i < item.value.length; i++) {
          if (item.value[i].isCheck) {
            op = true;
            break;
          }
        }
        flag = flag && op;
      });
      return flag;
    },
    isTrueToSku(target, current) {
      // 判断是否匹配到SKU的某一项
      for (let i = 0; i < target.length; i++) {
        if (
          !(
            target[i].key === current[i].key && target[i].val === current[i].val
          )
        ) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
