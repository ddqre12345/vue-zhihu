<template>
  <div class="card">
    <img  v-lazy="'https://pic4.zhimg.com/data.avatar.id' + '.jpg'" class="img">
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
