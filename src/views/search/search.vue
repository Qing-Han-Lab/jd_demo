<style lang="scss" scoped>
.search{
    @extend .page;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > div {
        width: 100%;
    }
    .search-top{
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      .search-top-back{
        width: 12px;
        height: 12px;
        border-top: 1px solid;
        border-left: 1px solid;
        transform: rotate(-45deg);
      }
      .search-top-searchbox{
         width: 263px;
         height: 30px;
         background: #f2f2f2;
         margin: 0 15px;
         border-radius: 30px;
         padding: 0 15px 0 40px;
         box-sizing: border-box;
         position: relative;
         i{
             display: inline-block;
             width: 40px;
             height: 100%;
             background-image: url('../../assets/search.png');
             background-size: 20px;
             background-repeat: no-repeat;
             background-position: center;
             position: absolute;
             top: 0;
             left: 0;
         }
         input {
             width: 100%;
             height: 100%;
             border: 0;
             outline: none;
             color: #666;
             font-size: 14px;
             background: transparent;
             &::-webkit-input-placeholder{
                 color: #ccc;
             }
         }
      }
      .search-top-searchbtn{
          padding: 6px 12px;
          color: #fff;
          font-size: 12px;
          background: $jd-backcolor;
          border-radius: 20px;
      }
    }
    .search-down{
      height: calc(100% - 45px);
      position: relative;
      .search-down-item{
          width: 100%;
          padding: 20px 20px 0;
          box-sizing: border-box;
          .search-down-item-title{
              color: #333;
              font-size: 14px;
              padding: 10px 0;
              text-align: left;
          }
          .search-down-item-keywards{
              width: 100%;
              overflow: hidden;
              .search-down-item-keywards-item{
                  color: #666;
                  padding: 5px 10px;
                  font-size: 12px;
                  float: left;
                  margin-right: 20px;
                  background: #f2f2f2;
                  border-radius: 5px;
                  margin-bottom: 10px;
              }
          }
      }
    }
}
</style>

<template>
    <div class="search">
        <div class="search-top">
            <div class="search-top-back" @click="goBack"></div>
            <div class="search-top-searchbox">
                <i></i>
                <input type="text" placeholder="请输入关键词">
            </div>
            <div class="search-top-searchbtn">搜索</div>
        </div>
        <div class="search-down">
            <Select />
            <div class="search-down-item">
                <div class="search-down-item-title">热门搜索</div>
                <div class="search-down-item-keywards">
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                </div>
            </div>
             <div class="search-down-item">
                <div class="search-down-item-title">热门搜索</div>
                <div class="search-down-item-keywards">
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                    <div class="search-down-item-keywards-item">浴霸</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Select from './components/sellect'
export default {
    components: {
        Select
    }
}
</script>