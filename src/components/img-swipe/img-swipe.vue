<template>
  <div>
    <swipe class="my-swipe" >
      <!--<swipe-item class="slide" v-for="imgurl in imgurls" ><img :src="`./swipe/${imgurl}.jpg`" alt=""></swipe-item>-->
      <swipe-item class="slide"  ><img src="./swipe/1.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/2.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/3.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/4.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/5.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/6.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/7.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/8.jpg" alt=""></swipe-item>
      <swipe-item class="slide"  ><img src="./swipe/9.jpg" alt=""></swipe-item>
    </swipe>



  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
    export default{
      data(){
        return {
            imgurls:[1,2,3,4,5,6,7,8,9]
        }
      },
      components: {
        'swipe':Swipe,
        'swipe-item': SwipeItem
      }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .my-swipe
      height 250px
      img
        width 100%
</style>
<style>
  .mint-swipe-indicator{
    background-color: white;
    opacity: 1;
  }
  .mint-swipe-indicator.is-active{
    background-color: #80b532;
  }
</style>
