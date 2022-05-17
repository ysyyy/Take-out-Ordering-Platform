// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    orderItem:[
      {
        index:0,
        name:"已完成",
        imagePath:'',
        url:'',
      },
      {
        index: 1,
        name: "已取消",
        imagePath: '',
        url: '',
      }
    ],
    cartList: [],
    num: 0,
    cost: 0,
    qucanhao:0,
    time:''
  },
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var time=this.getTime();
  
    //var _qucan=this.randomNum(0,100);
    this.setData({
      cartList: wx.getStorageSync('cartList'),
      cost: wx.getStorageSync('cost'),
      num: wx.getStorageSync('num'),
      qucanhao:wx.getStorageSync('qucanhao'),
      time: wx.getStorageSync('time')
    })
    this.testDocGet();
    //this.testCollectionAdd();
  },

  testCollectionAdd: function () {
    var _time = this.data.time;
    var _qucanhao=this.data.qucanhao;
    var _cartList=this.data.cartList;
    const db = wx.cloud.database();
    db.collection("users").add({
      data: {
        time: _time,
        qucanhao:_qucanhao,
        cartList:_cartList
      },
      success: res => {
        console.log("collection add success")
      },
      fail: err => {
        console.error("collection add fail", err)
      },
      complete: res => {
        console.log("collection add complete")
      }
    })
  },
  
  getTime:function(){
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var H= date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    return "当前时间：" + Y + M + D+H+m+s;
  },


  testCollectionGet: function () {
    const db = wx.cloud.database();
    db.collection("users").get({
      success: res => {
        console.log("获取所有用户：", res.data);
      },
      fail: res => {
        console.error("获取用户失败", res);
      },
      complete: res => {
        console.log("获取用户执行完成", res);
      }
    })
  },

  testDocGet:function(){
    const db=wx.cloud.database();
    var userDoc = db.collection("users").doc("oVp-a5TRK5ci3V0EVu8FvI_lMHwg");
    console.log(userDoc);
   
  },

  //生成从minNum到maxNum的随机数
   randomNum:function (minNum, maxNum){
    switch(arguments.length) { 
    case 1:
    return parseInt(Math.random() * minNum + 1, 10);
    break;
    case 2:
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    break;
    default: 
    return 0;
    break;
  } 
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