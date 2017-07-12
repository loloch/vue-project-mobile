<template>
  <div class="wrap">
    <div class="centerheader">
      <h2>账户中心</h2>
      <a href="javascript:;">设置</a>
    </div>
    <div class="centercontent">
      <div class="bg">
        <div class="status">您还未登录</div>
        <div class="operate">
          <a class="aleft" href="javascript:;">登录</a>|<a class="aright" href="javascript:;">注册</a>
        </div>
      </div>
      <ul class="buyorder">
        <li class="buyorderitem" v-for="(order,index) in orders" :class="`order${index+1}`">
          <span class="ordername">{{order.cn}}</span>
        </li>
      </ul>
      <div class="list1">
        <span class="ordericon ordericon1" ></span>
        <span class="ordertext">我的订单</span>
        <span class="orderdirect"></span>
      </div>
      <ul class="list3">
        <li>
          <span class="ordericon ordericon2"></span>
          <span class="ordertext">我的优惠券</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon3"></span>
          <span class="ordertext">关于积分</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon4"></span>
          <span class="ordertext">关于发票</span>
          <span class="orderdirect"></span>
        </li>
      </ul>
      <ul class="list5">
        <li>
          <span class="ordericon ordericon5"></span>
          <span class="ordertext">密码和登陆信息</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon6"></span>
          <span class="ordertext">老会员建议</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon7"></span>
          <span class="ordertext">客户服务</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon8"></span>
          <span class="ordertext">地址管理</span>
          <span class="orderdirect"></span>
        </li>
        <li>
          <span class="ordericon ordericon9"></span>
          <span class="ordertext">手机验证</span>
          <span class="orderdirect"></span>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
  export default{
    created(){
      this.orders=[
            {cn:'待支付',en:'pay'},
            {cn:'待发货',en:'send'},
            {cn:'待收货',en:'recive'},
            {cn:'待评论',en:'comment'},
            {cn:'回复',en:'reply'},
            {cn:'退换货',en:'change'}
            ]
    },
    components: {

    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .centerheader
    z-index 1000
    height 4rem
    background-color #80b532
    line-height 4rem
    text-align center
    position fixed
    width 100%
    left 0
    top 0
    h2
      color white
      font-size 2rem
      position absolute
      left 143px
    a
      position absolute
      color white
      font-size 1.8rem
      right  12px
  .centercontent
    padding-bottom 4.5rem
    .bg
      height 90px
      background url("./usercenter/background.png")
      text-align center
      padding 5px 0 5px
      margin-top 4rem
      .status
        color #222
        font-size 1.6rem
        padding 10px 0
      .operate
        display inline-block
        width 137px
        height 3rem
        line-height 3rem
        font-size 1.6rem
        color #009c42
        border 1px solid #009c42
        border-radius: 15% /50%
        .aleft
          color #009c42
          margin 0 10px
        .aright
          color #009c42
          margin 0 10px

    .buyorder
      overflow hidden
      margin 10px 0 0 18px
      .buyorderitem
        position relative
        float left
        width 33%
        height 5rem
        background-size 30%
        background-repeat no-repeat
        background-position 10% 50%
        border-bottom 1px solid gainsboro
        margin 3px 0px
        .ordername
          position absolute
          left 52px
          top 21px
          font-size 1.2rem
          color #585858
      .order1
        background-image url("./usercenter/3.png")
        border-right 1px solid gainsboro
      .order2
        background-image url("./usercenter/1.png")
        border-right 1px solid gainsboro
      .order3
        background-image url("./usercenter/4.png")
      .order4
        background-image url("./usercenter/5.png")
        border-right 1px solid gainsboro
      .order5
        background-image url("./usercenter/6.png")
        border-right 1px solid gainsboro
      .order6
        background-image url("./usercenter/2.png")
    .list1
      position relative
      .ordericon1
        background-image url("./usercenter/a.png")
    .list3
      border-top 10px solid #eeeeee
      border-bottom 10px solid #eeeeee
      li
        border-bottom 1px solid #eeeeee
        .ordericon2
          background-image url("./usercenter/b.png")
        .ordericon3
          background-image url("./usercenter/c.png")
        .ordericon4
          background-image url("./usercenter/d.png")
    .list5
      border-bottom 10px solid #eeeeee
      box-sizing border-box
      li
        border-bottom 1px solid #eeeeee
        .ordericon5
          background-image url("./usercenter/e.png")
        .ordericon6
          background-image url("./usercenter/a.png")
        .ordericon7
          background-image url("./usercenter/g.png")
        .ordericon8
          background-image url("./usercenter/h.png")
        .ordericon9
          background-image url("./usercenter/i.png")



</style>
<style>
  .ordericon{
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 50%;
    height: 5rem;
    width: 5rem;
  }
  .list1 span,.list3 span,.list5 span{
    display: inline-block;
  }
  .list1,.list3 li,.list5 li{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    position: relative;
  }
  .ordertext{
    position: absolute;
    left: 55px;
    top: 0;
    font-size: 14px;
  }
  .orderdirect{
    width: 10px;
    height: 10px;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 15px 10px 0 0;
    transform: rotate(45deg);
  }
</style>
