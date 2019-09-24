<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1908/70/70a9ac02a1edfba4a3.img.jpg_600x330_6a179ef4.jpg">
      <div class="banner-info">
        <div class="banner-title">广州长隆旅游度假区(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>
          16
        </div>
      </div>
    </div>
    <common-gallery
      :img="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: [
        'http://imgs.qunarzz.com/sight/p0/1908/70/70a9ac02a1edfba4a3.img.jpg_r_800x800_b5cf5a07.jpg',
        'https://imgs.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_350x240_e61b5db4.jpg',
        'https://imgs.qunarzz.com/sight/p0/201405/29/4bed2643b6a64212d4b8b5713344e56c.jpg_r_800x800_57b37320.jpg',
        'https://imgs.qunarzz.com/sight/p0/201405/29/b5d02d4967e16b8cbc40f1dbd8186e6f.jpg_r_800x800_504fbd5c.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      align-items center
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .36rem
        padding .1rem .2rem
      .banner-number
        padding .1rem .2rem
        margin-right  .2rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
