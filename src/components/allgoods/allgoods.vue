<template>
  <div class="allgoods">
    <div class="goodsheader">
      <commonheader :con="con"></commonheader>
      <div class="goodsearch">
        <form >
          <mt-search></mt-search>
        </form>
      </div>
    </div>
    <div class="goodcontent">
      <div class="goodwrap">
        <p class="listname">家务</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">下厨</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"></li>
          <li class="gooditem"></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">家居服</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"></li>
          <li class="gooditem"></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">生活</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">软装</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">床品</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"></li>
          <li class="gooditem"></li>
        </ul>
      </div>
      <div class="goodwrap">
        <p class="listname">工作和旅行</p>
        <ul class="goodlist">
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
          <li class="gooditem"><a href="javascript:;"><img src="./onegood.jpg" alt=""><span>文具</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import commonheader from '../commonheader/commonheader.vue'
    import {Search} from 'mint-ui'
    export default{
        created(){
          this.con='全部产品'
        },
        components: {
            commonheader,
            'mt-search': Search
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .goodsheader
      position fixed
      width 100%
      top 0
      left 0
      z-index 1000
      .goodsearch
        position relative
        background-color #f2f2f2
    .goodcontent
      padding-top 90px
      padding-bottom 4.5rem
      .goodwrap
        .listname
          font-size 1.8rem
          text-align center
          margin 20px 0 10px 0
        .goodlist
          overflow hidden
          .gooditem
            width 33.1%
            float left
            height 138px
            background-color white
            border 1px solid #eaeaea
            margin-left -1px
            text-align center
            img
              width 75%
            span
              display inline-block
              text-align center
              font-size 1.3rem
              width 100%
              color #2d3233
</style>
<style type="text/css">
  .allgoods{
    background-color: #f2f2f2;
  }
  .mint-search{
    height: 50px;
  }
  .mint-searchbar{
    background-color: #f2f2f2;
    padding: 4px 10px;
  }
  .mint-searchbar-cancel{
    color: #83b842;;
    font-size: 1.5rem;
  }
</style>

