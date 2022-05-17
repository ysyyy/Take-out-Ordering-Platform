Page({
  data: {
    //轮播图
    imgUrls: [
      '../../images/menu/soup/paigulianoutang.jpg',
      '../../images/menu/taocan/sanrentaocan/sanrentaocan.png',
      '../../images/menu/meat/guobaorou.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  golist: function () {
    wx.clearStorageSync();
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },
})
