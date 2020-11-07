<style scoped lang='scss'>
.layout {
  @extend .page;
  background: #f7f7f7;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
    overflow: hidden;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    overflow: hidden;
  }
  .layout-top {
    width: 100%;
    height: 45px;
    background: $jd-backcolor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .layout-top-menu,
    .layout-top-mine {
      width: 45px;
      height: 45px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=)
        no-repeat;
      background-size: 20px;
      background-position: center;
    }
    .layout-top-mine {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg==)
        no-repeat;
      background-size: 20px;
      background-position: center;
    }
    .layout-top-search {
      width: 273px;
      height: 30px;
      border-radius: 30px;
      background: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #232326;
      font-size: 12px;
      overflow: hidden;
      .jd-logo {
        width: 20px;
        height: 25px;
        margin: 10px 8px 0 15px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=)
          no-repeat;
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .jd-search {
        width: 25px;
        border-left: 1px solid #eee;
        height: 18px;
        background-image: url("../../assets/search.png");
        background-repeat: no-repeat;
        background-size: 18px;
        background-position: right center;
        margin-right: 15px;
      }
    }
  }
  .layout-content {
    flex: 1;
    width: 100%;
    overflow: hidden;
  }
  .layout-downbar {
    width: 100%;
    height: 50px;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 100;
    .layout-downbar-item {
      width: 60px;
      height: 46px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

<template>
  <div class="layout">
    <div class="layout-top">
      <div class="layout-top-menu" @click="checkMenu(1)"></div>
      <div class="layout-top-search" @click="toPage('search')">
        <div class="jd-logo"></div>
        <div class="jd-search"></div>请输入您需要的商品
      </div>
      <div class="layout-top-mine" @click="checkMenu(3)"></div>
    </div>
    <div class="layout-content">
      <transition name="fade">
        <keep-alive :key="key" v-if="$route.meta.isKeep">
          <router-view />
        </keep-alive>
        <router-view v-else :key="key" />
      </transition>
    </div>
    <div class="layout-downbar">
      <div
        class="layout-downbar-item"
        @click="checkMenu(index)"
        v-for="(item,index) in tabBar"
        :key="index"
      >
        <img :src="item.active?item.selectIcon:item.icon" :alt="`模块${index+1}`" />
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "../../mixin/mixin1";
export default {
  mixins: [mixin],
  data() {
    return {
      tabBar: [
        {
          icon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png",
          selectIcon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",
          name: "home",
          path: "/path",
          active: true,
        },
        {
          icon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png",
          selectIcon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png",
          name: "menu",
          path: "/menu",
          active: false,
        },
        {
          icon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png",
          selectIcon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png",
          name: "shoppingcar",
          path: "/shoppingcar",
          active: false,
        },
        {
          icon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png",
          selectIcon:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png",
          name: "mine",
          path: "/mine",
          active: false,
        },
      ],
    };
  },
  created () {
    this.$store.commit('setName','jd')
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
  methods: {
    checkMenu(index) {
      let activeIndex = this.tabBar.findIndex((item) => item.active);
      if (index !== activeIndex) {
        this.tabBar = this.tabBar.map((itemize, num) => {
          itemize.active = false;
          if (index === num) {
            itemize.active = true;
            this.$router.push({name:itemize.name})
          }
          return itemize;
        });
      }
    },
  },
};
</script>