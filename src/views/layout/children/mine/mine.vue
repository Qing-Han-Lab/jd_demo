<style scoped lang='scss'>
.mine {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f7f7f7;
  .mine-top {
    height: 190px;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: url("https://img12.360buyimg.com/img/s1500x886_jfs/t1/115726/22/13102/240974/5f18fb83Ee40e230b/d4f2a67087fd443a.png")
      no-repeat scroll 0 0 / cover;
    .mine-top-user {
      padding: 0 15px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mine-top-user-left {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 18px;
        .mine-top-user-left-img {
          margin-right: 15px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-image: url("https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png");
          background-repeat: no-repeat;
          background-size: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .mine-top-user-right {
        width: 20px;
        height: 20px;
        background: url("https://img12.360buyimg.com/img/s40x40_jfs/t1/125926/3/7446/2181/5f15510bE3f46d483/4f25fadf9ebe91d3.png")
          0 0/100% 100% no-repeat;
      }
    }
    .mine-top-info {
      display: flex;
      margin-top: 20px;
      .mine-top-info-item {
        width: 115px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-size: 12px;
        .mine-top-info-item-num {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
    .mine-top-back {
      width: 340px;
      height: 42px;
      background-image: url("https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png");
      background-size: 100%;
      background-repeat: no-repeat;
      margin-top: 18px;
      padding: 0 12px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffe678;
        font-size: 14px;
      }
    }
  }
  .mine-middel {
    width: 100%;
    height: 88px;
    margin-bottom: 20px;
    border-radius: 12px 12px 0 0;
    background: #fff;
    transform: translateY(-10px);
    display: flex;
    justify-content: center;
    align-items: center;
    .mine-middel-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: #262626;
      font-size: 12px;
      &:nth-child(1) .mine-middel-item-logo {
        background: url("https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png")
          no-repeat scroll 50%/26px;
      }
      &:nth-child(2) .mine-middel-item-logo {
        background: url("https://img12.360buyimg.com/img/s120x120_jfs/t1/123660/33/7797/4674/5f1804aeE308173db/b392f9ce63eb8490.png")
          no-repeat scroll 50%/26px;
      }
      &:nth-child(4) .mine-middel-item-logo {
        background: url("https://img12.360buyimg.com/img/s60x60_jfs/t1/145618/2/3439/692/5f16525eE30cd2db1/3ab434ec2686a256.png")
          no-repeat scroll 50%/26px;
      }
      .mine-middel-item-logo {
        width: 86px;
        height: 50px;
        background: url("https://img12.360buyimg.com/img/s60x60_jfs/t1/120478/38/7592/2211/5f165256E02190e99/1491d4cb340074bb.png")
          no-repeat scroll 50%/26px;
      }
    }
  }
  .mine-down {
    margin-top: 20px;
    background: #fff;
    border-radius: 12px;
    .mine-down-title {
      height: 38px;
      line-height: 38px;
      color: #2e2d2d;
      font-weight: bold;
      font-size: 14px;
      text-indent: 15px;
      border-bottom: 1px solid #f7f7f7;
    }
    .mine-down-content {
      width: 100%;
      padding-bottom: 20px;
      overflow: hidden;
      .mine-down-content-item {
        float: left;
        width: 25%;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
        color: #2e2d2d;
        font-size: 12px;
        .mine-down-content-item-logo {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="mine">
    <div class="mine-top">
      <div class="mine-top-user">
        <div class="mine-top-user-left">
          <div class="mine-top-user-left-img">
            <img :src="$store.state.userInfo.userIcon" alt="">
          </div>
          {{$store.state.userInfo.nickName}}
        </div>
        <div class="mine-top-user-right" @click="logout"></div>
      </div>
      <div class="mine-top-info">
        <div class="mine-top-info-item">
          <div class="mine-top-info-item-num">20</div>商品收藏
        </div>
        <div class="mine-top-info-item">
          <div class="mine-top-info-item-num">10</div>店铺收藏
        </div>
        <div class="mine-top-info-item">
          <div class="mine-top-info-item-num">0</div>我的足迹
        </div>
      </div>
      <div class="mine-top-back">
        <span>PLUS会员</span>
        <span>每月福利享不停</span>
      </div>
    </div>
    <div class="mine-middel">
      <div class="mine-middel-item">
        <div class="mine-middel-item-logo"></div>待付款
      </div>
      <div class="mine-middel-item">
        <div class="mine-middel-item-logo"></div>待发货
      </div>
      <div class="mine-middel-item">
        <div class="mine-middel-item-logo"></div>待收获
      </div>
      <div class="mine-middel-item">
        <div class="mine-middel-item-logo"></div>全部/售后
      </div>
    </div>
    <div class="mine-down">
      <div class="mine-down-title">工具与服务</div>
      <div class="mine-down-content">
        <div class="mine-down-content-item" v-for="(item,index) in moreList" :key="index">
          <div class="mine-down-content-item-logo">
            <img :src="item.imgUrl" alt />
          </div>
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreList: [
        {
          title: "客户服务",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp",
        },
        {
          title: "我的预约",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/143427/38/5400/4413/5f350384Edba4458b/bfcb210d2110a7d8.png.webp",
        },
        {
          title: "高价回收",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/126073/34/9502/6741/5f350800Ee00c0d35/43485badf62439e9.png.webp",
        },
        {
          title: "我的火车票",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/133114/37/6851/4896/5f350a40Ee99a608e/b273c57d0960f507.png.webp",
        },
        {
          title: "应用推荐",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/132818/33/6802/4632/5f350a87E52a6f93d/82551e3481c8648b.png.webp",
        },
        {
          title: "京东机票",
          imgUrl:
            "http://img12.360buyimg.com/img/s140x140_jfs/t1/117037/39/16019/18915/5f45fff5Ef548450b/5a850b15881714e8.png.webp",
        },
        {
          title: "京东酒店",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/133985/31/6910/4334/5f350addE170daf0e/5a47542d98d229d0.png.webp",
        },
        {
          title: "闲置换钱",
          imgUrl:
            "http://img12.360buyimg.com/img/s70x70_jfs/t1/112188/32/14787/4956/5f3509edE376c2ddb/d716c6822cafa2b6.png.webp",
        },
      ],
    };
  },
  created() {
     console.log(this.$store.state.userInfo.nickName+'123')
    if (this.$store.state.userInfo.nickName==='') {
      console.log('xxxxxxxxx')
     if(window.plus){
        console.log('plus')
         this.createLogin()
     }else{
        this.$router.push({name:'login'})
     }
    }
  },
  mounted() {
    if (window.plus) {
      window.plus.webview.currentWebview().setPullToRefresh({ support: false });
    }
  },
  methods: {
    createLogin(){
      if(window.plus){
        let wv = window.plus.webview.create('/index.html#/login','login');
        wv.show()
        wv.onclose = ()=>{
          if(!this.$store.state.userInfo.nickName){
            this.$parent.checkMenu(0)
          }
        }
      }
    },
    logout() {
      this.$Dialog
        .confirm({
          title: "提示",
          message: "是否退出登录?",
        })
        .then(() => {
          let userInfo = JSON.parse(JSON.stringify(this.$store.state.userInfo))
          userInfo.nickName = '';
          userInfo.userIcon = '';
          this.$store.commit('setUserInfo',userInfo)
          this.$parent.checkMenu(0)
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>