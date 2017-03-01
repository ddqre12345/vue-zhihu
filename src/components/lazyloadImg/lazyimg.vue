<template>
  <div class="lazy-wrap">
    <div class="lazy-avatar">
      <img v-lazy="imgObj" lazy="loading" />
    </div>
    <p class="lazy-title">{{data.name}}</p>
    <p class="lazy-description" style="-webkit-box-orient: vertical;">{{data.description}}</p>
    <div class="lazy-other">
      <p>
        {{data.followersCount}}人关注专栏
        <span class="split">|</span>
        {{data.postsCount}}篇文章
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-img',
    props: {
      imgUrl: {
        type: String
      },
      data: {
        type: Object
      }
    },
    computed: {
      imgObj() {
        if (this.imgUrl) {
          return 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com/' + this.imgUrl + '_l.jpg';
        }
      }
    }
  };
</script>
<style>
@-webkit-keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
@keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
img[lazy=loaded] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
img[lazy=loading] {
  /*width: 40px!important;*/
  margin: auto;
}
img[lazy=error] {
  border-radius: 2px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "lazyimg.styl";
</style>
