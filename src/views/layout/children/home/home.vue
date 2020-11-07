<style scoped lang='scss'>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  .home-topbox {
    height: 140px;
    position: relative;
    .home-topbox-radiusback {
      width: 100%;
      height: 100%;
      background: linear-gradient($jd-backcolor, $jd-textcolor, #fff);
      border-radius: 0 0 80px 80px;
      position: absolute;
    }
    .home-topbox-swiper {
      position: absolute;
      width: 100%;
      height: 100%;
      .home-topbox-swiper-swiperbox {
        width: 100%;
        height: 100%;
        /deep/ .swiper-slide {
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            width: 350px;
            height: 140px;
            border-radius: 10px;
            margin: 0px auto;
            display: block;
          }
        }
      }
      .swiper-pagination {
        position: absolute;
        z-index: 5;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        .swiper-pagination-item {
          width: 8px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.6);
          margin: 0px 3px;
          &.active {
            width: 12px;
            background: #fff;
          }
        }
      }
    }
  }
  .home-selectbox {
    width: 355px;
    height: 152px;
    background: #fff;
    border-radius: 10px;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    padding: 6px;
    box-sizing: border-box;
    .home-selectbox-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: #666;
      font-size: 12px;
      margin: 0px 5px;
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 6px;
      }
    }
  }
  .home-timebox {
    margin: 10px auto;
    width: 355px;
    height: 152px;
    background: #fff;
    border-radius: 10px;
    .home-timebox-top {
      height: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      .top-left {
        display: flex;
        align-items: center;
        color: #333;
        font-size: 14px;
        .top-left-gettime {
          width: 104px;
          height: 18px;
          border: 1px solid #f2270c;
          border-radius: 12px;
          margin-left: 7px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #f2270c;
          font-size: 12px;
          padding-right: 8px;
          font-weight: bold;
          .top-left-gettime-current {
            width: 48px;
            height: 100%;
            border-radius: 12px;
            background: linear-gradient(to right, #f10001, #fe4e18);
            color: #fff;
            text-align: center;
            line-height: 18px;
          }
        }
      }
      .top-right {
        color: $jd-textcolor;
        font-size: 12px;
        padding-right: 15px;
        background: url("http://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png")
          no-repeat;
        background-size: 10px;
        background-position: right center;
      }
    }
    .home-timebox-down {
      height: calc(100% - 34px);
      .home-timebox-down-swiper {
        width: 100%;
        height: 100%;
        /deep/ .swiper-slide {
          width: auto;
          height: 100%;
          .timebox-item {
            width: 76px;
            height: 116px;
            margin-right: 5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            font-size: 14px;
            img {
              width: 66px;
              height: 66px;
            }
            .timebox-item-price {
              font-weight: bold;
              color: $jd-textcolor;
              margin-top: 10px;
              display: flex;
              align-items: center;
              span {
                font-size: 12px;
              }
            }
            .timebox-item-originprice {
              color: #999;
              text-decoration: line-through;
              font-size: 12px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .home-newpeoplebox {
    width: 100%;
    height: 50px;
    background-image: url("http://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .home-advswiper {
    width: 355px;
    height: 95px;
    margin: 0 auto;
    overflow: hidden;
    .home-advswiper-swiper {
      width: 100%;
      height: 100%;
      /deep/ .swiper-slide {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        &.swiper-slide-next {
          img {
            width: 120px;
            height: 93px;
          }
        }
        img {
          width: 110px;
          height: 84px;
        }
      }
    }
  }
  .home-eachday {
    margin-top: 10px;
    .home-eachday-top {
      width: 100%;
      height: 35px;
      background-image: url("http://m.360buyimg.com/mobilecms/s750x80_jfs/t1/118793/9/10620/23804/5ef008fbE5d9a21ec/55f3eb03ac9e05a4.png!q70.jpg.dpg");
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .home-eachday-sell {
      width: 355px;
      margin: 0 auto;
      background: #fff;
      overflow: hidden;
      .home-eachday-sell-item {
        width: 25%;
        height: 120px;
        float: left;
        border-right: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        &:nth-child(4n) {
          border-right: 0;
        }
        &:nth-child(even) .sell-item-title {
          background: linear-gradient(90deg, #2ad396, #85bb1f);
          -webkit-background-clip: text;
          color: transparent;
        }
        .sell-item-title {
          width: 67px;
          margin-top: 5px;
          background: linear-gradient(90deg, #ff2a2a, #f139d2);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: bold;
        }
        .sell-item-subtitle {
          width: 67px;
          font-size: 12px;
          color: #333;
          margin: 3px 0;
        }
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  .home-sellbox {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    .home-sellbox-menu {
      width: 100%;
      height: 50px;
      padding: 0px 10px;
      box-sizing: border-box;
      .home-sellbox-menu-swiper {
        width: 100%;
        height: 100%;
        /deep/ .swiper-slide {
          width: auto;
          height: 100%;
          .menu-swiper-item {
            padding: 0px 10px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #999;
            font-size: 12px;
            .menu-swiper-item-title {
              font-size: 14px;
              color: #333;
              font-weight: bold;
              margin-bottom: 5px;
              &.active {
                font-size: 16px;
                margin-bottom: 3px;
                color: $jd-textcolor;
              }
            }
          }
        }
      }
    }
    .home-sellbox-content {
      height: calc(100% - 50px);
      background: #f7f7f7;
      .home-sellbox-content-swiper {
        height: 100%;
        width: 100%;
        /deep/ .swiper-slide {
          width: 100%;
          height: 100%;
          .sellbox {
            width: 100%;
            height: 100%;
            overflow: hidden;
            &.active {
              overflow: auto;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="home" @scroll="scrollEvent">
    <div class="home-topbox">
      <div class="home-topbox-radiusback"></div>
      <div class="home-topbox-swiper">
        <div class="swiper-pagination">
          <div
            class="swiper-pagination-item"
            :class="{active:item.active}"
            v-for="(item,index) in swiperPlayList"
            :key="index"
          ></div>
        </div>
        <swiper
          @slideChangeTransitionStart="swiperChange"
          class="home-topbox-swiper-swiperbox"
          ref="swiperPlayer"
          :options="swiperOption1"
        >
          <swiper-slide v-for="(item,index) in swiperPlayList" :key="index">
            <img :src="item.imgUrl" alt />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="home-selectbox">
      <div class="home-selectbox-item" v-for="(item,index) in selectList" :key="index">
        <img :src="item.imgUrl" alt />
        {{item.title}}
      </div>
    </div>
    <div class="home-timebox">
      <div class="home-timebox-top">
        <div class="top-left">
          京东秒杀
          <div class="top-left-gettime">
            <div class="top-left-gettime-current">{{hours}}点场</div>
            {{haveLastTime}}
          </div>
        </div>
        <div class="top-right" @click="toPage('time')">更多秒杀</div>
      </div>
      <div class="home-timebox-down">
        <swiper class="home-timebox-down-swiper" ref="swiperKillTime" :options="swiperOption2">
          <swiper-slide v-for="(item,index) in killTimeList" :key="index">
            <div class="timebox-item">
              <img :src="item.imgUrl" alt />
              <div class="timebox-item-price">
                <span>￥</span>
                {{item.price}}
              </div>
              <div class="timebox-item-originprice">￥{{item.originPrice}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="home-newpeoplebox"></div>
    <div class="home-advswiper">
      <swiper class="home-advswiper-swiper" ref="swiperAdv" :options="swiperOption3">
        <swiper-slide v-for="(item,index) in swiperAdvList" :key="index">
          <img :src="item.imgUrl" alt />
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-eachday">
      <div class="home-eachday-top"></div>
      <div class="home-eachday-sell">
        <div class="home-eachday-sell-item" v-for="(item,index) in eachDayList" :key="index">
          <div class="sell-item-title">{{item.title}}</div>
          <div class="sell-item-subtitle">{{item.subTitle}}</div>
          <img :src="item.imgUrl" alt />
        </div>
      </div>
    </div>
    <div class="home-sellbox">
      <div class="home-sellbox-menu">
        <swiper class="home-sellbox-menu-swiper" ref="swiperMenu" :options="swiperOption4">
          <swiper-slide v-for="(item,index) in menuList" :key="index">
            <div class="menu-swiper-item" @click="checkMenu(index)">
              <span :class="[item.active?'active':'']" class="menu-swiper-item-title">{{item.title}}</span>
              {{item.subTitle}}
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="home-sellbox-content">
        <swiper
          @slideChangeTransitionStart="swiperDownChange"
          class="home-sellbox-content-swiper"
          ref="swiperSell"
        >
          <swiper-slide v-for="(item,index) in menuList" :key="index">
            <div :class="{active:canScroll}" @scroll="toDownEvent" class="sellbox">
              <Sell v-if="item.isShow" :ref="`sell${index}`" :name="item.name" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Sell from "./components/sell";
export default {
  data() {
    return {
      hours: "00",
      timer: null,
      haveLastTime: "00:00:00",
      isLoad: false,
      canScroll: false,
      swiperPlayList: [
        // 顶部轮播
        {
          active: true,
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/153115/24/425/159774/5f6846fbE62cdd497/86392132423c062e.jpg!q70.jpg.dpg",
        },
        {
          active: false,
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/21384/5/7418/82815/5c6c2095E62382370/7633f953971109c7.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        },
        {
          active: false,
          imgUrl:
            "http://imgcps.jd.com/ling4/72477825388/5LqM5omL5ZWG5ZOB55yB5b-D6LSt/6LSo6YeP5pyJ5L-d6K-B/p-5c13869682acdd181deeff2b/0aa4f419/cr_1125x445_0_171/s1125x690/q70.jpg",
        },
      ],
      swiperOption1: {
        // 顶部轮播配置
        speed: 300,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      selectList: [
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp",
          title: "京东超市",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp",
          title: "数码电器",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp",
          title: "京东服饰",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp",
          title: "京东生鲜",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp",
          title: "京东到家",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp",
          title: "充值缴费",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp",
          title: "9.9元拼",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp",
          title: "领券",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129184/28/5977/3711/5efbf53aE2c2e6a07/7db529ce0e00838f.png.webp",
          title: "借钱",
          name: "market",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp",
          title: "PLUS会员",
          name: "market",
        },
      ],
      killTimeList: [
        // 秒杀
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/126490/25/8920/87221/5f2bb3abE4099d469/cec53948bfd4c265.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/143479/11/4769/194283/5f2d7576Ef635e91f/416f820e52410175.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/94784/18/8117/103976/5e009e67E88cd6a3f/dec6ca10b4bf3285.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/117563/31/14004/101534/5f2bc93fEd1dfe5a6/448cff3a7fa7684c.png",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/148016/29/4543/153553/5f2b7d22Efac14829/807843118afeec63.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/143406/31/4805/89490/5f2bc077E165142be/d0beea16ee341e45.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/122491/7/8862/81456/5f2a1b4bE7cfe9268/511e2cc79b979cd7.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
        {
          imgUrl:
            "https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/126490/25/8920/87221/5f2bb3abE4099d469/cec53948bfd4c265.jpg.dpg",
          price: "9.90",
          originPrice: "19.90",
        },
      ],
      swiperOption2: {
        // 秒杀swiper配置
        speed: 300,
        slidesPerView: "auto",
        freeMode: true,
      },
      swiperAdvList: [
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s244x187_jfs/t1/148852/1/5140/99813/5f3246deEdf10b356/a4b9e92328582ef7.png!q70.jpg.dpg",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s244x187_jfs/t1/111534/28/14701/35331/5f31093dE69a9953e/6514150c9af4ab69.png!q70.jpg.dpg",
        },
        {
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s244x187_jfs/t1/133759/16/6616/27491/5f326007E280ce2c4/8df895c19e74e6ff.png!q70.jpg.dpg",
        },
      ],
      swiperOption3: {
        speed: 300,
        loop: true,
        autoplay: true,
        slidesPerView: 3,
      },
      eachDayList: [
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
        {
          title: "每日好物",
          subTitle: "9.9元抢",
          imgUrl:
            "http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg",
        },
      ],
      menuList: [
        {
          title: "首页",
          subTitle: "为你推荐",
          active: true,
          name: "index",
          isShow: true,
        },
        {
          title: "手机数码",
          subTitle: "人气数码产品",
          active: false,
          name: "phone",
          isShow: false,
        },
        {
          title: "电脑办公",
          subTitle: "高端办公电脑",
          active: false,
          name: "computer",
          isShow: false,
        },
        {
          title: "家居服饰",
          subTitle: "人气新品",
          active: false,
          name: "home",
          isShow: false,
        },
        {
          title: "美妆护肤",
          subTitle: "快来种草",
          active: false,
          name: "beautiful",
          isShow: false,
        },
        {
          title: "汽车生活",
          subTitle: "男生的最爱",
          active: false,
          name: "car",
          isShow: false,
        },
        {
          title: "京东超市",
          subTitle: "京东优选",
          active: false,
          name: "market",
          isShow: false,
        },
      ],
      swiperOption4: {
        slidesPerView: "auto",
        freeMode: true,
        speed: 300,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Sell,
  },
  created() {
    this.hours = new Date().getHours();
    this.timer = setInterval(() => {
      this.setTime();
    }, 1000);
  },
  mounted() {
    if (window.plus) {
      let wv = window.plus.webview.currentWebview();
      wv.setPullToRefresh(
        {
          support: true,
          style: "circle",
          color: "#e43130",
        },
        () => {
          window.history.go(0);
          wv.endPullToRefresh();
        }
      );
    } else {
      document.addEventListener("plusready", () => {
        let wv = window.plus.webview.currentWebview();
        wv.setPullToRefresh(
          {
            support: true,
            style: "circle",
            color: "#e43130",
          },
          () => {
            window.history.go(0);
            wv.endPullToRefresh();
          }
        );
      });
    }
  },
  methods: {
    setTime() {
      let time = new Date();
      let haveLastSecond = 3600 - time.getMinutes() * 60 - time.getSeconds();
      let minute = Math.floor(haveLastSecond / 60);
      let second = haveLastSecond % 60;
      if (!minute && !second) {
        this.hours = new Date().getHours();
        this.haveLastTime = "01:00:00";
        return;
      }
      if (minute < 10) minute = "0" + minute;
      if (second < 10) second = "0" + second;
      this.haveLastTime = "00:" + minute + ":" + second;
    },
    swiperChange(e) {
      this.swiperPlayList = this.swiperPlayList.map((item, index) => {
        item.active = false;
        if (index === e.realIndex) item.active = true;
        return item;
      });
    },
    scrollEvent(e) {
      let home = document.querySelector(".home");
      if (home.clientHeight + e.target.scrollTop >= home.scrollHeight - 10) {
        this.canScroll = true;
      } else {
        this.canScroll = false;
      }
      if (window.plus) {
        let wv = window.plus.webview.currentWebview();
        if (e.target.scrollTop <= 10) {
          // 可以下拉刷新
          wv.setPullToRefresh(
            {
              support: true,
              style: "circle",
              color: "#e43130",
            },
            () => {
              window.history.go(0);
              wv.endPullToRefresh();
            }
          );
        } else {
          // 禁止下拉刷新
          wv.setPullToRefresh({ support: false });
        }
      }
    },
    toDownEvent(e) {
      const dom = e.target;
      if (dom.clientHeight + dom.scrollTop >= dom.scrollHeight - 10) {
        if (!this.isLoad) {
          this.isLoad = true;
          let index = this.menuList.findIndex((item) => item.active);
          let comp = this.$refs[`sell${index}`][0];
          comp.getData();
          setTimeout(() => {
            this.isLoad = false;
          }, 800);
        }
      }
    },
    checkMenu(index) {
      this.menuList = this.menuList.map((item, num) => {
        item.active = false;
        if (num === index) {
          item.active = true;
          if (!item.isShow) item.isShow = true;
        }
        return item;
      });
      let swiperTop = this.$refs.swiperMenu.swiperInstance,
        swiperDown = this.$refs.swiperSell.swiperInstance;
      swiperTop.slideTo(index, 300, false);
      swiperDown.slideTo(index, 300, false);
    },
    swiperDownChange() {
      let swiperDown = this.$refs.swiperSell.swiperInstance;
      this.checkMenu(swiperDown.realIndex);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>