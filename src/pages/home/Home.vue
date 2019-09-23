<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :topList="topIconList" :bottomList="bottomIconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-ticket-recommend :list="ticketRecommendList"></home-ticket-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeTicketRecommend from './components/TicketRecommend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeTicketRecommend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      topIconList: [],
      bottomIconList: [],
      recommendList: [],
      ticketRecommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.topIconList = data.topIconList
        this.bottomIconList = data.bottomIconList
        this.recommendList = data.recommendList
        this.ticketRecommendList = data.ticketRecommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
