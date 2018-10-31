# city-select
Address selector component for wechat mini program
微信小程序城市选择器组件  使用腾讯地图SDK



![效果](https://upload-images.jianshu.io/upload_images/7398230-a65a9175ab8358f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 调用方式
##### 1.替换city-select.js中的腾讯地图KEY
yourpage.json
```
{
  "usingComponents": {
    "city-select": "/component/city-select/city-select"
  }
}
```

yourpage.wxml
```
<city-select show-select="{{citySelectOnShow}}"
             catch:selectCommit="citySelectData"
             ></city-select>
```
yourpage.js
```
Page({
    data: {
        citySelectOnShow: false
    },
    citySelectData(e) {
        console.log(e.detail);
    },
    open() {
        this.setData({
            citySelectOnShow: true
        })
    }
})
```


