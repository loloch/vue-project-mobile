<template>
  <div class="headerindex">
    <div class="head-wrapper">
      <div class="head-icon"></div>
      <a href="#">
        <span class="head-all"></span>
      </a>
    </div>

    <div ref="nav" class="nav-wrapper">
      <navbar v-model="selected" ref="nav1">
        <tab-item class="nav" :id="`${index+1}`" v-for="(nav,index) in navs" :key="`${index+1}`">{{nav}}</tab-item>
      </navbar>
      <!--<ul>-->
        <!--<li class="nav" :id="`${index+1}`" v-for="(nav,index) in navs" :key="`${index+1}`" >{{nav}}</li>-->
      <!--</ul>-->
    </div>




  </div>
</template>

<script>

    import BSscroll from 'better-scroll'
    import Vue from 'vue'
    import { Navbar, TabItem } from 'mint-ui'
    export default{
        data(){
          return {
            navs: ['首页', '新品', '家务', '下厨', '家居服', '生活', '软装', '床品', '工作和旅行', '了解lifeVC'],
            selected:'1'
          }
        },
        created(){
            Vue.nextTick(()=>{
              console.log('华东')
              new BSscroll(this.$refs.nav, {
                click:true,
                scrollX: true,
                scrollY: false,
                bounce: false
              })
            })

        },
        methods:{
            goodChange(event){
                if(!event._constructed){
                    return
                }
                event.target.className='active'
                console.log(event.target)

            }
        },
        components:{

          'navbar': Navbar,
          'tab-item': TabItem
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
     .head-wrapper
         width 100%
         height 4rem
         background #89be48
         position relative
         top 0
         /*overflow hidden*/
         .head-icon
           width 100%
           height 4rem
           background-image url('./homeheader.png')
           background-repeat no-repeat
           background-size 50%
           background-position 50%
         .head-all
           width: 3.666666rem;
           height: 3.666666rem;
           display: block;
           float: right;
           position: absolute;
           top: 0;
           right: 0;
           background-size: 45%;
           background-image: url('./all.png');
           background-repeat: no-repeat;
           background-position: 50%;
     .nav-wrapper
        height 5.5rem
        line-height 3rem
        .mint-navbar
          width 800px
          .mint-tab-item.is-selected
            border-bottom: 4px solid #80b532
            color #80b532
          .nav .mint-tab-item-label
             font-size 1.35rem

</style>

