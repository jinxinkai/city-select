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