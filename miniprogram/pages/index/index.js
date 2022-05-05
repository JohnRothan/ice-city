import swiper from "../../api/swiper"

// pages/index/index.js
Page({
  
  /**
   * 页面初始数据
   */
  data: {
    swiperList: [],
    current: 0
  },

    onSwiperChange(e) {
      const { current } = e.detail
      this.setData({
        current
      })

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    swiper.list().then(res=>{
      this.setData({
        swiperList: res.data
      })
    })
  },

  onSwiperTab(e) {
    const { item } = e.currentTarget.dataset
    item.type === 'url' 
    ? wx.navigateTo({
      url: `/pages/web-view/index?url=${item.target}`,
    }) : wx.navigateTo({
      url: `/pages/product/detail?id=${item.target}`,
    })
  }
})