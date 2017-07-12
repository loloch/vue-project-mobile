<template>
  <div class="cartwrapper">
    <div class="cartheader">
      <span class="cartexit"></span>
      <span class="headertitle">购物车</span>
    </div>
    <div class="cartcontent">
      <div class="login">
        <a class="loginbtn" href="javascript:;">登录</a>
        <span class="loginpro">在登录之后您可以同步电脑与手机中的购买商品</span>
      </div>
      <div class="scorechangewrap">
        <input class="changeinput" placeholder="礼品兑换处" type="text">
        <input class="changebtn" type="button" value="兑换">
      </div>
      <div class="cartwrap">
        <div class="carticon"></div>
        <div class="cartempty">购物车还是空荡荡的</div>
        <div class="shopnow">赶紧去逛逛</div>
      </div>
      <div class="recommanded">Rico.S为您倾情推荐</div>
      <div class="crolistwrap">
        <ul class="crolist">
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
          <li ><a href="javascript:;"><img src="./1.jpg" alt=""></a><p>酸奶</p><p>￥12</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
          arr:[1]
      }
    },
    components: {
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .cartheader
    width 100%
    height 4rem
    line-height 4rem
    background-color #89be48
    position fixed
    z-index 1000
    left 0
    top 0
    .cartexit
      display inline-block
      height 4rem
      width 4rem
      background-image  url("./direct.png")
      background-repeat no-repeat
      background-position 40%
      background-size 35%
    .headertitle
      display inline-block
      position absolute
      left 155px
      top 0
      color white
      font-size 2rem
  .cartcontent
    padding-top 4rem
    .login
      height 4rem
      line-height 3rem
      padding-top 4px
      background-color: #f0fae6;
      .loginbtn
        width: 18%;
        height: 2.6rem;
        border-radius 2px
        display: inline-block;
        background: #fff;
        border: 1px solid #8bc146;
        text-align: center;
        font-size: 1.5rem;
        color: #88c13e;
        line-height: 2.5rem;
        margin 0 10px
      .loginpro
        display: inline-block;
        font-size: 1.2rem;
        color: #333;


  .scorechangewrap
    width 100%
    height 3.2rem
    line-height 3.2rem
    padding 5px 5px 5px 10px
    position relative
    border-bottom 1px solid #89be48
    .changeinput
      width 75%
      height 3.2rem
      outline 0 none
      border 1px solid gainsboro
      font-size 1.6rem
      font-weight 400
    .changebtn
      width 15%
      height 3.2rem
      outline 0 none
      border-radius 2px
      color #89be48
      border 1px solid #89be48
      font-size 1.8rem
      background-color white
      position absolute
      right 29px
      top 6px


  .cartwrap
    width 100%
    height 312px
    text-align center
    background-color #eeeef1
    .carticon
      height 170px
      background-image url("./2.png")
      background-repeat no-repeat
      background-position 61% 0
      background-size 47%
    .cartempty
      font-size 1.8rem
      text-align center
      color #a6aca2
      margin 10px 0
    .shopnow
      border: 1px solid rgb(137, 190, 72);
      display inline-block
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      font-size: 1.5rem;
      letter-spacing: 1px;
      margin-top: 6px;
      color: rgb(137, 190, 72);


  .recommanded
    font-size 1.6rem
    color #565f60
    height 41px
    line-height 41px
    padding-left 10px
    border-bottom 1px solid #a9bbbd
  .crolistwrap
    width 100%
    height 11rem
    overflow-x scroll;
    margin: 0 auto;
    padding: 1.3rem 0;
    .crolist
      width 1800px
      height 80px
      li
        width 80px
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        margin 0 3.5px
        img
          width 100%
        p
          font-size 1rem
          margin 5px 0
</style>
<style>
  .cartwrapper{
    /*height: 100%;*/
    overflow-x :hidden
  }
</style>
