export default{
    install(Vue){
        Vue.prototype.toPage = function (url, data = {}, animation = 'pop-in') { // 页面跳转
            let path = '/index.html#/' + url;
            if (Object.keys(data).length !== 0) { // 有参数，url穿参
              path += '?'
              Object.keys(data).forEach((key) => {
                path += `${key}=${data[key]}&`;
              })
              path = path.slice(0, path.length - 1);
            }
            if (window.plus) {
              let wv = window.plus.webview.create(path, url, {});
              wv.show(animation);
              wv.onclose = () => {
                console.log('page have been closed')
              }
            } else {
              this.$router.push({ name: url, query: data });
              // 或者  
              //window.location.href = path;
            }
          }
          Vue.prototype.goBack = function () { //页面返回
            if (window.plus) {
              let wv = window.plus.webview.currentWebview();
              if (wv) {
                wv.close();
              }
            } else {
              window.history.go(-1);
              // this.$router.go(-1)   this.$router.back()
            }
          }
    }
}