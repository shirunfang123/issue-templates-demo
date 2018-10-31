//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    meus: [{
        title: "Times排名"
      },
      {
        title: "Qs排名"
      },
      {
        title: "地区"
      }
    ],
    menu_index: 0, //菜单栏
    nums: 300
  },

  onLoad: function() {
    var that = this
    //获得屏幕的高度
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
  go_apply:function(){
    wx.navigateTo({
      url: '/pages/apply/apply',
    })
  },
  details:function(){
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  //搜索框
  search:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})