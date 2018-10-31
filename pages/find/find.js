// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meus: [{
        title: "留学必备"
      },
      {
        title: "官方联络"
      }
    ],
    menu_index: 0,
    windowHeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  // 点击菜单栏
  go_menu: function(e) {
    console.log(e)
    this.setData({
      menu_index: e.currentTarget.dataset.menu_index
    })
  },
  //切换菜单栏
  change_title: function(e) {
    this.setData({
      menu_index: e.detail.current
    })
  },
  go_Lpo: function() {
    wx.navigateTo({
      url: '/pages/go_Lpo/go_Lpo',
    })
  },
  go_Cm: function () {
    wx.navigateTo({
      url: '/pages/go_Cm/go_Cm',
    })
  },
  go_Iot: function () {
    wx.navigateTo({
      url: '/pages/go_Iot/go_Iot',
    })
  }

})