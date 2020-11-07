<style scoped lang='scss'>
.sell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .sell-item {
    width: 176px;
    margin: 0 8px;
    .sell-item-product {
      width: 100%;
      background: #fff;
      padding-bottom: 7px;
      margin: 0 0 8px;
      img {
        width: 100%;
        height: auto;
      }
      .sell-item-product-name {
        width: 100%;
        margin: 4px 3px;
        color: #232326;
        font-size: 13px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .sell-item-product-price {
        display: flex;
        justify-content: space-between;
        margin: 5px 3px;
        color: $jd-textcolor;
        .looksameas {
          color: #686868;
          font-size: 12px;
          padding: 3px 2px;
          border: 1px solid #b5b5b5;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="sell">
    <div class="sell-item left" ref="left">
      <div
        class="sell-item-product"
        @click="toPage('product')"
        v-for="(item, index) in leftList"
        :key="index"
      >
        <img :src="item.imgUrl" alt />
        <div class="sell-item-product-name">{{ item.title }}</div>
        <div class="sell-item-product-price">
          ￥{{ item.price }}
          <div class="looksameas">看相似</div>
        </div>
      </div>
    </div>
    <div class="sell-item right" ref="right">
      <div
        class="sell-item-product"
        @click="toPage('product')"
        v-for="(item, index) in rightList"
        :key="index"
      >
        <img :src="item.imgUrl" alt />
        <div class="sell-item-product-name">{{ item.title }}</div>
        <div class="sell-item-product-price">
          ￥{{ item.price }}
          <div class="looksameas">看相似</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      leftList: [],
      rightList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$toast("加载中", "loading");
      setTimeout(() => {
        let item = {
          title: "阿迪达斯官网adidasRUN60S男子跑步运动鞋EG8688如图42",
          imgUrl:
            "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/134644/4/6748/205591/5f33cdebEf607444f/af20c026ad773e70.jpg!q70.dpg.webp",
          price: "499.00",
        };
        let dataList = [];
        for (let i = 0; i < 10; i++) {
          dataList.push(item);
        }
        for (let i = 0; i < dataList.length - 2; i++) {
          let sellItem = dataList[i];
          if (i % 2 === 0) {
            this.leftList.push(sellItem);
          } else {
            this.rightList.push(sellItem);
          }
        }
        this.$nextTick(() => {
          /*  let sellDom = document.querySelectorAll(".sell-item");
          let leftDom = sellDom[0],
            rightDom = sellDom[1]; */
          let leftDom = this.$refs.left,
            rightDom = this.$refs.right;
          if (leftDom.offsetHeight <= rightDom.offsetHeight) {
            this.leftList.push(dataList.pop());
          } else {
            this.rightList.push(dataList.pop());
          }
          this.$nextTick(() => {
            if (leftDom.offsetHeight <= rightDom.offsetHeight) {
              this.leftList.push(dataList.pop());
            } else {
              this.rightList.push(dataList.pop());
            }
          });
        });
        this.$closeToast();
      }, 800);
    },
    addData() {},
  },
};
</script>