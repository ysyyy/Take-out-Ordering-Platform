Page({
  data:{
    toView: 'a0',
    scrollTop: 100,
    MenuList: [
      {
        name: "火腿黄金蛋炒饭",
        imagePath: '/images/menu/rice/chaofan/huotuihuangjindanchaofan.jpg',
        price: 20,
        index: 0,
        numb:0,
        totalCos:20,
        urlPath:"/pages/huotuihuangjindanchaofan/huotuihuangjindanchaofan"
      },
      {
        name: "黄金虾仁炒饭",
        imagePath: '/images/menu/rice/chaofan/huangjinxiarenchaofan.jpg',
        price: 22,
        index: 1,
        numb:0,
        totalCos: 22,
        urlPath: "/pages/huangjinxiarenchaofan/huangjinxiarenchaofan"
      },
      {
        name: "白米饭",
        imagePath: '/images/menu/rice/baimifan.jpg',
        price: 3,
        index: 2,
        numb:0,
        totalCos: 3,
        urlPath: "/pages/baimifan/baimifan"
      },
      {
        name: "三人套餐",
        imagePath: '/images/menu/taocan/sanrentaocan/sanrentaocan.png',
        price: 70,
        index: 3,
        numb:0,
        totalCos: 70,
        urlPath: "/pages/sanrentaocan/sanrentaocan"
      },
      {
        name: "两人套餐",
        imagePath: '/images/menu/taocan/liangrentaocan/liangrentaocan.png',
        price: 56,
        index: 4,
        numb:0,
        totalCos: 56,
        urlPath: "/pages/liangrentaocan/liangrentaocan"
      },
      {
        name: "薯条",
        imagePath: '/images/menu/snack/shutiao.jpg',
        price: 9,
        index: 5,
        numb:0,
        totalCos: 9,
        urlPath: "/pages/shutiao/shutiao"
      },
      {
        name: "山药乌鸡汤",
        imagePath: '/images/menu/soup/shanyaowujitang.jpg',
        price: 35,
        index: 6,
        numb:0,
        totalCos: 35,
        urlPath: "/pages/shanyaowujitang/shanyaowujitang"
      },
      {
        name: "排骨莲藕汤",
        imagePath: '/images/menu/soup/paigulianoutang.jpg',
        price: 35,
        index: 7,
        numb:0,
        totalCos: 35,
        urlPath: "/pages/paigulianoutang/paigulianoutang"
      },
      {
        name: "番茄紫菜鸡蛋汤",
        imagePath: '/images/menu/soup/fanqiezicaijidantang.jpg',
        price: 25,
        index: 8,
        numb:0,
        totalCos: 25,
        urlPath: "/pages/fanqiezicaijidantang/fanqiezicaijidantang"
      },
      {
        name: "宫保鸡丁",
        imagePath: '/images/menu/meat/gongbaojiding.jpg',
        price: 20,
        index: 9,
        numb:0,
        totalCos: 20,
        urlPath: "/pages/gongbaojiding/gongbaojiding"
      },
      {
        name: "水煮肉片",
        imagePath: '/images/menu/meat/shuizhuroupian.jpg',
        price: 26,
        index: 10,
        numb:0,
        totalCos: 26,
        urlPath: "/pages/shuizhuroupian/shuizhuroupian"
      },
      {
        name: "糖醋排骨",
        imagePath: '/images/menu/meat/tangcupaigu.jpg',
        price: 28,
        index: 11,
        numb:0,
        totalCos: 28,
        urlPath: "/pages/tangcupaigu/tangcupaigu"
      },
      {
        name: "锅包肉",
        imagePath: '/images/menu/meat/guobaorou.jpg',
        price: 25,
        index: 12,
        numb:0,
        totalCos: 25,
        urlPath: "/pages/guobaorou/guobaorou"
      },
      {
        name: "咖喱牛肉蛋包饭",
        imagePath: '/images/menu/danbaofan/galidanbaofan.jpg',
        price: 28,
        index: 13,
        numb: 0, 
        totalCos: 28,
        urlPath: "/pages/galidanbaofan/galidanbaofan"
      },
      {
        name: "普通蛋包饭",
        imagePath: '/images/menu/danbaofan/putongdanbaofan.jpg',
        price: 22,
        index: 14,
        numb: 0, 
        totalCos: 22,
        urlPath: "/pages/putongdanbaofan/putongdanbaofan"
      },
      {
        name: "肥牛蛋包饭",
        imagePath: '/images/menu/danbaofan/feiniudanbaofan.jpg',
        price: 28,
        index: 15,
        numb:0,
        totalCos: 28,
        urlPath: "/pages/feiniudanbaofan/feiniudanbaofan"
      },
      {
        name: "农夫山泉",
        imagePath: '/images/menu/drink/nongfushanquan.jpg',
        price: 2,
        index: 16,
        numb:0,
        totalCos: 2,
        urlPath: "/pages/nongfushanquan/nongfushanquan"
      },
      {
        name: "可乐",
        imagePath: '/images/menu/drink/cola.jpg',
        price: 3,
        index: 17,
        numb:0,
        totalCos: 3,
        urlPath: "/pages/cola/cola"
      },
      {
        name: "美年达",
        imagePath: '/images/menu/drink/meinianda.jpg',
        price: 3,
        index: 18,
        numb:0,
        totalCos: 3,
        urlPath: "/pages/meinianda/meinianda"
      },
      {
        name: "雪碧",
        imagePath: '/images/menu/drink/xuebi.jpg',
        price: 3,
        index: 19,
        numb:0,
        totalCos: 3,
        urlPath: "/pages/xuebi/xuebi"
      },
      {
        name: "水煮鱼",
        imagePath: '/images/menu/fish/shuizhuyu.jpg',
        price: 32,
        index: 20,
        numb:0,
        totalCos: 32,
        urlPath: "/pages/shuizhuyu/shuizhuyu"
      },
      {
        name: "藤椒鱼",
        imagePath: '/images/menu/fish/tengjiaoyu.jpg',
        price: 32,
        index: 21,
        numb:0,
        totalCos: 32,
        urlPath: "/pages/tengjiaoyu/tengjiaoyu"
      },
      {
        name: "麻辣鱼",
        imagePath: '/images/menu/fish/malayu.jpg',
        price: 32,
        index: 22,
        numb:0,
        totalCos: 32,
        urlPath: "/pages/malayu/malayu"
      },
      {
        name: "基围虾",
        imagePath: '/images/menu/xia/jiweixia.jpg',
        price: 40,
        index: 23,
        numb:0,
        totalCos: 40,
        urlPath: "/pages/jiweixia/jiweixia"
      },
      {
        name: "蒜香小龙虾",
        imagePath: '/images/menu/xia/suanxiangxiaolongxia.jpg',
        price: 70,
        index: 24,
        numb:0,
        totalCos: 70,
        urlPath: "/pages/suanxiangxiaolongxia/suanxiangxiaolongxia"
      },
      {
        name: "麻辣小龙虾",
        imagePath: '/images/menu/xia/malaxiaolongxia.jpg',
        price: 70,
        index: 25,
        numb:0,
        totalCos: 70,
        urlPath: "/pages/malaxiaolongxia/malaxiaolongxia"
      }
    ],
    listData:[
      {
        name:"主食"
      },
      {
        name:"套餐"
      },
      {
        name:"小吃"
      },
      {
        name:"汤"
      },
      {
        name:"肉类"
      },
      {
        name:"蛋包饭"
      },
      {
        name:"饮料"
      },
      {
        name:"鱼"
      },
      {
        name:"虾"
      }
      ],
    activeIndex:0,
    selected:0,
    cost:0,
    num:0,
    activeIndex1:0,
    sum_num:0,
    cartList: [],
    showCart: false,
  },
  testCollectionGet:function(){
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

  showCartList: function () {
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }
  },
  clearCart: function () {
    this.setData({
      cartList: [],
      showCart: false,
      cost: 0,
      num:0
    });
    for (var i = 0; i < this.data.MenuList.length; i++){
      var circulate1 = "MenuList[" + i + "].numb";
      var circulate2= "MenuList[" + i + "].totalCos";
      this.setData({
        [circulate1]:0,
        [circulate2]:this.data.MenuList[i].price
      })
    }
  },
  addToCart: function (e) {
    if(this.data.cartList.length==0){
      for (var i = 0; i < this.data.MenuList.length; i++) {
        var circulate = "MenuList[" + i + "].totalCos";
        this.setData({
          [circulate]: this.data.MenuList[i].price
        })
      }
    };
    var index = e.currentTarget.dataset.index;
    let oldobj = this.data.MenuList[index];
    var first = "MenuList[" + index + "].numb";
    var sumMoney = this.data.cost + this.data.MenuList[index].price;
    var cartList = this.data.cartList;
    let isfind = cartList.findIndex(item=>{return item.name==oldobj.name});
    if (isfind==-1){
      oldobj.numb+=1;
      cartList.push(oldobj);
      this.setData({
        cartList: cartList,
        cost: sumMoney,
        num: this.data.num +1,
        [first]: this.data.MenuList[index].numb,
      });
      for (var i = 0; i < cartList.length; i++) {
        console.log(cartList[i].price)
      }
    }
    else{
      let second = "cartList[" + isfind + "].numb";
      let singleCos = "cartList[" + isfind + "].totalCos";
      let third = "MenuList[" + index + "].totalCos";
      oldobj.totalCos += oldobj.price;
      this.setData({
        cartList: cartList,
        cost: sumMoney,
        num: this.data.num + 1,
        [singleCos]:this.data.cartList[isfind].totalCos+this.data.cartList[isfind].price,
        [first]: this.data.MenuList[index].numb +1,
        [second]: this.data.cartList[isfind].numb +1,
        [third]:this.data.MenuList[index].totalCos,
      });
      console.log(`购物车数量${this.data.cartList[isfind].numb}`)
    }
    console.log(this.data.MenuList[index].numb);
    console.log(index);
    console.log(this.data.cartList)
  },
  addNumber:function(e){
    var index = e.currentTarget.dataset.index;
    var pos= this.data.cartList[index].index;
    var first = "MenuList[" + pos + "].numb";
    var second = "MenuList[" + pos + "].totalCos";
    var third = "cartList[" + index + "].numb";
    var tolCos = "cartList[" + index + "].totalCos";
    var sumMoney = this.data.cost + this.data.MenuList[pos].price;
    this.setData({
      [first]:this.data.MenuList[this.data.cartList[index].index].numb+1,
      [second]:this.data.MenuList[pos].tolCos+this.data.MenuList[pos].price,
      [third]:this.data.cartList[index].numb+1,
      [tolCos]: this.data.cartList[index].totalCos + this.data.cartList[index].price,
      cost:sumMoney,
      num: this.data.num+1
    })
  },
  removeFromCart: function (e) {
    var index = e.currentTarget.dataset.index;
    let oldobj = this.data.MenuList[index];
    var sumMoney = this.data.cost - this.data.MenuList[index].price;
    var cartList = this.data.cartList;
    let isfind = cartList.findIndex(item => { return item.name == oldobj.name });
    console.log(isfind);
    var first = "MenuList[" + index + "].numb";
    var second = "MenuList[" + index + "].totalCos";
    var third = "cartList[" + isfind + "].numb";
    var forth = "cartList[" + isfind + "].totalCos"
    cartList[isfind].totalCos-=cartList[isfind].price;
    cartList[isfind].totalCos -=this.data.MenuList[index].price;
    this.setData({
      [third]: this.data.cartList[isfind].numb--,
      [forth]: this.data.cartList[isfind].totalCos
    });
    console.log(`购物车中的数量${this.data.cartList[isfind].numb}`);
    cartList[isfind].numb == 0 ? cartList.splice(isfind, 1) : cartList[isfind].numb;
    this.data.MenuList[index].numb--;
    this.data.MenuList[index].tolCos-= this.data.MenuList[index].price;
    this.setData({
      //[first]: this.data.MenuList[index].numb-1,
      //[second]: this.data.MenuList[index].tolCos - this.data.MenuList[index].price,
      [first]: this.data.MenuList[index].numb,
      [second]: this.data.MenuList[index].tolCos,
      cartList: cartList,
      cost: sumMoney,
      num: this.data.num -1,
    }); 
    console.log(this.data.MenuList[index].numb);
    console.log(this.data.cartList)
  },
  decNumber:function(e){
    var index = e.currentTarget.dataset.index;
    var pos = this.data.cartList[index].index; 
    console.log(`index:${index}`);
    console.log(`初始购物车${this.data.cartList}`);
    console.log(`购物车中的当前元素在主页中的位置${pos}`);
    console.log(`改变前当前元素在主页中的数量${this.data.MenuList[pos].numb}`);
    console.log(`改变前当前元素在购物车中的数量${this.data.cartList[index].numb}`);
    var cartList = this.data.cartList;
    var first = "MenuList[" + pos + "].numb";
    var second = "MenuList[" + pos + "].totalCos";
    var third = "cartList[" + index + "].numb";
    var forth = "cartList[" + index + "].totalCos";
    var sumMoney = this.data.cost - this.data.MenuList[pos].price;
    cartList[index].totalCos -= cartList[index].price;
    this.setData({
      [third]: this.data.cartList[index].numb--,
      [forth]: this.data.cartList[index].totalCos
    });
    console.log(`在购物车中的数量${this.data.cartList[index].numb}`);
    cartList[index].numb == 0 ? cartList.splice(index, 1) : cartList[index].numb;
    this.setData({
      [first]: this.data.MenuList[pos].numb--,
      [second]: this.data.MenuList[pos].totalCos - this.data.MenuList[pos].price,
      cartList: cartList,
      cost: sumMoney,
      num: this.data.num -1,
      showCart: cartList.length == 0 ? false : true
    });
    console.log(`在主页中的数量${this.data.MenuList[pos].numb}`);
    console.log(this.data.cartList)
  },
  choose:function(e){
    wx.setStorageSync('cartList', this.data.cartList);
    wx.setStorageSync('cost', this.data.cost);
    wx.setStorageSync('num', this.data.num);
    var index = e.currentTarget.dataset.index; 
    console.log(index);
    wx.navigateTo({
      url: this.data.MenuList[index].urlPath
    })
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index);
    if(index==0){
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 1
      })
    }
    if (index == 1) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 790
      })
    }
    if (index == 2) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 1316
      })
    }

    if(index==3){
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 1579
      })
    }
    if (index == 4) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 2368
      })
    }
    if (index == 5) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 3420
      })
    }
    if (index == 6) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 4209
      })
    }
    if (index == 7) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 5261
      })
    }
    if (index == 8) {
      this.setData({
        activeIndex: index,
        toView: 'a' + index,
        scrollTop: 6050
      })
    }

    console.log(this.data.scrollTop);
    console.log(index);
    console.log(this.data.activeIndex);
    console.log(this.data.toView);
  },
  goPay:function(e){
    if (this.data.cost != 0) {
      wx.setStorageSync('cartList', this.data.cartList);
      wx.setStorageSync('cost', this.data.cost);
      wx.setStorageSync('num', this.data.num);
      wx.navigateTo({
        url: '/pages/pay/pay',
      })
    }
  },
  scroll: function (a) {
    console.log(a)
    var dis = a.detail.scrollTop
    if (dis > 0 && dis < 789) {
      this.setData({
        activeIndex: 0,
      })
    }
    if (dis > 789 && dis < 1315) {
      this.setData({
        activeIndex: 1,
      })
    }
    if (dis > 1315 && dis < 1578) {
      this.setData({
        activeIndex: 2,
      })
    }
    if (dis > 1578 && dis < 2367) {
      this.setData({
        activeIndex: 3,
      })
    }
    if (dis > 2367 && dis < 3419) {
      this.setData({
        activeIndex: 4,
      })
    }
    if (dis > 3419 && dis < 4208) {
      this.setData({
        activeIndex: 5,
      })
    }
    if (dis > 4208 && dis < 5260) {
      this.setData({
        activeIndex: 6,
      })
    }
    if (dis > 5260 && dis < 6049) {
      this.setData({
        activeIndex: 7,
      })
    }
    if (dis > 6049) {
      this.setData({
        activeIndex: 8,
      })
    }
  },

  goalltheorder: function () {
    wx.clearStorageSync();
    wx.navigateTo({
      url: '/pages/alltheorder/alltheorder'
    })
  },

  goassistant: function () {
    wx.clearStorageSync();
    wx.navigateTo({
      url: '/pages/assistant/assistant'
    })
  },


})