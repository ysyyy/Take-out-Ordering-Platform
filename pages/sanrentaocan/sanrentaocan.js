const app = getApp()

Page({
  data: {
    theFixedFood: [
      {
        name: "白米饭x3",
        numb:3,
        price: 3,
        totalCos: 9,
        imagePath: "/images/menu/rice/baimifan.jpg",
      }
    ],
    theSoupChooseList: [
      {
        name: "番茄紫菜鸡蛋汤(汤品三选一)",
        price: 25,
        numb:1,
        totalCos:25,
        imagePath: "/images/menu/soup/fanqiezicaijidantang.jpg",
      },
      {
        name: "排骨莲藕汤(汤品三选一)",
        price: 35,
        numb:1,
        totalCos:35,
        imagePath: "/images/menu/soup/paigulianoutang.jpg",
      },
      {
        name: "山药乌鸡汤(汤品三选一)",
        price: 35,
        numb:1,
        totalCos:35,
        imagePath: "/images/menu/soup/shanyaowujitang.jpg",
      }
    ],
    theMeatChooseList:[
      {
        name: "宫保鸡丁(四选三)",
        price: 20,
        numb:1,
        totalCos:20,
        imagePath: "/images/menu/meat/gongbaojiding.jpg",
      },
      {
        name: "锅包肉(四选三)",
        price: 25,
        numb:1,
        totalCos:25,
        imagePath: "/images/menu/meat/guobaorou.jpg",
      },
      {
        name: "水煮肉片(四选三)",
        price: 26,
        numb:1,
        totalCos:26,
        imagePath: "/images/menu/meat/shuizhuroupian.jpg",
      },
      {
        name: "糖醋排骨(四选三)",
        price: 28,
        numb:1,
        totalCos:28,
        imagePath: "/images/menu/meat/tangcupaigu.jpg",
      }
    ],
    cartList:[
      {
        name: "白米饭x3",
        price: 3,
        numb:3,
        totalCos:9,
        imagePath: "/images/menu/rice/baimifan.jpg",
      },
      {
        name: "番茄紫菜鸡蛋汤(汤品三选一)",
        price: 25,
        numb:1,
        totalCos:25,
        imagePath: "/images/menu/soup/fanqiezicaijidantang.jpg",
      },
      {
        name: "宫保鸡丁(四选三)",
        price: 20,
        numb:1,
        totalCos:20,
        imagePath: "/images/menu/meat/gongbaojiding.jpg",
      },
      {
        name: "宫保鸡丁(四选三)",
        price: 20,
        numb:1,
        totalCos:20,
        imagePath: "/images/menu/meat/gongbaojiding.jpg",
      },
      {
        name: "宫保鸡丁(四选三)",
        price: 20,
        numb:1,
        totalCos:20,
        imagePath: "/images/menu/meat/gongbaojiding.jpg",
      }
    ],
    currentSoup: 0,
    currentMeat:0,
    currentMeat2: 0,
    currentMeat3: 0,
    num: 7,
    cost: 94,
    num1: 0,
    cost1: 0,
    cost: 56,
    addCart: [],
    showCart:false
  },
  onLoad: function (options) {
    this.setData({
      addCart: wx.getStorageSync('cartList'),
      cost1: wx.getStorageSync('cost'),
      num1: wx.getStorageSync('num'),
    });
    for (var i = 0; i < this.data.addCart.length; i++) {
      var additem = {
        name: this.data.addCart[i].name,
        numb: this.data.addCart[i].numb,
        price: this.data.addCart[i].price,
        totalCos: this.data.addCart[i].totalCos
      };
      this.data.cartList.push(additem);
    }
    this.setData({
      cartList: this.data.cartList,
      num: this.data.num + this.data.num1,
      cost: this.data.cost + this.data.cost1
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
  swiperSoupChange: function (e) {
    let cur=e.detail.current;
    let first ="cartList[" + 1 + "]";
    this.setData({
      [first]:this.data.theSoupChooseList[cur]
    })
    if (e.detail.source == 'touch') {
      if (this.data.currentSoup== 0 && e.detail.current == 2) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost + 10
        });
      }
      if (this.data.currentSoup == 1 && e.detail.current == 2) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost
        });
      }
      if (this.data.currentSoup == 2 && e.detail.current == 0) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost - 10
        })
      }
      if (this.data.currentSoup == 2 && e.detail.current == 1) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost
        })
      }
      if (this.data.currentSoup == 1 && e.detail.current == 0) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost - 10
        })
      }
      if (this.data.currentSoup == 0 && e.detail.current == 1) {
        this.setData({
          currentSoup: e.detail.current,
          cost: this.data.cost + 10
        })
      }
    }
    console.log(e.detail.current);
    console.log(this.data.theSoupChooseList[this.data.currentSoup].price)
  },
  showCartList: function () {
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }
  },
  swiperMeatChange: function (e) {
    let cur = e.detail.current;
    let first = "cartList[" + 2 + "]";
    this.setData({
      [first]: this.data.theMeatChooseList[cur]
    })
    if (e.detail.source == 'touch') {
      if (this.data.currentMeat == 0 && e.detail.current == 3) {  
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost + 8
        });
      }
      if (this.data.currentMeat == 0 && e.detail.current == 1) {   
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost+5
        })
      }
      if (this.data.currentMeat == 1 && e.detail.current == 2) {  
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost + 1
        })
      }
      if (this.data.currentMeat == 2 && e.detail.current == 3) {  
        this.setData({
          currentMeat: e.detail.current,
          cost:this.data.cost + 2
        })
      }
      if (this.data.currentMeat == 3 && e.detail.current == 0) {  
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost-8
        })
      }
      if (this.data.currentMeat == 3 && e.detail.current == 2) {    
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost-2
        })
      }
      if (this.data.currentMeat == 1 && e.detail.current == 0) { 
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost - 5
        })
      }
      if (this.data.currentMeat == 2 && e.detail.current == 1) { 
        this.setData({
          currentMeat: e.detail.current,
          cost: this.data.cost - 1
        })
      }
    }
    console.log(e.detail.current);
    console.log(this.data.theMeatChooseList[this.data.currentMeat].price)
  },
  swiperMeatChange2: function (e) {
    let cur = e.detail.current;
    let first = "cartList[" + 3 + "]";
    this.setData({
      [first]: this.data.theMeatChooseList[cur]
    })
    if (e.detail.source == 'touch') {
      if (this.data.currentMeat2 == 0 && e.detail.current == 3) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost + 8
        });
      }
      if (this.data.currentMeat2 == 0 && e.detail.current == 1) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost + 5
        })
      }
      if (this.data.currentMeat2 == 1 && e.detail.current == 2) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost + 1
        })
      }
      if (this.data.currentMeat2 == 2 && e.detail.current == 3) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost + 2
        })
      }
      if (this.data.currentMeat2 == 3 && e.detail.current == 0) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost - 8
        })
      }
      if (this.data.currentMeat2 == 3 && e.detail.current == 2) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost - 2
        })
      }
      if (this.data.currentMeat2 == 1 && e.detail.current == 0) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost - 5
        })
      }
      if (this.data.currentMeat2 == 2 && e.detail.current == 1) {
        this.setData({
          currentMeat2: e.detail.current,
          cost: this.data.cost - 1
        })
      }
    }
    console.log(e.detail.current);
    console.log(this.data.theMeatChooseList[this.data.currentMeat2].price)
  },
  swiperMeatChange3: function (e) {
    let cur = e.detail.current;
    let first = "cartList[" + 4 + "]";
    this.setData({
      [first]: this.data.theMeatChooseList[cur]
    })
    if (e.detail.source == 'touch') {
      if (this.data.currentMeat3 == 0 && e.detail.current == 3) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost + 8
        });
      }
      if (this.data.currentMeat3 == 0 && e.detail.current == 1) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost + 5
        })
      }
      if (this.data.currentMeat3 == 1 && e.detail.current == 2) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost + 1
        })
      }
      if (this.data.currentMeat3 == 2 && e.detail.current == 3) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost + 2
        })
      }
      if (this.data.currentMeat3 == 3 && e.detail.current == 0) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost - 8
        })
      }
      if (this.data.currentMeat3 == 3 && e.detail.current == 2) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost - 2
        })
      }
      if (this.data.currentMeat3 == 1 && e.detail.current == 0) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost - 5
        })
      }
      if (this.data.currentMeat3 == 2 && e.detail.current == 1) {
        this.setData({
          currentMeat3: e.detail.current,
          cost: this.data.cost - 1
        })
      }
    }
    console.log(e.detail.current);
    console.log(this.data.theMeatChooseList[this.data.currentMeat3].price)
  }
})
