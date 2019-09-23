<template>
  <div class="icons">
    <div class="icon-top">
      <div class="icon" v-for="item of topList" :key="item.id">
        <div class="icon-top-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="icon-bottom">
      <swiper :options="swiperOption">
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
  props: {
    topList: Array,
    bottomList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.bottomList.forEach((item, index) => {
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
    margin-top .2rem
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
