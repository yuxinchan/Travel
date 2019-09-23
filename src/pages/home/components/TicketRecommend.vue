<template>
  <div>
    <div class="title">
      <div class="list-title">
        <span class="iconfont ticket-logo">&#xe623;</span>
        <em>当季景点门票</em>
      </div>
      <div class="more">
        <span>更多特惠门票</span>
        <span class="iconfont ticket-more">&#xe625;</span>
      </div>
    </div>
    <ul class="item-list">
      <router-link
        tag="li"
        class="item"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price"><em>￥</em><em>{{item.price}}</em></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeTicketRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    display flex
    justify-content: space-between;
    padding .2rem .2rem 0 .2rem
    line-height .35rem
    text-indent .2rem
    .ticket-logo
      color #17c0c8
      font-size .5rem
    em
      font-size .32rem
      font-weight bold
    .ticket-more
      color #17c0c8
      margin-right .1rem
  .item-list
    display flex
    flex-wrap wrap
    justify-content space-around
    width 94%
    padding 3%
    .item
      overflow hidden
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
