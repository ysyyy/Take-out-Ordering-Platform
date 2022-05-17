// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeToGet:[
      {
        time:"现在取餐"
      },
      {
        time:"10分钟后到店"
      },
      {
        time:"20分钟后到店"
      },
      {
        time:"30分钟后到店"
      }
    ],
    wayToGet:[
      {
        way:"堂食"
      },
      {
        way:"外带"
      }
    ],
    cartList: [],
    num:0,
    cost:0,
    showPayPwdInput: false,  //是否展示密码输入层
    pwdVal: '',  //输入的密码
    payFocus: true, //文本框焦点
    qucanhao:0,
    time:'',
    ifpay:"？",
    openid:""
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  
  pay:function(e){
    var _this = this;
    let str = '选中'+_this.data.num+'件商品，共'+_this.data.cost + '元，是否要支付？';
    wx.showModal({
      title:"提示",
      content:str,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          _this.changeShowPayPwdInput();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  changeShowPayPwdInput:function(){
    this.setData({
      showPayPwdInput:true,
      payFocus: true,
      qucanhao: 0,
      time: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _time=this.getTime();
    var _qucan=this.randomNum(0,100);
    this.setData({
      cartList: wx.getStorageSync('cartList'),
      cost: wx.getStorageSync('cost'),
      num: wx.getStorageSync('num'),
      openid:wx.getStorageSync('openid'),
      time:_time,
      qucanhao:_qucan,
    })
  },

  testCollectionAdd: function () {
    var _time = this.getTime();
    var _qucan = this.randomNum(0, 100);
    var _cartList = this.data.cartList;
    this.setData({
      openid:wx.getStorageSync('openid'),
    });
    var _openid = this.data.openid;
    var _num = this.data.num;
    var _cost = this.data.cost;
    wx.setStorageSync('qucanhao', _qucan);
    wx.setStorageSync('time', _time);
    wx.setStorageSync('num', _num);
    wx.setStorageSync('cost', _cost);
    var _ifpay = this.data.ifpay;
    const db = wx.cloud.database();
    db.collection('users').doc(_openid).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        ifpay: _ifpay
      },
      success: function(res) {
        console.log(res.data)
      },
      fail: err => {
        console.error("collection add fail", err)
      },
      complete: res => {
        console.log("collection add complete")
      }
    })
  },

  randomNum: function (minNum, maxNum) {
    switch (arguments.length) {
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

  getTime: function () {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var H = (date.getHours() + 1 < 10 ? '0' + (date.getHours() + 1) : date.getHours() + 1);
    var m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes() + 1) : date.getMinutes() + 1);
    var s = (date.getSeconds() + 1 < 10 ? '0' + (date.getSeconds() + 1) : date.getSeconds() + 1);
    return "当前时间：" + Y+"." + M+"." + D+" " + H+":" + m+":" + s;
  },

  turn: function () {
    wx.navigateTo({
      url: '/pages/paysuccess/paysuccess'
    })
  },
  gofail:function(){
    wx.navigateTo({
      url: '/pages/payfail/payfail',
    })
  },
  showInputLayer: function () {
    this.setData({ 
      showPayPwdInput: true, 
      payFocus: true 
      });
  },

  hidePayLayerFail: function () {
    var val = '支付失败';
    var _this=this;
    var _ifpay = "未支付";
    wx.setStorageSync('ifpay', _ifpay);
    this.setData({
      ifpay:_ifpay
    });
    _this.testCollectionAdd();
    this.setData({ showPayPwdInput: false, payFocus: false, pwdVal: ''}, 
    function () {
      wx.showToast({
        title: val,
        icon: 'none'
      })
      //_this.turn();
      _this.gofail();
    });
  },

  hidePayLayer: function () {
    var val = '支付成功';
    var _this=this;
    var _ifpay = "已支付";
    wx.setStorageSync('ifpay', _ifpay);
    this.setData({
      ifpay:_ifpay
    });
    _this.testCollectionAdd();
    this.setData({ showPayPwdInput: false, payFocus: false, pwdVal: '' }, 
    function () {
      wx.showToast({
        title: val,
      })
      _this.turn();
    });
  },

  getFocus: function () {
    this.setData({ payFocus: true });
  },

  inputPwd: function (e) {
    this.setData({ pwdVal: e.detail.value });
    if (e.detail.value.length >= 6) {
      this.hidePayLayer();
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

  },

})