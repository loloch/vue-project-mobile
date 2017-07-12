<template>
  <div class="footer">
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item" v-for="(item,index) in items">
        <router-link :to="`/${item.en}`">
          <div class="icon" :class="`${item.en}icon`"></div>
          <span>{{item.cn}}</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    data(){
        return {
            items: [
              {cn: '首页', en: 'homer'},
              {cn: '全部产品', en: 'allgoods'},
              {cn: '闲逛', en: 'goshopping'},
              {cn: '购物车', en: 'shopcart'},
              {cn: '账户中心', en: 'personcenter'}
                ]
        }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .tab
      width 100%
      font-size 0
      position fixed
      bottom 0
      height 4.5rem
      background #f8f8f8;
      border-top .04rem solid #ddd;
      z-index 1000
      .tab-item
        display inline-block
        width 20%
        text-align center
        .icon
          height 100%
          height 3rem
          background-repeat no-repeat
          background-size 27%
          background-position center
        .homericon
          background-image: url('./components/footer/1.png')
        .router-link-exact-active,.active .homericon
          background-image url('./components/footer/1a.png')
        .allgoodsicon
          background-image: url('./components/footer/2.png')
        .router-link-exact-active,.active .allgoodsicon
          background-image url('./components/footer/2a.png')
        .goshoppingicon
          background-image: url('./components/footer/3.png')
        .router-link-exact-active,.active .goshoppingicon
          background-image url('./components/footer/3a.png')
        .shopcarticon
          background-image: url('./components/footer/4.png')
        .router-link-exact-active,.active .shopcarticon
          background-image url('./components/footer/4a.png')
        .personcentericon
          background-image: url('./components/footer/5.png')
        .router-link-exact-active,.active .personcentericon
          background-image url('./components/footer/5a.png')
        span
          display inline-block
          height 1.1rem
          line-height 15px
          font-size 1.1rem
        .active span
          color #89be48


</style>
