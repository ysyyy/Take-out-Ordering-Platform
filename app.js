//app.js
App({
  onLaunch: function () {
    if(!wx.cloud){
      console.error("请使用2.2.3或以上基础库以使用云能力")
    }else{
      wx.cloud.init({
        env: 'resordersystem-6gye1f64fd3f0c1d',
        traceUser:true,
      })
    }
  },

  MenuAdd:function(){
    let config = require("/pages/order/order.js");
    var _MenuList = config.data.MenuList;
    const db = wx.cloud.database();
    db.collection("Menu").add({
      data: {
        MenuList: _MenuList
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

  

  onload:function(e){
    
  }
})