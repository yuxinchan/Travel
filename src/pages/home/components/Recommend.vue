<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="item-list">
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price"><em>￥</em><em>{{item.price}}</em>起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-list
    display flex
    flex-wrap wrap
    justify-content space-around
    width 94%
    padding 3%
    .item
      width 48%
      .item-img
        width 100%
        border-radius .1rem
      .item-info
        padding .1rem 0
        .item-title
          line-height .44rem
          font-size .28rem
          ellipsis()
        .item-desc
          line-height .4rem
          font-size .26rem
          color #666
          ellipsis()
      .item-price
        color #ff7400
        em
          line-height .48rem
          font-size .36rem
</style>
