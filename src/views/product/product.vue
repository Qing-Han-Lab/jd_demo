<style lang="scss" scoped>
.product {
  @extend .page;
  background: #f7f7f7;
  .product-title {
    height: 45px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .product-title-box {
      width: 100%;
      height: 100%;
      position: relative;
      & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      .product-title-one {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        box-sizing: border-box;
        .product-title-one-back {
          width: 30px;
          height: 30px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////////////////////////xb9HQ4AAAAIdFJOUwD6i0/UdjQCdVO0QgAAAEZJREFUKM9jYKAiKMAixiqSgCmo0eGAIcbUgUVQo6PRAItC4WGjkBWbQhYsCrELYtWO1SLsThoWSh2IS2DYkyJDQQE1kj4AQAEnj84DdFIAAAAASUVORK5CYII=");
          background-repeat: no-repeat;
          background-size: 70%;
          background-position: center;
        }
        .product-title-one-more {
          width: 30px;
          height: 30px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwDmiAYExX3+AAAAOUlEQVQoz2NgGAV0AEaCyiCKWVHIAMFVcXECcZhcXBQY4FwRF0cQh9HFRYABzsUqiFU7VotGAc0BAFnhCfdBrTVKAAAAAElFTkSuQmCC");
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: center;
        }
      }
      .product-title-two {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #fff;
        padding: 0 12px;
        box-sizing: border-box;
        .product-title-two-back {
          width: 12px;
          height: 12px;
          border-top: 1px solid #333;
          border-left: 1px solid #333;
          transform: rotate(-45deg);
        }
        .product-title-two-content {
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 55px;
          margin-top: 0px;
          .product-title-two-content-item {
            display: flex;
            width: 60px;
            flex-direction: column;
            font-size: 14px;
            color: #252525;
            .product-title-two-content-item-line {
              width: 28px;
              height: 3px;
              margin-top: 5px;
            }
            &.active {
              font-weight: bold;
              font-size: 13px;
              color: #262626;
              & .product-title-two-content-item-line {
                background-image: -webkit-gradient(
                  linear,
                  left top,
                  right top,
                  from(#f5503a),
                  to(#fad1cb)
                );
                background-image: -webkit-linear-gradient(
                  left,
                  #f5503a,
                  #fad1cb
                );
                background-image: linear-gradient(90deg, #f5503a, #fad1cb);
              }
            }
          }
        }
        .product-title-two-more {
          width: 40px;
          height: 100%;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAAG2I8urAAAAAXNSR0IArs4c6QAAAddJREFUSA3VVr1OwzAQto0oqgQPABszD4BY4TVIfwR0aBgQb8ALIAbSoVD1J7wGrFRiAokVsbGwMSAVCXPn4PSSxklMGol6SM539913/jnbjEFzGu0j/GOTUvJACr5Owx0L5SBZVxtqDffbqbel7gNqG6K441ABglN3PyJ9YBHKk2qZXNVdzcJVJAwJzR92IvmgjlLH7RSrBhNPAwPohs508FqPf5wIjQVhOtg0xrgNA1GsQIW5yZ7ZFrVwTA+XIaLm/M4feHsRXUKnDOzSy+s7Lnclxrf59PhwFtPNdMvACn/orTGYEcpWXals0L5JLgOrtnGwx/k54+x51L/c4ZxPq8iUza9+3liss1vY57uUdzTwRJ6kysDi6RBJBhOrNY/vaYJGuQRscrlKtmVMIstQEJucEJenWbxGe0GsmKkodQZ1royExFAGVlVZq3Wy/jn5uknaT4ofkqxWlve73Ys3kk9hcRF4oerhtieXeeqoOWv5g3yrmRoHjIvCC6cQnM95m41vVkybWDa+c+YVeHllxQztNr4hyCDYxLLxNdCFaptY4CvwZo8/PcJgVIBzSPlSXQF5UXjDF716iTbdQ8b4AZxJwb2qZlv2Rn3vOs9L5C/z9d95fwDELzC7i+rQHQAAAABJRU5ErkJggg==")
            no-repeat 50%;
          background-size: 20px;
          background-position: center;
        }
      }
    }
  }
  .product-top {
    overflow: auto;
    flex: 1;
    width: 100%;
    .product-top-sell {
      // 商品
      .product-top-img {
        width: 100%;
        height: 375px;
        position: relative;
        .product-top-process {
          z-index: 5;
          position: absolute;
          bottom: 30px;
          right: 0;
          padding: 10px 15px;
          padding-right: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          font-size: 12px;
          letter-spacing: 1px;
          border-radius: 20px 0 0 20px;
        }
        .product-top-swiper {
          width: 100%;
          height: 100%;
          /deep/ .swiper-slide {
            width: 100%;
            height: 100%;
            background: #ccc;
            img.swiper {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
    }
    .product-top-reply {
      // 评价
      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
    }
    .product-top-recommend {
      // 推荐
      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
    }
    .product-top-detail {
      // 详情
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .product-down {
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      height: 100%;
    }
    .product-down-left {
      overflow: hidden;
      .product-down-left-item {
        float: left;
        width: 52px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #262626;
        font-size: 12px;
        .product-down-left-item-logo {
          width: 20px;
          height: 25px;
          background: url("data:image/png;base64,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")
            50% no-repeat;
          background-size: auto 20px;
          margin-bottom: 3px;
        }
        &:nth-child(2) .product-down-left-item-logo {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABBxJREFUWAntmdtLVFEUxh1nmgkzsFEHzCBB8cLog/9AShewQOihy4vWQxeioJciKiFIyNTnkCwjqOglgqCXHjLyobdIyBlmvCQFUUSKgVPheOu37GzZncuog8dus2G79t7rW2t9Z+11ztlnzMrKtEwG/u4MeJzoz8/Pe6qqqo7Ozc0d8Xg8Yea5TtjVWCdGghjR7OzsW7FYrIf5vJ1fW8IQLYLoXRzssDNyew2yvRBvhvhHc6xs84JkFrL3fhdZ4SOxjYRZEmpZqKysPAb4hhhypUnEJa72jt3VCma1mrGrh/DXCmG/+CXu8Xg8flOP4dUnMg4Gg12ILTKGcMvg4GDH2NhYQuZuNokxPj7+oqCgYJo4OyUWxEOs9ehxLSUBybACSGbVeK2kHlPnouJbCHNVi08Dt8tAkdClHlPnojAWwkrxp8oMYbd3JpPhTIZNGciUhCkhqz79vzLMQelCeXn5J5FLpXIl2FS+LKe1ioqKz7wSC8TI6/Vu1l+VuqOamppNU1NTcl4N0KcCgUDRwMDAhI5R45Vg5dQ2Ozv7QWw5SyQ4fG1UfkRaSgKyMQ1Qp41/GSaTyT0sCFlpgenp6YafQ+tfdLsFY2gEK3PbRvx6pWA8osZKWghzVX1KyZV2hsPhoJorWVtbW4izq2ouknk7256vr8lY1jhft+vrMhcf+pqMJRa6DrUOl8dqrKSlJIztGwWQZ4Dec+Q75/f7eykBH07qINdGL1FOlET3Dux5+nNZI3i9kAO7VWGUBPuWfhFdH+U0w47JV0YnenUWn8zJySnt7+//rGxEWgjLInW8H3EfZz6ZOzUCJsF0oz9Jt3wMmOxmmXdhcwKbdSadZcpF7+Nr46FZYSkJAVDoDzA4gHPbm0gw6BL0xqGhodNgDy6BnRCMgd2L+RfxkarZkRW8Y1b4ZImXlJRcZ6u+Q8ZPD9KF5DD9Gr0JpxFxAjZWXFx8my39Rvby0G2gy/dgDKLdbPnhaDT60sAOi19uPPG1np5L/4ruNX2hHATHp9FlkeZmWxJm0FrNeaYv/hbBbthysy2JtSKYTpx/hzDb08bTYhJ5JZ1MuGXj+NjiRjjDDSQ321mCt6QiUF1dXcrN+QRMmQNuhOd4QyQSeeOgX/ayY0kIWfGiZCqPMzMz8qhyIiumZQYmlZtl6RwJL8vaAPl8vkcMLe99zceIgdGW0hvaPjrEldQv2V34USXVqS29sFarpU5pysIxw5CNKhAvBPmRztWmx9Bjm4M6vukKCws9GDaKATfeNvmRLhQKja72D4OS2fz8/FOEaaUv8OHt2EqcVxLb3BxLArIejoZPkdvNRm7OSU4vr/xdyMW3nh7PsSTEgCttQj7TDdwcSyxiNjuRldiOGVbEJNNsm2v/64Dcsv63ofhkZCYDpgz8AGCTwgIavdPZAAAAAElFTkSuQmCC")
            50% no-repeat;
          background-size: auto 20px;
        }
        &:nth-child(3) .product-down-left-item-logo {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABRtJREFUWAntmU1oXFUUxzNJZhJ11GgCmhQrQzDJJEMyJVIqKqVisXEjIsWNH5TSldaNi4ruAkoDrnTVgIL1A7rxAz/SutBoFTOL+BHy1SAZW6pFaRBtp4kzk8TfGd+53PfmvZka0plZ5MLNOfd8/t+5Z+67r62r2xpbFXBVoEFXXV1dL7e1tX3U2toaXVpa+kLltUZDCgjAV+CvC4VCuWg0esPk5GROdbVE6y0wF4VfX18PZ7PZOyx5TbEGMJU9q8gAfKfytUYNYIAZwICvWcCNWkFa4Zzya2trLsD09ys8xPPYRNTmGtG/iLtIrg/C4fDo9PT07948psL19fWBFSbA4QqAFWw3M3eQaziXy8329PQ8FggYIwMYI1eF0b0O6KzX+VquyXkrO30iHo8/aucJ6SKRSMT5sc06658XFhbuUl2lKOCkULsBehTA7ZKXQv0J3wWewilmt4TpYYy2Y2QeplKA5+bmzjKPNzU17QRDWvKC4xbIM4rBAJ6amspgpGdxpLe393Y1qjQFy3mwjFh5H1HeAHYEgX2sDpWizc3NJ6xcMeVdgCm/aYvV1VXXD08dqkGptrnzuACjMBWGryrglZWVnVZxzijvAozQAIavKmB2e0hBQr9R3gXYfnngUFXAADSA2e0xX8AITYWr2RLd3d0xCtYtIMFxJRaLfaWAzV1CBBgZwPDb1ciPbvR+AYAssV/lRfCSX1yRoX9YdfBfjo2N/aNrV0vMz88vETDjKG9KJpMtauil2G3ofgGACL7PeeN51qYdkJt2EBsXYBEQ8JxQGVxAAvsYuw3dL5wKv/ZfhuK/Q0NDTdjsUQ38Z8oLdbWECDD4BTBx4fP5vAD+SXjvYEtfRCZzU0c6nd5N/uslKFjOMNJ2gqIKozQVxiGwwnaQzeQBG9gOkqcIMCDND897kd9MYCViGcBgcfWvL2CEBnClK1zqONMHLKowW2IAY1TRlrDbAd51nAUC5i5qAONU8izWIJtITTsQs6gdJE/RKcG2XOA+mgNsGP1tcha3t7cvLy4uHkD2NG2SgOahs9D3Ojo6jo2Pj+clWLnR19cX4ag8hN0TTpw1ePnKeYePzrc4lR4gZiEMhfMFHCpoPX8AfRrH+0RM4COQ/azv9pjp8sdIJLLP7wtXDYQODAxsW15e/hh2hy23+F/ht8manHKc9Vg6wxb1sKM5qRYAHSkBVsySfAueHBwclB3xHVJZwH6CMgis+BXACkO+UaF+wxdwY2PjGxj/YTvw1FnmCw0NDR0yhReZY5PMZDIHbHubZ6sPsk6KrEwc0V/ka+OY7W/zvi0hBvybwEOcw9JHBRsByDaN2M60zhGqcdSWleOvIs4Eb9F7guL4VliMuQidIrhehOq4Kx/3BvGTeW28az8fW0bOhNfHXgcCdowCd0D07EBJvZ2oFP9/4hQda57AP7AunBYEfQre1RKsn1R7KnOKltmna5tyd/6O9S6RlYtDi03bvl6+HGC5BhYAQ4fpWdMaTuJhK+CbFu9i2fJ3sS8Avoo4b7ucPYuSLdHf3/8+9inx4ckj8gPj8/83mcKLzIn3NSfLhw5fRDhVRtmBb0VRKo7sEud14Akh/mV7kKreSJJPsb1fHHxGikR7aYdLPjoj4iyO8paTy7hvHGJ839LSsieVSv1tnHyYkhUWewHCa/NBAj7O/Jx5iXkZ1WnofipybzmwEmdmZuZyZ2fnXtrjMMsJJ4485ATzWf5fZVc5sNhtja0KeCvwL43LGYNMo7RjAAAAAElFTkSuQmCC")
            50% no-repeat;
          background-size: auto 20px;
        }
      }
    }
    .product-down-right {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .product-down-right-item {
        width: 103px;
        height: 38px;
        color: #fff;
        font-size: 13px;
        text-align: center;
        line-height: 38px;
        margin-right: 5px;
        font-weight: bold;
        border-radius: 20px;
        background-image: linear-gradient(
          135deg,
          #f2140c,
          #f2270c 70%,
          #f24d0c
        );
        &:last-child {
          background-image: linear-gradient(
            135deg,
            #ffba0d,
            #ffc30d 69%,
            #ffcf0d
          );
        }
      }
    }
  }
  .product-shadow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .product-shadow-content {
      width: 100%;
      background: #fff;
      border-radius: 15px 15px 0 0;
      animation: show 0.3s 1 forwards ease-in-out;
      @keyframes show {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(0);
        }
      }
      .product-shadow-content-top {
        height: 45px;
        color: #666;
        text-align: center;
        line-height: 45px;
      }
      .product-shadow-content-down {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .down-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          color: #262626;
          margin: 0 20px;
          .down-item-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-bottom: 5px;
            background-size: 100%;
            background-image: url("data:image/png;base64,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");
          }
          &:nth-child(2) .down-item-logo {
            background-image: url("data:image/png;base64,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");
          }
        }
      }
    }
  }
  .product-share {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 20;
    .product-share-photo {
      width: 300px;
      height: 450px;
      background: #fff;
      position: relative;
      .product-share-photo-close {
        color: #fff;
        font-size: 30px;
        position: absolute;
        top: -30px;
        right: -20px;
        transform: rotate(45deg);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .product-share-opbox {
      margin-top: 20px;
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product-share-opbox-item {
        height: 38px;
        width: 100px;
        border-radius: 20px;
        background: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 38px;
        &:last-child {
          background: linear-gradient(135deg, #ffba0d, #ffc30d 69%, #ffcf0d);
        }
      }
    }
  }
}
</style>

<template>
  <div class="product">
    <div class="product-share" v-if="isShare">
      <div class="product-share-photo">
        <div class="product-share-photo-close" @click="isShare=false">+</div>
        <img :src="imgList[current]" alt />
      </div>
      <div class="product-share-opbox">
        <div class="product-share-opbox-item" @click="saveAndShare(false)">保存到手机</div>
        <div class="product-share-opbox-item" @click="saveAndShare(true)">分享给好友</div>
      </div>
    </div>
    <div class="product-shadow" v-if="isShaow" @click="isShaow=false">
      <div class="product-shadow-content" @click.stop>
        <div class="product-shadow-content-top">分享到</div>
        <div class="product-shadow-content-down">
          <div class="down-item" @click="shareTo(0)">
            <div class="down-item-logo"></div>微信
          </div>
          <div class="down-item" @click="shareTo(1)">
            <div class="down-item-logo"></div>QQ
          </div>
          <div class="down-item" @click="shareTo(2)">
            <div class="down-item-logo"></div>朋友圈
          </div>
        </div>
      </div>
    </div>
    <div class="product-title">
      <div class="product-title-box">
        <div class="product-title-one" :style="{opacity : opacityVal}">
          <div class="product-title-one-back" @click="goBack"></div>
          <div class="product-title-one-more" @click="isShaow=true"></div>
        </div>
        <div class="product-title-two" :style="{opacity : 1-opacityVal}">
          <div class="product-title-two-back" @click="goBack"></div>
          <div class="product-title-two-content">
            <div
              @click="checkMenu(index,true)"
              class="product-title-two-content-item"
              :class="{active:item.active}"
              v-for="(item,index) in topMenuList"
              :key="index"
            >
              {{item.title}}
              <div class="product-title-two-content-item-line"></div>
            </div>
          </div>
          <div class="product-title-two-more" @click="isShaow=true"></div>
        </div>
      </div>
    </div>
    <div class="product-top" @scroll="scrollEvent">
      <div class="product-top-sell" ref="mode1">
        <div class="product-top-img">
          <div class="product-top-process">{{current}}/{{imgList.length}}</div>
          <swiper
            @slideChangeTransitionStart="swiperChange"
            ref="swiper"
            class="product-top-swiper"
          >
            <swiper-slide v-for="(item,index) in imgList" :key="index">
              <img @click="previewImage(imgList,index)" class="swiper" :src="item" alt />
            </swiper-slide>
          </swiper>
        </div>
        <img src="./img/1600658564(1).png" alt />
        <img src="./img/1600658085(1).png" alt />
      </div>
      <div class="product-top-reply" ref="mode2">
        <img src="./img/1600658132(1).png" alt />
      </div>
      <div class="product-top-recommend" ref="mode3">
        <img src="./img/1600658157(1).png" alt />
      </div>
      <div class="product-top-detail" ref="mode4">
        <img v-for="(item,index) in imgList" :key="index" :src="item" alt />
      </div>
    </div>
    <div class="product-down">
      <div class="product-down-left">
        <div class="product-down-left-item">
          <div class="product-down-left-item-logo"></div>客服
        </div>
        <div class="product-down-left-item">
          <div class="product-down-left-item-logo"></div>店铺
        </div>
        <div class="product-down-left-item">
          <div class="product-down-left-item-logo"></div>购物车
        </div>
      </div>
      <div class="product-down-right">
        <div class="product-down-right-item">加入购物车</div>
        <div class="product-down-right-item">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { previewImage, shareImg } from "../../utils/tip";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      isShaow: false,
      isShare: false,
      current: 1,
      typeChoose: -1,
      opacityVal: 1,
      imgList: [
        "http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/120434/11/9038/84213/5f2d350aE197cd29b/ce0cecc2d5644b1a.jpg!q80.dpg.webp",
        "http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/142976/19/8458/123601/5f61b9cbE42b4ebe0/a5fe84a8883063ea.jpg!q70.dpg.webp",
        "http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/136842/8/1276/484763/5ed77561Ee3b80e83/1727054badffc471.png.webp",
      ],
      topList: [],
      topMenuList: [
        {
          title: "商品",
          active: true,
        },
        {
          title: "评价",
          active: false,
        },
        {
          title: "推荐",
          active: false,
        },
        {
          title: "详情",
          active: false,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    setTimeout(() => {
      let menuTop = document.querySelector(".product-title").offsetHeight;
      for (let i = 1; i <= 4; i++) {
        let top = this.$refs["mode" + i].offsetTop;
        if (i > 1) {
          top -= menuTop;
        }
        this.topList.push(top);
      }
      this.topList.push(999999);
    }, 1000);
  },
  watch: {
    isShare(val) {
      if (!val) {
        var cvsList = document
          .querySelector(".product")
          .getElementsByTagName("canvas");
        for (let i = 0; i < cvsList.length; i++) {
          cvsList[i].remove();
        }
      }
    },
  },
  methods: {
    scrollEvent(e) {
      let top = e.target.scrollTop;
      for (let i = 0; i < this.topList.length; i++) {
        if (top >= this.topList[i] && top < this.topList[i + 1]) {
          this.checkMenu(i);
          break;
        }
      }
      if (top > 200) return;
      this.opacityVal = 1 - top / 100;
    },
    swiperChange() {
      let swiper = this.$refs.swiper;
      if (swiper) {
        this.current = swiper.swiperInstance.realIndex + 1;
      }
    },
    shareTo(index) {
      this.isShaow = false;
      this.isShare = true;
      this.typeChoose = index;
    },
    saveAndShare(flag) {
      let index = this.typeChoose;
      html2canvas(document.querySelector(".product-share-photo"), {
        allowTaint: true,
      })
        .then((canvas) => {
          canvas.style.position = "absolute";
          canvas.style.left = "-1000px";
          canvas.style.top = "-1000px";
          document.querySelector(".product").appendChild(canvas);
          if (window.plus) {
            let bitmap = new window.plus.nativeObj.Bitmap();
            bitmap.loadBase64Data(canvas.toDataURL());
            bitmap.save(
              "_doc/b.jpg",
              {},
              (e) => {
                let imgUrl = e.target;
                window.plus.io.resolveLocalFileSystemURL(imgUrl, (entry) => {
                  let path = entry.toLocalURL();
                  if (index === 0) {
                    // 微信
                    shareImg(path, "weixin", "friend", flag);
                  } else if (index === 1) {
                    //  QQ
                    shareImg(path, "qq", "friend", flag);
                  } else {
                    // 朋友圈
                    shareImg(path, "weixin", "friendcircle", flag);
                  }
                });
              },
              () => {
                window.plus.nativeUI.toast("您的手机不支持");
              }
            );
          } else {
            this.$toast("您的手机不支持");
          }
        })
        .catch(() => {
          if (window.plus) {
            window.plus.nativeUI.toast("生成海报失败");
          } else {
            this.$toast("生成海报失败");
          }
          return;
        });
    },
    previewImage(list, index) {
      previewImage(list, index);
    },
    checkMenu(index, flag = false) {
      this.topMenuList = this.topMenuList.map((item, num) => {
        item.active = false;
        if (num === index) item.active = true;
        return item;
      });
      if (flag) {
        document.querySelector(".product-top").scrollTop = this.topList[index];
      }
    },
  },
};
</script>