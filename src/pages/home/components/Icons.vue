<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-top-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
      </div>
      <p class="icon-desc">酒店</p>
    </div>
    <div class="icon">
      <div class="icon-top-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/flight.png">
      </div>
      <p class="icon-desc">机票</p>
    </div>
    <div class="icon">
      <div class="icon-top-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/package.png">
      </div>
      <p class="icon-desc">度假</p>
    </div>
    <div class="icon">
      <div class="icon-top-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/train.png">
      </div>
      <p class="icon-desc">火车票</p>
    </div>
    <div class="icon">
      <div class="icon-top-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/piao.png">
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/group.png">
      </div>
      <p class="icon-desc">特惠酒店</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/bargainflight.png">
      </div>
      <p class="icon-desc">低价机票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/inn.png">
      </div>
      <p class="icon-desc">客栈</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/haiwai.png">
      </div>
      <p class="icon-desc">海外酒店</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/kezhan.png">
      </div>
      <p class="icon-desc">民宿</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/bus.png">
      </div>
      <p class="icon-desc">汽车票船票</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/tuan.png">
      </div>
      <p class="icon-desc">旅游团购</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/freeTravel.png">
      </div>
      <p class="icon-desc">自由行</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/car.png">
      </div>
      <p class="icon-desc">专车自驾</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png">
      </div>
      <p class="icon-desc">周边短途</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/jr.png">
      </div>
      <p class="icon-desc">金融理财</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/card.png">
      </div>
      <p class="icon-desc">保险车险</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/travel.png">
      </div>
      <p class="icon-desc">攻略</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/youlun.png">
      </div>
      <p class="icon-desc">邮轮</p>
    </div>
    <div class="icon">
      <div class="icon-bottom-img">
        <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/oversea.png">
      </div>
      <p class="icon-desc">换外币</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 100%
    margin-top .25rem
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
</style>
