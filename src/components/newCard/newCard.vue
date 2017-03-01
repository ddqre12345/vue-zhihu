<template>
  <div class="card">
    <img  v-lazy="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com/' + data.avatar.id + '_l.jpg'" class="img">
    <div class="card-content">
      <div class="desc">{{data.description}}</div>
      <div class="card-content-bottom">
        <div class="who">{{data.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-new-card',
    props: {
      data: {
        type: Object
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "newCard.styl";

</style>
