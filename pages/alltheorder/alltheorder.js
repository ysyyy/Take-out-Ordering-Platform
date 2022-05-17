// pages/alltheorder/alltheorder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      resdata:[],
      cartList: [],
      num:0,
      cost:0,
      openid:""
        },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var me = this;
        const db = wx.cloud.database();
        db.collection('users').get({
            success: function(res) {
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            me.setData({
                    resdata: res.data,//res.data就是你调出来的所有数据（当然也可以在这里面自定义想要调用的数据），然后把值赋给resdata，之后对resdata进行处理即可，具体见wxml
              })      
            console.log(res.data)
         },
         fail: function (res) {//这里写调用接口失败之后所运行的函数
            console.log('.........fail..........');
          }    
        })

    },

    turncheck:function(e){
      var _this=this;
      console.log(_this.data.resdata.cartlist);
      console.log(e);
      console.log(e.currentTarget.dataset.index);
      wx.clearStorageSync();     
      this.setData({
        cartlist:e.currentTarget.dataset.index.cartList
      });
      console.log(e.currentTarget.dataset.index.cartList);
      wx.setStorageSync('cartList', e.currentTarget.dataset.index.cartList);
      wx.setStorageSync('num', e.currentTarget.dataset.index.num);
      wx.setStorageSync('cost', e.currentTarget.dataset.index.cost);
      wx.setStorageSync('openid', e.currentTarget.dataset.index._id);
      wx.navigateTo({
        url: '/pages/repay/repay'
      })
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