<style scoped lang='scss'>
.time {
  @extend .page;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #f7f7f7;
  .time-content {
    flex: 1;
    width: 100%;
    overflow: auto;
    .time-content-top {
      width: 100%;
      height: 132px;
      background-image: linear-gradient(270deg, #ff4142, #ff4b2b);
      border-radius: 0 0 50% 50%;
      .time-content-top-container {
        width: 355px;
        height: 160px;
        background: #fff;
        transform: translateY(10px);
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        &::after {
          content: "";
          width: 1px;
          height: 150px;
          background: #f2f2f2;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
        .time-content-top-container-item {
          flex: 1;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 10px;
          box-sizing: border-box;
          &:last-child .time-content-top-container-item-title .title-tag {
            color: #ff361a;
            border: 1px solid #ff361a;
          }
          .time-content-top-container-item-title {
            display: flex;
            color: #333;
            font-size: 18px;
            .title-tag {
              margin-left: 5px;
              padding: 2px 3px;
              border: 1px solid #8555fc;
              color: #8555fc;
              font-size: 12px;
              border-radius: 15px;
            }
          }
          .item-content-top-container-item-sellbox {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .sellbox-item {
              transform: translateY(20px);
              width: 73px;
              height: 106px;
              background-image: url("http://img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp");
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
    .time-content-timerbox {
      width: 100%;
      height: 60px;
      margin-top: 40px;
      display: flex;
      &.fixed {
        position: fixed;
        top: 45px;
        left: 0;
        background: #fff;
        margin-top: 0;
      }
      & > div {
        height: 100%;
      }
      .time-content-timerbox-left {
        width: 86px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        position: relative;
        box-sizing: border-box;
        &::after {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 80%;
          background: #eee;
          content: "";
        }
        .timerbox-left-info {
          margin-top: 5px;
          display: flex;
          align-items: center;
          font-weight: normal;
          font-size: 12px;
          &::after {
            content: "";
            width: 20px;
            height: 12px;
            margin-left: 5px;
            background-image: url("data:image/png;base64,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");
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
      }
      .time-content-timerbox-right {
        width: calc(100% - 86px);
        overflow: hidden;
        .timerbox-right-swiper {
          width: 100%;
          height: 100%;
          /deep/ .swiper-slide {
            width: auto;
            height: 100%;
            .timerbox-right-swiper-item {
              width: 70px;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .timerbox-right-swiper-item-time {
                color: #333;
                font-weight: bold;
                font-size: 14px;
                &.active {
                  color: $jd-textcolor;
                }
              }
              .timerbox-right-swiper-item-state {
                width: 40px;
                height: 15px;
                margin-top: 5px;
                border-radius: 15px;
                text-align: center;
                line-height: 15px;
                font-size: 12px;
                color: #333;
                &.active {
                  background: $jd-textcolor;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .time-content-sellbox {
      width: 355px;
      margin: 10px auto 0;
      .time-content-sellbox-item {
        width: 355px;
        background: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 15px;
        margin-bottom: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sellbox-item-img {
          width: 115px;
          height: 115px;
          background: #eee;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .sellbox-item-content {
          width: 210px;
          height: 115px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          & > div {
            width: 100%;
          }
          .sellbox-item-content-top {
            .sellbox-item-content-top-title {
              color: #000;
              font-size: 15px;
              max-height: 36px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .sellbox-item-content-top-subtitle {
              margin-top: 5px;
              color: $jd-textcolor;
              font-size: 13px;
            }
          }
          .sellbox-item-content-down {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .sellbox-item-content-down-left {
              display: flex;
              align-items: baseline;
              .left-money {
                color: $jd-textcolor;
                display: flex;
                align-items: baseline;
                font-size: 20px;
                font-weight: bold;
                .left-money-logo {
                  font-size: 13px;
                }
              }
              .left-oldmoney {
                color: #bfbfbf;
                font-size: 12px;
                text-decoration: line-through;
                margin-left: 5px;
              }
            }
            .sellbox-item-content-down-right {
              width: 80px;
              height: 40px;
              border-radius: 10px;
              color: #fff;
              font-size: 14px;
              background: linear-gradient(270deg, #ff1451, #ff4500);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              &.next {
                background: linear-gradient(270deg, #26e377, #00bf7b);
              }
              &.last {
                background: #999;
              }
              .sellbox-item-content-down-right-line {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                .line-left {
                  width: 40px;
                  height: 4px;
                  background: #eee;
                  border-radius: 4px;
                  overflow: hidden;
                  margin-right: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="time">
    <Title ref="title" title="京东秒杀" navBarBack="#fff" />
    <div class="time-content">
      <div class="time-content-top">
        <div class="time-content-top-container">
          <div class="time-content-top-container-item">
            <div class="time-content-top-container-item-title">
              品牌闪购
              <div class="title-tag">精选优选特卖</div>
            </div>
            <div class="item-content-top-container-item-sellbox">
              <div class="sellbox-item"></div>
              <div class="sellbox-item"></div>
            </div>
          </div>
          <div class="time-content-top-container-item">
            <div class="time-content-top-container-item-title">
              每日特价
              <div class="title-tag">超低低价好货</div>
            </div>
            <div class="item-content-top-container-item-sellbox">
              <div class="sellbox-item"></div>
              <div class="sellbox-item"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="time-content-timerbox" :class="{fixed:isFixed}">
        <div class="time-content-timerbox-left">
          最后疯抢
          <div class="timerbox-left-info">已开抢</div>
        </div>
        <div class="time-content-timerbox-right">
          <swiper class="timerbox-right-swiper" ref="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in timeList" :key="index">
              <div class="timerbox-right-swiper-item" @click="getTimeDetail(index)">
                <div
                  class="timerbox-right-swiper-item-time"
                  :class="{active:item.isCheck}"
                >{{item.time}}</div>
                <div
                  class="timerbox-right-swiper-item-state"
                  :class="{active:item.isCheck}"
                >{{item.state===0?'已结束':(item.state===1?'进行中':'未开始')}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="time-content-sellbox" v-if="currentSellList">
        <div
          class="time-content-sellbox-item"
          v-for="(item,index) in currentSellList.sellList"
          :key="index"
        >
          <div class="sellbox-item-img">
            <img :src="item.imgUrl" alt />
          </div>
          <div class="sellbox-item-content">
            <div class="sellbox-item-content-top">
              <div class="sellbox-item-content-top-title">{{item.title}}</div>
              <div class="sellbox-item-content-top-subtitle">{{item.subTitle}}</div>
            </div>
            <div class="sellbox-item-content-down">
              <div class="sellbox-item-content-down-left">
                <div class="left-money">
                  <div class="left-money-logo">￥</div>
                  {{item.price}}
                </div>
                <div class="left-oldmoney">{{item.originPrice}}</div>
              </div>
              <div
                class="sellbox-item-content-down-right"
                :class="[currentSellList.state===0?'last':(currentSellList.state===1?'':'next')]"
              >
                {{currentSellList.state===0?'已结束':(currentSellList.state===1?'去抢购':'未开始')}}
                <div class="sellbox-item-content-down-right-line" v-if="currentSellList.state!==2">
                  <div class="line-left"></div>
                  <span>{{item.haveSell}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      isFixed: false,
      swiperOption: {
        slidesPerView: "auto",
        /* centeredSlides: true */
      },
      timeList: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    setTimeout(() => {
      let timeArr = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ];
      this.timeList = [
        {
          time: "08:00",
          sellList: [
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
            {
              imgUrl:
                "//img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
              title: "法国梦时力 经典款真皮女鞋",
              subTitle: "4条29.8|赠运费险",
              price: "28.50",
              originPrice: "49.85",
              haveSell: 20,
            },
          ],
        },
      ];
      timeArr.forEach((item) => {
        let timeItem = JSON.parse(JSON.stringify(this.timeList[0]));
        timeItem.time = item;
        this.timeList.push(timeItem);
      });
      let nowTime = new Date().getHours();
      this.timeList = this.timeList.map((item, index) => {
        let itemTime = index + 8;
        item.isCheck = false;
        if (nowTime > itemTime) {
          // 结束
          item.state = 0;
        } else if (nowTime === itemTime) {
          // 进行中
          item.state = 1;
          item.isCheck = true;
        } else {
          // 没开始
          item.state = 2;
        }
        return item;
      });
      this.$nextTick(() => {
        let index = this.timeList.findIndex((item) => item.state === 1);
        this.$refs.swiper.swiperInstance.slideTo(index, 300, false);
      });
    }, 200);
  },
  computed: {
    currentSellList() {
      return this.timeList.find((item) => item.isCheck);
    },
  },
  mounted() {
    let dom = document.querySelector(".time-content-timerbox-left");
    let top = dom.offsetTop - this.$refs.title.$el.offsetHeight;
    document.querySelector(".time-content").addEventListener(
      "scroll",
      (e) => {
        if (e.target.scrollTop > top) {
          if (!this.isFixed) {
            this.isFixed = true;
          }
        } else {
          if (this.isFixed) {
            this.isFixed = false;
          }
        }
      },
      false
    );
  },
  methods: {
    getTimeDetail(index) {
      this.$toast("加载中", "loading");
      setTimeout(() => {
        this.$closeToast();
        this.timeList = this.timeList.map((item, num) => {
          item.isCheck = false;
          if (index === num) item.isCheck = true;
          return item;
        });
        let swiper = this.$refs.swiper;
        if (swiper) {
          swiper.swiperInstance.slideTo(index, 300, false);
        }
      }, 400);
    },
  },
};
</script>