// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onSex: 0,//性别
    region: ['广东省', '广州市', '海珠区'],//来自哪里

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 选择性别
  get_sex: function () {
    this.setData({
      onSex: 0
    })
  },
  get_wosex: function () {
    this.setData({
      onSex: 1
    })
  },
// 来自哪里
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  go_submit:function(){
    wx.navigateTo({
      url: '/pages/successSub/successSub',
    })
  }

})