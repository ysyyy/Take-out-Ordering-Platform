const app = getApp()

Page({
  data: {
    theFixedFood:[
      {
        name:"白米饭x2",
        price:3,
        numb:2,
        totalCos:6,
        imagePath:"/images/menu/rice/baimifan.jpg",
      },
      {
        name:"排骨莲藕汤x1",
        price:35,
        numb:1,
        totalCos:35,
        imagePath: "/images/menu/soup/paigulianoutang.jpg",
      },
      {
        name:"薯条x1",
        price:9,
        numb:1,
        totalCos:9,
        imagePath: "/images/menu/snack/shutiao.jpg",
      }
    ],
    theChooseList:[
      {
        name: "雪碧(饮料三选二)",
        price: 3,
        numb:1,
        totalCos:3,
        imagePath: "/images/menu/drink/xuebi.jpg",
      },
      {
        name: "可乐(饮料三选二)",
        price: 3,
        numb:1,
        totalCos:3,
        imagePath: "/images/menu/drink/cola.jpg",
      },
      {
        name: "农夫山泉(饮料三选二)",
        price: 2,
        numb:1,
        totalCos:2,
        imagePath: "/images/menu/drink/nongfushanquan.jpg",
      }
    ],
    cartList:[
      {
        name: "白米饭x2",
        price: 3,
        numb: 2,
        totalCos:6,
        imagePath: "/images/menu/rice/baimifan.jpg",
      },
      {
        name: "排骨莲藕汤x1",
        price: 35,
        numb: 1,
        totalCos:35,
        imagePath: "/images/menu/soup/paigulianoutang.jpg",
      },
      {
        name: "薯条x1",
        price: 9,
        numb: 1,
        totalCos:9,
        imagePath: "/images/menu/snack/shutiao.jpg",
      },
      {
        name: "雪碧(饮料三选二)",
        price: 3,
        numb: 1,
        totalCos:3,
        imagePath: "/images/menu/drink/xuebi.jpg",
      },
      {
        name: "雪碧(饮料三选二)",
        price: 3,
        numb: 1,
        totalCos:3,
        imagePath: "/images/menu/drink/xuebi.jpg",
      }
    ],
    current:0,
    current2:0,
    num: 6,
    num1:0,
    cost1:0,
    cost: 56,
    addCart:[],
    showCart: false
  },
  onLoad: function (options) {
    this.setData({
      addCart: wx.getStorageSync('cartList'),
      cost1: wx.getStorageSync('cost'),
      num1: wx.getStorageSync('num'),
    });
    for (var i = 0; i < this.data.addCart.length; i++){
      var additem={
        name: this.data.addCart[i].name,
        numb:this.data.addCart[i].numb,
        price:this.data.addCart[i].price,
        totalCos:this.data.addCart[i].totalCos
      };
      this.data.cartList.push(additem);
    }
    this.setData({
      cartList:this.data.cartList,
      num:this.data.num+this.data.num1,
      cost:this.data.cost+this.data.cost1
    })
    console.log(this.data.addCart);
    console.log(this.data.cartList)
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
  showCartList: function () {
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }
  },
  swiperChange: function (e) {
    let cur = e.detail.current;
    let first = "cartList[" + 3 + "]";
    this.setData({
      [first]: this.data.theChooseList[cur]
    })
    if (e.detail.source == 'touch') {
      if(this.data.current==0 && e.detail.current==2){
        this.setData({
          current: e.detail.current,
          cost: this.data.cost - 1
        });
      }
      if (this.data.current == 1 && e.detail.current == 2) {
        this.setData({
          current: e.detail.current,
          cost: this.data.cost - 1
        });
      }
      if (this.data.current ==2 && e.detail.current == 0){
        this.setData({
          current: e.detail.current,
          cost: this.data.cost +1
        })
      }
      if (this.data.current==2 && e.detail.current == 1){
        this.setData({
          current: e.detail.current,
          cost: this.data.cost + 1
        })
      }
      if (this.data.current ==1 && e.detail.current == 0) {
        this.setData({
          current: e.detail.current,
          cost: this.data.cost
        })
      }
      if (this.data.current==0 && e.detail.current == 1){
        this.setData({
          current: e.detail.current,
          cost: this.data.cost
        })
      }
    }
    console.log(e.detail.current);
    console.log(this.data.theChooseList[this.data.current].price)
  },
  swiperChange2: function (e) {
    let cur = e.detail.current;
    let first = "cartList[" + 4 + "]";
    this.setData({
      [first]: this.data.theChooseList[cur]
    })
    var cost2=this.data.cost;
    console.log(cost2);
    if (e.detail.source == 'touch') {
      if (this.data.current2 == 0 && e.detail.current == 2) {
        this.setData({
          current2: e.detail.current,
          cost: cost2 - 1
        });
      }
      if (this.data.current2 == 1 && e.detail.current == 2) {
        this.setData({
          current2: e.detail.current,
          cost: cost2 - 1
        })
      }
      if (this.data.current2 == 2 && e.detail.current == 0) {
        this.setData({
          current2: e.detail.current,
          cost: cost2 + 1
        })
      }
      if (this.data.current2 == 2 && e.detail.current == 1) {
        this.setData({
          current2: e.detail.current,
          cost: cost2 + 1
        })
      }
      if (this.data.current2 == 1 && e.detail.current == 0) {
        this.setData({
          current2: e.detail.current,
          cost: cost2
        })
      }
      if (this.data.current2 == 0 && e.detail.current == 1) {
        this.setData({
          current2: e.detail.current,
          cost: cost2
        })
      }
    }
    console.log(this.data.cost);
    console.log(e.detail.current2);
    console.log(this.data.theChooseList[this.data.current2].price)
  }
})