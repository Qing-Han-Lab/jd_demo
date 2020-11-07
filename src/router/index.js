import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/views/layout/layout.vue'),
    redirect: '/home',
    children:[
      {
        path : '/home',
        name : 'home',
        component : ()=>import('@/views/layout/children/home/home.vue')
      },
      {
        path : '/menu',
        name : 'menu',
        component : ()=>import('@/views/layout/children/menu/menu.vue')
      },
      {
        path : '/shoppingcar',
        name : 'shoppingcar',
        component : ()=>import('@/views/layout/children/shoppingcar/shoppingcar.vue')
      },
      {
        path : '/mine',
        name : 'mine',
        component : ()=>import('@/views/layout/children/mine/mine.vue')
      }
    ]
  }
]

var pageResolve = require.context('@/views',true,/\.json$/);
function analys(res){
  res.keys().forEach((item)=>{
    let page = res(item).page;
    let routeItem = {
      path : '/'+page.split('/').pop(),
      name : page.split('/').pop(),
      component : ()=>import(`@/views/${page}.vue`),
      meta:{
        isKeep : false
      }
    }
    routes.push(routeItem)
  })
}
analys(pageResolve)


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
   //console.log(from);
   function havePage(name,routerList){
     let flag  = false;
     for(let i=0;i<routerList.length;i++){
       if(routerList[i].name===name){
         return true
       }else{
         if(routerList[i].children&&routerList[i].children.length!==0){
          flag = flag || havePage(name,routerList[i].children)
         }
       }
     }
     return flag;
   }
   if(havePage(to.name,routes)){
     next()
   }else{
     new Vue().$toast('暂未开发页面')
   }
})

export default router
