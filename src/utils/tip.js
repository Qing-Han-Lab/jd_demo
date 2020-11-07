import Vue from 'vue'

export const htmlToImage = function (htmlDom, parentDom) { // dom -> img
    return new Promise((resolve, reject) => {
        let htmlToCanvas = require('html2canvas')
        htmlToCanvas(htmlDom).then(canvas => {
            canvas.style.position = 'absolute'
            canvas.style.left = '-1000px'
            canvas.style.top = '-1000px'
            parentDom.appendChild(canvas);
            if (window.plus) {
                let bitmap = new window.plus.nativeObj.Bitmap();
                bitmap.loadBase64Data(canvas.toDataURL())
                bitmap.save('_doc/b.jpg', {}, (e) => {
                    let imgUrl = e.target;
                    window.plus.io.resolveLocalFileSystemURL(imgUrl, (entry) => {
                        resolve(entry.toLocalURL())
                    })
                }, () => {
                    window.plus.nativeUI.toast('您的手机不支持')
                    reject(false)
                })
            } else {
                if(window.plus){
                    window.plus.nativeUI.toast('您的手机不支持')
                }
                reject(false)
            }
        }).catch(err => {
            console.log(err)
        })
    })
}

export const shareImg = function (imgUrl, type, wxFrom,isShare=true) { // type 分享到什么平台(qq,weixin)
    if (window.plus) {
        window.plus.share.getServices((services) => {
            let shareObj = null;
            for (let i = 0; i < services.length; i++) {
                if (services[i].id === type) {
                    shareObj = services[i];
                    break;
                }
            }
            if (shareObj) {
                window.plus.gallery.save(imgUrl, (e) => { //保存到手机
                    let path = e.file;
                    window.plus.nativeUI.toast('保存成功')
                    if(!isShare) return;
                    let message = {
                        type: 'image',
                        pictures: [path]
                    }
                    if(type==='weixin'){
                        if (wxFrom === 'friend') { // 我的好友
                            message.extra = {
                                scene: 'WXSceneSession'
                            }
                        } else if (wxFrom === 'friendcircle') { //朋友圈
                            message.extra = {
                                scene: 'WXSceneTimeline'
                            }
                        }
                    }
                    console.log(JSON.stringify(message)+'???')
                    shareObj.send(message, () => {
                        console.log('分享成功')
                        window.plus.nativeUI.toast('分享成功')
                    }, () => {
                        console.log('分享失败')
                        window.plus.nativeUI.toast('分享失败')
                    })
                }, () => {
                    window.plus.nativeUI.toast('保存图片失败')
                })
            } else {
                console.log('保存成功')
                window.plus.nativeUI.toast('您的手机不支持')
            }
        }, () => {
            window.plus.nativeUI.toast('您的手机不支持')
        })
    } else {
        window.plus.nativeUI.toast('您的手机不支持')
    }
}

export const previewImage = function (imgList, index) { // 预览图片
    if (window.plus) {
        window.plus.nativeUI.previewImage(imgList, {
            current: index,
            onLongPress: (e) => {
                let netImageUrl = e.url;
                window.plus.nativeUI.actionSheet({
                    title: "选择操作",
                    cancel: "取消",
                    buttons: [{
                        title: "下载图片"
                    }]
                },(event)=>{
                    if(event.index==1){ // 下载
                       let downloader = window.plus.downloader.createDownload(netImageUrl,{},(down,state)=>{
                           if(down.state==4&&state==200){ // 下载完成
                              let path = down.filename;
                              window.plus.gallery.save(path,()=>{
                                  window.plus.nativeUI.toast('保存成功')
                              })
                           }
                       })
                       downloader.start() // 开始下载
                    }
                } )
            }
        })
    } else {
        new Vue().$toast('您的手机不支持')
    }
}