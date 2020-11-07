<style scoped lang='scss'>
.shoppingcar {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .shoppingcar-top {
    height: 50px;
    background: #fff;
    border-radius: 0 0 15px 15px;
    padding: 0px 18px;
    box-sizing: border-box;
    font-size: 13px;
    color: #262626;
    .shoppingcar-top-address {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      span {
        display: inline-block;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      &::before {
        width: 12px;
        height: 12px;
        content: "";
        margin-right: 10px;
        background-position: 0 -93px;
        background-size: 130px 105px;
        background-image: url("//wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_16ed632a.png");
      }
    }
    .shoppingcar-top-unlogin {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .shoppingcar-top-unlogin-btn {
        margin-left: 10px;
        width: 58px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
        box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
        border-radius: 15px;
      }
    }
  }
  .shoppingcar-sellbox {
    margin: 10px 0;
    .shoppingcar-sellbox-unlogin {
      padding: 60px 0;
      .unlogin-logo {
        margin: 0px auto;
        width: 90px;
        height: 90px;
        background: url("http://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png")
          no-repeat 50%;
        background-size: 90px 90px;
      }
      .unlogin-text {
        text-align: center;
        margin: 10px auto 0;
        font-size: 13px;
        color: #333;
      }
    }
    .shoppingcar-sellbox-content {
      background: #fff;
      border-radius: 10px;
      padding: 10px 0;
      .shoppingcar-sellbox-content-item {
        margin-top: 10px;
        padding: 0 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-choose {
          background-image: url("http://wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_16ed632a.png");
          background-position: 0 -31px;
          background-size: 130px 105px;
          width: 31px;
          height: 31px;
          &.active {
            background-position: -31px 0;
          }
        }
        img {
          width: 100px;
          height: 100px;
        }
        .item-container {
          width: 195px;
          height: 100px;
          color: #262626;
          font-size: 12px;
          .item-container-title {
            height: 34px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .item-container-sku {
            overflow: hidden;
            margin-top: 6px;
            border-radius: 10px;
            height: 16px;
            line-height: 16px;
            padding: 0 10px;
            box-sizing: border-box;
            background: #f2f2f2;
          }
          .item-container-price {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            color: $jd-textcolor;
            font-weight: bold;
            margin-top: 23px;
            font-size: 15px;
            .item-container-price-op {
              /deep/ .van-stepper__minus {
                height: 20px;
                width: 20px;
              }
              /deep/ .van-stepper__plus {
                height: 20px;
                width: 20px;
              }
              /deep/ .van-stepper__input {
                height: 20px;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
  .shoppingcar-gaslike {
    margin-bottom: 70px;
    .shoppingcar-gaslike-title {
      color: #999;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before,
      &::after {
        width: 140px;
        height: 1px;
        background: #eee;
        content: "";
        margin: 0px 5px;
      }
    }
    .shoppingcar-gaslike-content {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .shoppingcar-gaslike-content-item {
        border-radius: 15px;
        background: #fff;
        padding: 15px 15px 0;
        width: 157px;
        img {
          width: 100%;
          height: auto;
        }
        .shoppingcar-gaslike-content-item-title {
          margin: 12px 0 4px;
          color: #999;
          font-size: 13px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .shoppingcar-gaslike-content-item-money {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          align-items: flex-end;
          color: $jd-textcolor;
          margin-top: 10px;
          .item-money-logo {
            font-weight: bold;
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            .logo {
              font-size: 12px;
              margin-right: 3px;
            }
          }
          .item-money-car {
            width: 30px;
            height: 24px;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAOVBMVEUAAADqPD7qOz/vP0DqOz3rPD7qOz7qPD3pOz7qPD7qOz7qPT/qOz3qPD3pPD3rPT/tO0H/RkbpOz36jkSnAAAAEnRSTlMA5Ekd3V2eqphzYjzy0Lx+Kwtw+iurAAAAbElEQVQoz63QSw7DIAwA0XFISz79+v6HbSW28WyS2VkWPAHnyn/N1xvSLTtSy8Cas2icu5frPvCqdeBVu+NfDH+C4QsYvvnLPyD4Awx/geGrf3sDwd8g+AJU+Nx3rmuKmA6nUWRGMclaLj/fD/9IGxUTc5duAAAAAElFTkSuQmCC")
              no-repeat 50%;
            background-size: 15px;
          }
        }
      }
    }
  }
  .shoppingcar-buybar {
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    padding: 0px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shoppingcar-buybar-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      color: #262626;
      .shoppingcar-buybar-left-allchoose {
        background-image: url("http://wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_16ed632a.png");
        background-position: 0 -31px;
        background-size: 130px 105px;
        width: 31px;
        height: 31px;
        margin-right: 3px;
        &.active {
          background-position: -31px 0;
        }
      }
    }
    .shoppingcar-buybar-right {
      display: flex;
      align-items: center;
      color: #262626;
      .price {
        font-weight: bold;
        margin-right: 8px;
      }
      .buybtn {
        letter-spacing: 1px;
        font-weight: 700;
        display: block;
        width: 113px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 13px;
        border-radius: 20px;
        background-color: #f2270c;
        color: #fff;
        font-size: 14px;
        background-image: linear-gradient(
          135deg,
          #f2140c,
          #f2270c 70%,
          #f24d0c
        );
      }
      .del {
        width: 250px;
        height: 50px;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        z-index: 20;
        bottom: 50px;
        right: 0;
        .del-btn {
          /* background: rgba(255,255,255,0.95); */
          float: right;
          box-sizing: border-box;
          border: 1px solid #8c8c8c;
          display: block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 12px;
          border-radius: 15px;
          margin: 10px 12px 0 0;
        }
      }
    }
  }
  .shoppingcar-btnbox {
    width: 100%;
    height: 100%;
    font-size: 13px;
    color: #fff;
    .shoppingcar-btnbox-have {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shoppingcar-btnbox-have-item {
        flex: 1;
        margin: 0 15px;
        height: 38px;
        border-radius: 18px;
        text-align: center;
        line-height: 38px;
        &.buy {
          background: $jd-backcolor;
        }
        &.add {
          background: #f60;
        }
        &.no {
          background: #ccc;
        }
      }
    }
  }
}
</style>

<template>
  <div class="shoppingcar">
    <Sku ref="sku" :sellInfo="getSellInfo">
      <template slot-scope="scope">
        <div class="shoppingcar-btnbox">
          <div class="shoppingcar-btnbox-have">
            <div
              class="shoppingcar-btnbox-have-item buy"
              @click="resetShoppingcarItem(scope.info)"
              v-if="scope.info.finallyNumber!=0"
            >确定</div>
            <div class="shoppingcar-btnbox-have-item no" v-else>占时缺货</div>
          </div>
        </div>
      </template>
    </Sku>
    <div class="shoppingcar-top">
      <div v-if="isLogin" class="shoppingcar-top-address">
        <span>{{address}}</span>
        <div @click="isMainer=!isMainer">{{isMainer?'完成':'管理'}}</div>
      </div>
      <div v-else class="shoppingcar-top-unlogin">
        登录后可同步账户购物车中的商品
        <div class="shoppingcar-top-unlogin-btn" @click="toPage('login')">登录</div>
      </div>
    </div>
    <div class="shoppingcar-sellbox">
      <div class="shoppingcar-sellbox-unlogin" v-if="!isLogin||userInfo.shoppingcarList.length===0">
        <div class="unlogin-logo"></div>
        <div class="unlogin-text">购物车中暂无商品哦~</div>
      </div>
      <div class="shoppingcar-sellbox-content" v-else>
        <div
          class="shoppingcar-sellbox-content-item"
          v-for="(item,index) in userInfo.shoppingcarList"
          :key="index"
        >
          <div
            @click="chooseSellItem(index)"
            class="item-choose"
            :class="{active:userInfo.shoppingcarList[index].isCheck}"
          ></div>
          <img :src="item.imgUrl" alt />
          <div class="item-container">
            <div class="item-container-title">{{item.title}}</div>
            <div class="item-container-sku" @click="getSku(index)">{{item.productAttr | formatSku}}</div>
            <div class="item-container-price">
              ￥{{item.price}}
              <div class="item-container-price-op">
                <van-stepper v-model="userInfo.shoppingcarList[index].quaity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoppingcar-gaslike">
      <div class="shoppingcar-gaslike-title">猜你喜欢</div>
      <div class="shoppingcar-gaslike-content">
        <div class="shoppingcar-gaslike-content-item" v-for="(item,index) in gasLike" :key="index">
          <img :src="item.imgUrl" alt />
          <div class="shoppingcar-gaslike-content-item-title">{{item.title}}</div>
          <div class="shoppingcar-gaslike-content-item-money">
            <div class="item-money-logo">
              <div class="logo">￥</div>
              {{item.price}}
            </div>
            <div class="item-money-car"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoppingcar-buybar">
      <div @click="chooseAll" class="shoppingcar-buybar-left">
        <div class="shoppingcar-buybar-left-allchoose" :class="{active:isAllCheck}"></div>全选
      </div>
      <div class="shoppingcar-buybar-right">
        共计:
        <div class="price">￥{{getFinallPrice.toFixed(2)}}</div>
        <div class="buybtn">去结算({{userInfo.shoppingcarList.filter((item=>item.isCheck)).length}}件)</div>
        <div class="del" v-if="isMainer">
          <div class="del-btn" @click="delShoppingcarItem">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sellIndex: 0,
      isAllCheck: false,
      isMainer: false,
      isLogin: false,
      gasLike: [
        {
          imgUrl:
            "http://img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
          price: "199.00",
          skuList: [
            { key: "颜色", value: ["红色", "白色"] },
            { key: "大小", value: ["S", "M", "L"] },
            { key: "款式", value: ["春秋", "冬季"] },
          ],
          defaultSku: [
            { key: "颜色", val: "红色" },
            { key: "大小", val: "S" },
            { key: "款式", val: "春秋" },
          ],
          stockPriceList: [
            {
              skill: [
                { key: "颜色", val: "红色" },
                { key: "大小", val: "S" },
                { key: "款式", val: "春秋" },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [
                { key: "颜色", val: "红色" },
                { key: "大小", val: "M" },
                { key: "款式", val: "春秋" },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [
                { key: "颜色", val: "红色" },
                { key: "大小", val: "L" },
                { key: "款式", val: "春秋" },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [
                { key: "颜色", val: "红色" },
                { key: "大小", val: "S" },
                { key: "款式", val: "冬季" },
              ],
              price: "299.00",
              number: 755,
            },
            {
              skill: [
                { key: "颜色", val: "红色" },
                { key: "大小", val: "M" },
                { key: "款式", val: "冬季" },
              ],
              price: "199.00",
              number: 100,
            },
            {
              skill: [
                { key: "颜色", val: "白色" },
                { key: "大小", val: "S" },
                { key: "款式", val: "春秋" },
              ],
              price: "399.00",
              number: 128,
            },
            {
              skill: [
                { key: "颜色", val: "白色" },
                { key: "大小", val: "M" },
                { key: "款式", val: "春秋" },
              ],
              price: "499.00",
              number: 200,
            },
            {
              skill: [
                { key: "颜色", val: "白色" },
                { key: "大小", val: "L" },
                { key: "款式", val: "春秋" },
              ],
              price: "599.00",
              number: 99,
            },
            {
              skill: [
                { key: "颜色", val: "白色" },
                { key: "大小", val: "S" },
                { key: "款式", val: "冬季" },
              ],
              price: "699.00",
              number: 3,
            },
            {
              skill: [
                { key: "颜色", val: "白色" },
                { key: "大小", val: "L" },
                { key: "款式", val: "冬季" },
              ],
              price: "1299.00",
              number: 999,
            },
          ],
          title:
            "海飞丝男士防脱发育发洗发水套装 洗发水145ML+头皮焕活精华40ML（男士科学防脱养生发际线 增发密发）",
        },
      ],
    };
  },
  created() {
    let item = JSON.parse(JSON.stringify(this.gasLike[0]));
    for (let i = 1; i <= 7; i++) {
      this.gasLike.push(item);
    }
    if (this.$store.state.userInfo.nickName) {
      // 登录过了
      //this.userInfo = this.$store.state.userInfo;
      this.isLogin = true;
    }
  },
  mounted() {
    if (window.plus) {
      window.plus.webview.currentWebview().setPullToRefresh({ support: false });
    }
  },
  computed: {
    userInfo: {
      set(val) {
        this.$store.commit("setUserInfo", val);
      },
      get() {
        return this.$store.state.userInfo;
      },
    },
    address() {
      let addressList = this.userInfo.addressList;
      let address = addressList.find((item) => item.isDefault);
      return address.name + address.phone + address.detailAddress;
    },
    getFinallPrice() {
      let shoppingcarList = this.userInfo.shoppingcarList;
      let price = 0;
      shoppingcarList
        .filter((op) => op.isCheck)
        .forEach((item) => {
          price += item.price * item.quaity;
        });
      return price;
    },
    getSellInfo() {
      return this.userInfo.shoppingcarList[this.sellIndex];
    },
  },
  methods: {
    resetShoppingcarItem(info) {
      console.log(info);
      let copyUserInfo = this.userInfo;
      copyUserInfo.shoppingcarList[this.sellIndex].productAttr =
        info.productAttr;
      copyUserInfo.shoppingcarList[this.sellIndex].price = info.finallyPrice;
      this.userInfo = copyUserInfo;
      setTimeout(() => {
        this.$refs.sku.setSkuShow(false);
      }, 300);
    },
    getSku(index) {
      this.sellIndex = index;
      this.$refs.sku.setSkuShow(true);
    },
    chooseSellItem(index) {
      this.userInfo.shoppingcarList = this.userInfo.shoppingcarList.map(
        (item, num) => {
          if (index === num) {
            item.isCheck = !item.isCheck;
          }
          return item;
        }
      );
      this.isAllCheck = true;
      this.userInfo.shoppingcarList.forEach((item) => {
        if (!item.isCheck) {
          this.isAllCheck = false;
        }
      });
    },
    chooseAll() {
      this.userInfo.shoppingcarList = this.userInfo.shoppingcarList.map(
        (item) => {
          item.isCheck = !this.isAllCheck;
          return item;
        }
      );
      this.isAllCheck = !this.isAllCheck;
    },
    delShoppingcarItem() {
      this.userInfo.shoppingcarList = this.userInfo.shoppingcarList.filter(
        (item) => !item.isCheck
      );
    },
  },
  filters: {
    formatSku(skuList) {
      let text = "";
      if (skuList && skuList.length !== 0) {
        skuList.forEach((item) => {
          text += `${item.key}:${item.val},`;
        });
        text = text.slice(0, text.length - 1);
      }
      return text;
    },
  },
};
</script>