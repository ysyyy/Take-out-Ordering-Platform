const app = getApp()

Page({
  data: {
    name:"黄金虾仁炒饭",
    num: 0,
    thisNum:0,    
    howMuch: 22,
    cost: 0,
    cartList: [],
    showCart: false,
  },
  onLoad: function (options) {
    this.setData({
      cartList: wx.getStorageSync('cartList'),
      cost: wx.getStorageSync('cost'),
      num: wx.getStorageSync('num'),
    });
    let isfind = this.data.cartList.findIndex(item => { return item.name == this.data.name });
    if(isfind!=-1){
      this.setData({
        thisNum:this.data.cartList[isfind].numb
      })
    }
  },
  card: function (e) { 
    if (this.data.cost != 0) {
      wx.setStorageSync('cartList', this.data.cartList);
      wx.setStorageSync('cost', this.data.cost);
      wx.setStorageSync('num', this.data.num);
      wx.navigateTo({
        url: '/pages/pay/pay',
      })
    }
  },
  addToCart: function (e) {
    let isfind = this.data.cartList.findIndex(item => { return item.name == this.data.name });
    if(isfind==-1){
      var addItem = {
        "name": this.data.name,
        "price": this.data.howMuch,
        "numb": 1,
        "totalCos": this.data.howMuch
      }
      var index = e.currentTarget.dataset.index;
      var sumMoney = this.data.cost + this.data.howMuch;
      var cartList = this.data.cartList;
      cartList.push(addItem);
      this.setData({
        cartList: cartList,
        cost: sumMoney,
        thisNum:this.data.thisNum+1,
        num: this.data.num + 1,
        showModalStatus: false
      });
    }
    else{
      let first = "cartList[" + isfind + "].totalCos";
      let second = "cartList[" + isfind + "].numb";
      var cartList = this.data.cartList;
      var sumMoney = this.data.cost + this.data.howMuch;
      this.setData({
        cartList: cartList,
        cost: sumMoney,
        thisNum:this.data.thisNum+1,
        num: this.data.num + 1,
        [first]:this.data.cartList[isfind].totalCos+this.data.cartList[isfind].price,
        [second]:cartList[isfind].numb+1,
        showModalStatus: false
      });
    }
    console.log(this.data.cartList)
  },
  showCartList: function (e) {
    console.log(this.data.showCart);
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart
      })
    }
  },
  addNumber:function(e){
    let index = e.currentTarget.dataset.index;
    let count = "cartList[" + index + "].numb";
    let money = "cartList[" + index + "].totalCos";
    if(this.data.cartList[index].name==this.data.name){
      this.setData({
        thisNum:this.data.thisNum+1,
      })
    }
    this.setData({
      [count]: this.data.cartList[index].numb + 1,
      [money]:this.data.cartList[index].totalCos+this.data.cartList[index].price,
      cost: this.data.cost + this.data.cartList[index].price,
      num:this.data.num+1,
    })
  },
  mainDec: function (e) {
    let isfind = this.data.cartList.findIndex(item => { return item.name == this.data.name });
    let index = e.currentTarget.dataset.index;
    var third = "cartList[" + isfind + "].numb";
    var forth = "cartList[" + isfind + "].totalCos";
    var cartList = this.data.cartList;
    this.data.cartList[isfind].totalCos -= this.data.cartList[isfind].price;
    this.setData({
      [third]: this.data.cartList[isfind].numb - 1,
      [forth]: this.data.cartList[isfind].totalCos
    });
    cartList[isfind].numb == 0 ? cartList.splice(isfind, 1) : cartList[isfind].numb;
    this.setData({
      cartList:cartList,
      thisNum:this.data.thisNum-1,
      cost: this.data.cost-this.data.howMuch,
      num: this.data.num - 1,
    });
  },
  decNumber: function (e) {
    var index = e.currentTarget.dataset.index;
    var cartList = this.data.cartList;
    var third = "cartList[" + index + "].numb";
    var forth = "cartList[" + index + "].totalCos";
    var sumMoney = this.data.cost - cartList[index].price;
    cartList[index].totalCos -= cartList[index].price;
    if (this.data.cartList[index].name == this.data.name) {
      this.setData({
        thisNum: this.data.thisNum - 1,
      })
    }
    this.setData({
      [third]: this.data.cartList[index].numb - 1,
      [forth]: this.data.cartList[index].totalCos
    });
    cartList[index].numb == 0 ? cartList.splice(index, 1) : cartList[index].numb;
    this.setData({
      cartList: cartList,
      cost: sumMoney,
      num:this.data.num-1,
      showCart: cartList.length == 0 ? false : true
    });
  },
  clearCart: function (e) {
    this.setData({
      cartList: [],
      showCart: false,
      cost: 0,
      num: 0,
      thisNum:0,
    })
  }
})