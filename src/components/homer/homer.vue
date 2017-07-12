<template>
  <div class="allwrap">
    <div class="headerindex">
      <demo-header ></demo-header>
    </div>

    <div ref="homescroll" class="homescroll">
      <div class="contentwrap">
        <imgswipe></imgswipe>
        <img src="./events.jpg" alt="">
        <img src="./newgoods.jpg" alt="">
        <img src="./scorechange.jpg" alt="">
        <img src="./forvip.jpg" alt="">
        <img src="./homer/1.jpg" alt="">
        <img src="./homer/2.jpg" alt="">
        <img src="./homer/5.jpg" alt="">
        <img src="./homer/0.jpg" alt="">
        <img src="./homer/3.jpg" alt="">
        <img src="./homer/9.jpg" alt="">
        <img src="./homer/4.jpg" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    import header from '../header/header.vue'
    import imgswipe from '../img-swipe/img-swipe.vue'
    import Vue from 'vue'
    import BSscroll from 'better-scroll'
    export default{
//        created(){
//              Vue.nextTick(()=>{
//                this._initScroll()
//              })
//        },
//        methods:{
//          _initScroll(){
//              this.scr=new BSscroll(this.$refs.homescroll,{
//              scrollY: true,
//              click: true
//            })
//          }
//        },
        components: {
            'demo-header': header,
              imgswipe,
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .headerindex
      position fixed
      width 100%
      z-index 1000
    .homescroll
      position absolute
      top 8.5rem
      height 100%
      left 0
      z-index 1
      /*display none*/
      .contentwrap
        padding-bottom 4.5rem
        img
          width 100%

</style>
