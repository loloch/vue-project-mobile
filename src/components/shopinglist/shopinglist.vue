<template>
  <ul class="shopleftul">
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
    <li class="shopleftli">
      <div class="imgwrap"><img src="./1.jpg" alt=""><span class="imgtitle">NEW</span></div>
      <h3>小花伞</h3>
      <div class="info"><span class="price">￥88</span><span class="comment">月售出100</span></div>
    </li>
  </ul>
</template>

<script>
    export default{
        components: {}
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .shopleftul
    width 187.5px
    margin 5px 7px 0
    .shopleftli
      width 100%
      /*margin  5px 5px*/
      h3
        font-size 1.35rem
        color black
        margin-bottom 2px
        width 172px
      .info
        width 172px
        .price
          font-size: 1.8rem;
          display: inline-block;
          color: #ff0d0d;
          font-weight: 400;
          text-align: left;
        .comment
          font-size: 1.4rem;
          float: right;
          color: #999;
      .imgwrap
        width 100%
        margin-bottom 4px
        position relative
        img
          width 172px
          border-radius 10px
        .imgtitle
          position absolute
          width 32px
          height 13px
          background-color #79da87
          font-weight 400
          color white
          line-height 13px
          text-align center
          border-radius 3px
          left 0
          top 10px
</style>
