//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  toNav:function(e){
    console.log(e);
    wx:wx.navigateTo({
      url: e.target.dataset.link
    })
  },
  onLoad: function () {

  }
})
