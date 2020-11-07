<style lang="scss" scoped>
.select {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .select-top {
    width: 100%;
  }
  .select-down {
    flex: 1;
    width: 100%;
  }
}
</style>

<template>
  <div class="select">
    <div class="select-top">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" @change="sellChange" />
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <van-button type="danger" block round @click="onConfirm">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="select-down"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false, // 是否包邮
      switch2: false, // 是否团购
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    sellChange(e){
        console.log(e)
    }
  }
};
</script>