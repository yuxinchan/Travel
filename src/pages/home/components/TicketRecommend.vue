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
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price"><em>￥</em><em>{{item.price}}</em></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeTicketRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1908/70/70a9ac02a1edfba4a3.img.jpg_256x160_e9484fbd.jpg',
        title: '广州长隆旅游度假区',
        desc: '一站式旅游度假胜地，广东必游景点',
        price: '92'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_256x160_a2a2f8d3.jpg',
        title: '世界之窗',
        desc: '全球微缩景点，精彩演绎、娱乐项目应有尽有',
        price: '85'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1707/d8/d89ab1a9b2ab355ba3.img.jpg_256x160_783034b6.jpg',
        title: '长隆水上乐园',
        desc: '全球必去的水上乐园',
        price: '126'
      }, {
        id: '0004',
        imgUrl: '//img1.qunarzz.com/sight/p0/1908/60/6014c4a3b92fb074a3.img.jpg_256x160_226698ae.jpg',
        title: '珠海长隆海洋王国',
        desc: '经历一场难忘的深海历奇之旅',
        price: '371'
      }, {
        id: '0005',
        imgUrl: '//img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_256x160_097bc893.jpg',
        title: '长隆欢乐世界',
        desc: '垂直过山车等挑战你的青春荷尔蒙',
        price: '96'
      }, {
        id: '0006',
        imgUrl: '//img1.qunarzz.com/sight/p0/1909/7c/7c6a137effe1d34ea3.water.jpg_256x160_2b8fefdf.jpg',
        title: '东部华侨城大侠谷',
        desc: '行走峡湾栈道，倾听大自然的天籁之音',
        price: '88.9'
      }]
    }
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
      height 3.6rem
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
