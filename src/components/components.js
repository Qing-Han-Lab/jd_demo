import Vue from 'vue'

var resolve = require.context('@/components',true,/\.vue$/);

var analyise  = function(res){
    res.keys().forEach((item)=>{
       let comp = res(item).default;
       Vue.component(comp.name,comp)
    })
}

analyise(resolve)