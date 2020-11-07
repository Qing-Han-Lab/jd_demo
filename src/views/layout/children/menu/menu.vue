<style scoped lang='scss'>
.menu {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .menu-left {
    width: 86px;
    height: 100%;
    background: #f8f8f8;
    .menu-left-swiper {
      width: 100%;
      height: 100%;
      /deep/ .swiper-slide {
        width: 100%;
        height: auto;
        .swiper-slide-item {
          color: #333;
          font-size: 14px;
          text-align: center;
          line-height: 45px;
          width: 100%;
          height: 45px;
          &.active {
            color: $jd-textcolor;
            font-weight: bold;
            background: #fff;
          }
        }
      }
    }
  }
  .menu-right {
    flex: 1;
    height: 100%;
    background: #fff;
    overflow: auto;
    .menu-right-content {
      padding: 20px 10px 0;
      box-sizing: border-box;
      .menu-right-content-title {
        color: #333;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .menu-right-content-sellbox {
        .menu-right-content-sellbox-item {
          &:nth-child(3n) {
            margin-right: 0;
          }
          float: left;
          width: 70px;
          margin-right: 25px;
          img {
            width: 70px;
            height: 70px;
          }
          .name {
            height: 35px;
            margin-top: 5px;
            text-align: center;
            font-size: 12px;
            color: #333;
          }
        }
        .clearboth {
          clear: both;
        }
      }
    }
  }
}
</style>

<template>
  <div class="menu">
    <div class="menu-left">
      <swiper class="menu-left-swiper" ref="swiperMenu" :options="swiperOption">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <div
            @click="chooseItem(index)"
            :class="[item.active?'active':'']"
            class="swiper-slide-item"
          >{{item.title}}</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="menu-right" @scroll="scrollEvent">
      <div>
        <div class="menu-right-content" v-for="(item,index) in list" :key="index">
          <div class="menu-right-content-title">{{item.title}}</div>
          <div class="menu-right-content-sellbox">
            <div
              class="menu-right-content-sellbox-item"
              v-for="(itemize,num) in item.children"
              :key="num"
            >
              <img :src="itemize.imgUrl" alt />
              <div class="name">{{itemize.name}}</div>
            </div>
            <div class="clearboth"></div>
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
      list: [],
      scrollTopList: [],
      swiperOption: {
        speed: 300,
        direction: "vertical",
        slidesPerView: "auto",
      },
    };
  },
  components: { Swiper, SwiperSlide },
  created() {
    this.getData();
  },
  mounted() {
    if(window.plus){
     window.plus.webview.currentWebview().setPullToRefresh({ support: false })
    }
  },
  methods: {
    getData() {
      this.$toast("", "loading");
      setTimeout(() => {
        this.$closeToast();
        let titleList = [
          "热门推荐",
          "手机数码",
          "电脑办公",
          "家用电器",
          "计生情趣",
          "美妆护肤",
          "个护清洁",
          "汽车生活",
          "京东超市",
          "男装",
          "男鞋",
          "女装",
          "女鞋",
          "母婴童装",
          "图书音像",
          "运动户外",
          "内衣配饰",
          "食品生鲜",
          "酒水饮料",
          "家具家装",
          "家居厨具",
          "箱包手袋",
          "钟表珠宝",
          "玩具乐器",
          "医药保健",
          "宠物生活",
          "礼品鲜花",
          "农资绿植",
          "生活旅行",
          "奢侈品",
          "京东国际",
          "艺术邮币",
          "二手商品",
          "特产馆",
          "京东金融",
          "国际名牌",
          "拍卖",
          "房产",
          "工业品",
        ];
        for (let i = 0; i < 18; i++) {
          let obj = {
            title: titleList[i],
            children: [],
            active: false,
          };
          if (i === 0) obj.active = true;
          let item = {
            imgUrl:
              "http://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg",
            name: "图书",
          };
          let num = Math.floor(Math.random() * 6) + 6;
          for (let i = 0; i < num; i++) {
            obj.children.push(item);
          }
          this.list.push(obj);
        }
        this.$nextTick(() => {
          let contentList = document.querySelectorAll(".menu-right-content");
          for (let i = 0; i < contentList.length; i++) {
            this.scrollTopList.push(
              i===0?0:this.scrollTopList[this.scrollTopList.length-1]+contentList[i-1].offsetHeight
            );
          }
        });
      }, 500);
    },
    chooseItem(index, type = true) {
      this.list = this.list.map((item, num) => {
        item.active = false;
        if (num === index) item.active = true;
        return item;
      });
      let swiper = this.$refs.swiperMenu;
      if (swiper.swiperInstance) {
        swiper.swiperInstance.slideTo(index, 300, false);
        if (type) {
          document.querySelector(".menu-right").scrollTop = this.scrollTopList[
            index
          ];
        }
      }
    },
    scrollEvent(e){
        let top = e.target.scrollTop;
        let index=null;
        for(let i=0;i<this.scrollTopList.length;i++){
            if(top>=this.scrollTopList[i]&&top<this.scrollTopList[i+1]){
                index = i
                break
            }
        }
        if(index!==null){
          this.chooseItem(index,false)
        }
    }
  },
};
</script>