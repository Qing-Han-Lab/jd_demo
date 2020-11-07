<style scoped lang='scss'>
.topbar {
  width: 100%;
  height: 44px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  position: relative;
  text-align: center;
  line-height: 44px;
  letter-spacing: 3px;
  &.light{
    color: #fff;
  }
  .topbar-backbtn {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 16px;
    left: 15px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(-45deg);
    &.light{
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  }
}
</style>

<template>
  <div class="topbar" :class="[navBarBack==='#fff'?'':'light']" :style="[{background:navBarBack}]">
    <div @click="goBack" class="topbar-backbtn" :class="[navBarBack==='#fff'?'':'light']" v-if="isShowBackBtn"></div>
    {{title}}
  </div>
</template>

<script>
export default {
  name : 'Title',
  props: {
    title : {
      default : '标题',
      type : String
    },
    isShowBackBtn:{
      type : Boolean,
      default : true
    },
    navBarBack:{
      default : '#fff',
      type: String
    }
  }
};
</script>