<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          'http://imgs.qunarzz.com/sight/p0/1908/70/70a9ac02a1edfba4a3.img.jpg_r_800x800_b5cf5a07.jpg',
          'https://imgs.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_350x240_e61b5db4.jpg',
          'https://imgs.qunarzz.com/sight/p0/201405/29/4bed2643b6a64212d4b8b5713344e56c.jpg_r_800x800_57b37320.jpg',
          'https://imgs.qunarzz.com/sight/p0/201405/29/b5d02d4967e16b8cbc40f1dbd8186e6f.jpg_r_800x800_504fbd5c.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    .wrapper
      min-height 0
      width 100%
      .gallery-img
        position absolute
        top 50%
        transform translateY(-50%)
        width 100%
      .swiper-pagination
        position absolute
        color #fff
        bottom -5rem
</style>
