<style lang="scss" scoped>
.slidecheck {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .slidecheck-content {
    width: 300px;
    height: 150px;
    background: #fff;
    position: relative;
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      &.animate {
        transition: left 0.3s;
      }
    }
  }
  .slidecheck-slide {
    width: 300px;
    height: 20px;
    background: #fff;
    margin-top: 50px;
    border-radius: 15px;
    position: relative;
    .slidecheck-slide-process {
      height: 100%;
      border-radius: 15px;
      background: lightgreen;
      &.animate {
        transition: width 0.3s;
      }
    }
    .slidecheck-slide-circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #fff;
      border: 10px solid #eee;
      box-sizing: border-box;
      position: absolute;
      left: -15px;
      top: -5px;
      &.animate {
        transition: left 0.3s;
      }
    }
  }
}
</style>

<template>
  <div class="slidecheck">
    <div class="slidecheck-content">
      <canvas id="cvs1"></canvas>
      <canvas id="cvs2" :class="{animate:!isMoveing}" :style="{left:blockLeft+'px'}"></canvas>
    </div>
    <div class="slidecheck-slide">
      <div
        class="slidecheck-slide-process"
        :class="{animate:!isMoveing}"
        :style="{width:processLeft+15+'px'}"
      ></div>
      <div
        class="slidecheck-slide-circle"
        :class="{animate:!isMoveing}"
        @touchstart="touchBegin($event)"
        @touchmove="touchMove($event)"
        @touchend="touchEnd"
        :style="{left:processLeft+'px'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slidecheck",
  data() {
    return {
      ctx1: null,
      ctx2: null,
      canvasContent: null,
      charX: 0,
      isMoveing: true,
      processLeft: 0,
      beginX: 0,
      nowX: 0,
      circle: null,
      squareWidth: 48,
      randomX: 0,
      blockLeft: 0,
    };
  },
  mounted() {
    this.ctx1 = document.querySelector("#cvs1").getContext("2d");
    this.ctx2 = document.querySelector("#cvs2").getContext("2d");
    this.canvasContent = document.querySelector(".slidecheck-content");
    this.getRandom();
    this.circle = document.querySelector(".slidecheck-slide-circle");
    this.charX = this.processLeft = -1 * (this.circle.offsetWidth / 2);
    this.initCanvas();
    this.blockLeft = this.processLeft - this.randomX - this.charX
    setTimeout(() => {
        this.isMoveing = false;
    }, 300);
  },
  methods: {
    getRandom() {
      let min = 100;
      let max = this.canvasContent.offsetWidth - this.squareWidth - 20;
      this.randomX = Math.floor(Math.random() * (max - min)) + min;
    },
    initCanvas() {
      let imgDom = new Image();
      imgDom.src = require("./check.jpg");
      imgDom.onload = () => {
        this.ctx1.drawImage(
          imgDom,
          0,
          0,
          this.canvasContent.offsetWidth,
          this.canvasContent.offsetHeight
        );
        this.initCvs1();
        this.initCvs2();
        this.ctx2.drawImage(
          imgDom,
          0,
          0,
          this.canvasContent.offsetWidth,
          this.canvasContent.offsetHeight
        );
      };
    },
    initCvs1() {
      this.drawBlock(this.ctx1, this.randomX, 35);
      this.ctx1.fillStyle = "#333";
      this.ctx1.fill();
    },
    initCvs2() {
      this.drawBlock(this.ctx2, this.randomX, 35);
      this.ctx2.clip();
    },
    drawBlock(ctx, x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + this.squareWidth / 3, y);
      ctx.arc(x + this.squareWidth / 2, y, this.squareWidth / 6, -Math.PI, 0);
      ctx.lineTo(x + this.squareWidth, y);
      ctx.lineTo(x + this.squareWidth, y + this.squareWidth / 3);
      ctx.arc(
        x + this.squareWidth,
        y + this.squareWidth / 2,
        this.squareWidth / 6,
        -Math.PI / 2,
        Math.PI / 2,
        true
      );
      ctx.lineTo(x + this.squareWidth, y + this.squareWidth);
      ctx.lineTo(x, y + this.squareWidth);
      ctx.closePath();
      ctx.stroke();
    },
    touchBegin(e) {
      this.isMoveing = true;
      this.beginX = e.touches[0].clientX;
    },
    touchMove(e) {
      this.nowX = e.touches[0].clientX;
      let moveX = this.nowX - this.beginX;
      this.beginX = this.nowX;
      this.processLeft += moveX;
      if (this.processLeft < -1 * (this.circle.offsetWidth / 2)) {
        this.processLeft = -1 * (this.circle.offsetWidth / 2);
      }
      if (
        this.processLeft >
        document.querySelector(".slidecheck-slide").offsetWidth -
          this.circle.offsetWidth / 2
      ) {
        this.processLeft =
          document.querySelector(".slidecheck-slide").offsetWidth -
          this.circle.offsetWidth / 2;
      }
      let left = this.processLeft - this.randomX - this.charX;
      if (this.canvasContent) {
        if (
          left >
          this.canvasContent.offsetWidth - this.randomX - this.squareWidth
        ) {
          left =
            this.canvasContent.offsetWidth - this.randomX - this.squareWidth;
        }
      }
      this.blockLeft = left
    },
    touchEnd() {
      this.isMoveing = false;
      document.ontouchstart = null;
      document.ontouchmove = null;
      this.processLeft = 0;
      this.processLeft += -1 * (this.circle.offsetWidth / 2);
      // 判断是否对焦上了
      if(Math.abs(this.blockLeft)<3){
         this.$parent.isShow = false
         this.$toast('验证成功')
         this.$parent.loginCallBack()
      }
      this.blockLeft = this.processLeft - this.randomX - this.charX
    },
  },
};
</script>