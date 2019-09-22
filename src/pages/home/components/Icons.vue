<template>
  <div class="icons">
    <div class="icon-top">
      <div class="icon" v-for="item of TopIconList" :key="item.id">
        <div class="icon-top-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="icon-bottom">
      <swiper>
        <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-bottom-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      TopIconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      }, {
        id: '0006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/group.png',
        desc: '特惠酒店'
      }, {
        id: '0007',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
        desc: '低价机票'
      }, {
        id: '0008',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/inn.png',
        desc: '客栈'
      }, {
        id: '0009',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/haiwai.png',
        desc: '海外酒店'
      }, {
        id: '0010',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/kezhan.png',
        desc: '民宿'
      }],
      BottomIconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/bus.png',
        desc: '汽车票船票'
      }, {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/tuan.png',
        desc: '旅游团购'
      }, {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
        desc: '自由行'
      }, {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/car.png',
        desc: '专车自驾'
      }, {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
        desc: '周边短途'
      }, {
        id: '0006',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/jr.png',
        desc: '金融理财'
      }, {
        id: '0007',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/card.png',
        desc: '保险车险'
      }, {
        id: '0008',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/travel.png',
        desc: '攻略'
      }, {
        id: '0009',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/youlun.png',
        desc: '邮轮'
      }, {
        id: '0010',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/oversea.png',
        desc: '换外币'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.BottomIconList.forEach((item, index) => {
        const page = Math.floor(index / 5)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 60%
    margin-top .25rem
    .icon-top
      width 100%
      height 0
      padding-bottom 40%
      .icon
        position: relative
        overflow hidden
        float left
        width 20%
        height 0
        padding-bottom 20%
        .icon-top-img
          position absolute
          top 0
          left 0
          right 0
          bottom .44rem
          box-sizing border-box
          padding .1rem
          .icon-img-content
            display block
            margin 0 auto
            height 100%
        .icon-img
          position absolute
          top 10%
          left 10%
          right 10%
          bottom .44rem
          box-sizing border-box
          padding .1rem
          .icon-img-content
            display block
            margin 0 auto
            height 100%
    .icon-bottom >>> .swiper-container
      height 0
      padding-bottom 26%
    .icon
      position: relative
      overflow hidden
      float left
      width 20%
      height 0
      padding-bottom 20%
      .icon-bottom-img
        position absolute
        top 20%
        left 20%
        right 20%
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      font-size .24rem
      color $darkTextColor
      ellipsis()
</style>
