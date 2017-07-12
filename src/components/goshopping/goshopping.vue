<template>
  <div>
    <commonheader :con="con"></commonheader>
    <div class="shoplist">
      <div class="shopleft">
        <shoppinglist></shoppinglist>
      </div>
      <div class="shopright">
        <div>
          <ul class="shoptitlewrap">
            <li class="shoptitle">昨日新品</li>
            <li class="shoptitle">今日新品</li>
            <li class="shoptitle">明日新品</li>
            <li class="shoptitle">都是新品</li>
          </ul>
          <shoppinglist></shoppinglist>
        </div>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
    import commonheader from '../commonheader/commonheader.vue'
    import shoppinglist from '../shopinglist/shopinglist.vue'
    export default{
      created(){
        this.con='闲逛'
      },
        components: {
          commonheader,
          shoppinglist
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .shoplist
      overflow hidden
      .shopleft
        width 50%
        float left
      .shopright
        width 50%
        float left

        .shoptitlewrap
          overflow hidden
          margin-top 7px
          .shoptitle
            float left
            width 47%
            height 5rem
            background-color gainsboro
            margin 2px
            border-radius 15px
            text-align center
            line-height 5rem
            font-size 15px
</style>
