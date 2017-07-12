<template>
  <div class="commonheader">{{con}}</div>
</template>

<script>
    export default{
        props:['con'],
        components: {}
    }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .commonheader
    width 100%
    height 4rem
    color white
    font-size 2rem
    line-height 4rem
    text-align center
    background-color #80b532
</style>
