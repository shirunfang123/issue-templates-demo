// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add: 0,
    opend: 0, //展开、收起
    downed:0,//下拉框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //add/remove切换
  add: function() {
    this.setData({
      add: 1
    })
  },
  remove: function() {
    this.setData({
      add: 0
    })
  },
  //下拉框
  go_down: function() {
    this.setData({
      downed: 1
    })
  },
  un_down:function(){
    this.setData({
      downed: 0
    })
  },
  //展开/收起
  opend: function() {
    this.setData({
      opend: 1
    })
  },
  downed: function() {
    this.setData({
      opend: 0
    })
  },
  //跳转到顶部详情页
  detailsPic: function() {
    wx.navigateTo({
      url: '/pages/detailsPic/detailsPic',
    })
  }
})