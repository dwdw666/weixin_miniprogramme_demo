// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '张三',
    now: app.globalData.now
  },
  
  buttonHandler(event) {
    const that = this;
    wx.showModal({
      title: '操作确认',
      content: '你确认要修改吗？',
      success (res) {      
        if (res.confirm) {
          that.setData({
            name: '李四'
          }, function () {
             wx.showToast({
               title: '操作完成',
               duration: 700
             });
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})