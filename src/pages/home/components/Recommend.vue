<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="item-list">
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/a7f5edb0-3bad-4c5d-8991-1cf2d8d2f0b8.jpg_r_480x320x90_a9a1599e.jpg',
        title: '北京-苏梅岛 5天自由行',
        desc: '开启旅游新时代·苏梅岛5天4晚自由行|网红ins|海边酒店|专车接送机|机酒',
        price: '5288'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/p/tts5/1808/71/51effca6fc1f5a02.jpg_r_390x260x90_85417729.jpg',
        title: '北京-桂林 4天跟团游',
        desc: '不带钱包游桂林丨0自费0购物0景中店丨五星漓江假日+山水间演出丨漓江阳朔古东',
        price: '3070'
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e6503621-e200-4b13-8822-f68b0625cb17.jpg_r_480x320x90_c8854043.jpg',
        title: '北京-八达岭长城 1天跟团游',
        desc: '【八达岭长城】7点早出发避高峰纯玩无购物一日游 赠水赠好汉证书 多时间可选',
        price: '88'
      }, {
        id: '0004',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/dc285bc6-3679-4c45-9433-e06a6fa93a18.jpg_r_480x320x90_9ca98e32.jpg',
        title: '北京-石林 6天跟团游',
        desc: '高端典范< 0差评0强消+下单立减>五星温泉+吉普车游船+雪山登顶+网红旅拍',
        price: '1950'
      }]
    }
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
