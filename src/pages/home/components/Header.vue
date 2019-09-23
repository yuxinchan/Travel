<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe640;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6b9;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe654;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width .64rem
      float left
      .back-icon
        test-align center
        padding-left .1rem
        font-size .6rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .11rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      color: #fff
      .arrow-icon
        font-size .3rem
</style>
