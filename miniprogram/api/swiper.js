const db = wx.cloud.database()
const list = () => {
  return db.collection('CDH_swiper').get();
}

export default {
  list
}