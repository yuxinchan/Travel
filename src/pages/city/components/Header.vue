<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe640;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative;
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    .header-back
      position absolute
      top 0
      left 0
      padding-left .1rem
      width .64rem
      text-align center
      font-size .6rem
      color #fff
</style>
