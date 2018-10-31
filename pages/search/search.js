// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',//输入框的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  cancle: function() {
    this.setData({
      inputValue:''
    })
  }

})