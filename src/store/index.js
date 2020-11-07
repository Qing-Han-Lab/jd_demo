import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name : '',
    userInfo: {
      userIcon: '',
      token: 'jd_user_001',
      nickName: '',
      addressList: [{
          name: '杨先生',
          tag: '家',
          city: '贵州-贵阳-小河',
          phone: '13754869172',
          detailAddress: '小河区清水江路西工社区',
          isDefault: true
        },
        {
          name: '周女士',
          tag: '公司',
          city: '贵州-贵阳-云岩',
          phone: '17854783215',
          detailAddress: '云岩区北京路瑞金大厦',
          isDefault: false
        }
      ],
      shoppingcarList: [{
          imgUrl: "https://img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
          price: 199.00,
          productAttr: [{
              key: "颜色",
              val: "红色"
            },
            {
              key: "大小",
              val: "M"
            },
            {
              key: "款式",
              val: "春秋"
            },
          ],
          skuList: [{
              key: "颜色",
              value: ["红色", "白色"]
            },
            {
              key: "大小",
              value: ["S", "M", "L"]
            },
            {
              key: "款式",
              value: ["春秋", "冬季"]
            },
          ],
          defaultSku: [{
              key: "颜色",
              val: "红色"
            },
            {
              key: "大小",
              val: "S"
            },
            {
              key: "款式",
              val: "春秋"
            },
          ],
          stockPriceList: [{
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "299.00",
              number: 755,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "199.00",
              number: 100,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "399.00",
              number: 128,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "499.00",
              number: 200,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "599.00",
              number: 99,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "699.00",
              number: 3,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "1299.00",
              number: 999,
            },
          ],
          isCheck: false,
          quaity: 1,
          title: "海飞丝男士防脱发育发洗发水套装 洗发水145ML+头皮焕活精华40ML（男士科学防脱养生发际线 增发密发）",
        },
        {
          imgUrl: "https://img14.360buyimg.com/n7/jfs/t1/116168/3/14082/139889/5f2cfebaEb52bbb1c/bff4b1b47ff21adc.jpg!q70.dpg.webp",
          price: 499.00,
          productAttr: [{
              key: "颜色",
              val: "白色"
            },
            {
              key: "大小",
              val: "M"
            },
            {
              key: "款式",
              val: "春秋"
            },
          ],
          skuList: [{
              key: "颜色",
              value: ["红色", "白色"]
            },
            {
              key: "大小",
              value: ["S", "M", "L"]
            },
            {
              key: "款式",
              value: ["春秋", "冬季"]
            },
          ],
          defaultSku: [{
              key: "颜色",
              val: "红色"
            },
            {
              key: "大小",
              val: "S"
            },
            {
              key: "款式",
              val: "春秋"
            },
          ],
          stockPriceList: [{
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "199.00",
              number: 1000,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "299.00",
              number: 755,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "红色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "199.00",
              number: 100,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "399.00",
              number: 128,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "M"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "499.00",
              number: 200,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "春秋"
                },
              ],
              price: "599.00",
              number: 99,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "S"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "699.00",
              number: 3,
            },
            {
              skill: [{
                  key: "颜色",
                  val: "白色"
                },
                {
                  key: "大小",
                  val: "L"
                },
                {
                  key: "款式",
                  val: "冬季"
                },
              ],
              price: "1299.00",
              number: 999,
            },
          ],
          isCheck: false,
          quaity: 1,
          title: "海飞丝男士防脱发育发洗发水套装 洗发水145ML+头皮焕活精华40ML（男士科学防脱养生发际线 增发密发）",
        }
      ]
    }
  },
  getters: {},
  mutations: {
    setName(state,val){
       state.name = val
    },
    setUserInfo(state, val) { // 设置个人信息
      state.userInfo = val
    }
  },
  actions : {},
  plugins: [createPersistedState({
    key : 'jd'
  })],
  modules: {}
})
