<template>
  <div class="column-card">
    <img v-lazy="imgObj" lazy="loading" class="article-images">
    <div class="article-info">
      <p class="time">{{data.publishedTime | timeDiff}}</p>
      <p class="title">{{data.title}}</p>
      <div class="article-hot">
        <p>
          <span>{{data.likesCount}}赞</span>
          <span> · </span>
          <span>{{data.commentsCount}}条评论</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { timeDiff } from '../../common/js/date';
  export default {
    name: 'v-column-art-card',
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      imgObj() {
        if (this.data.titleImage) {
          return 'http://zhihu.garychang.cn/tiny-pic?img=' + this.data.titleImage.replace('_r', '_b');
        } else {
          return '';
        }
      },
      summary() {
        var re1 = new RegExp('<.+?>', 'g');
        return this.data.content.replace(re1, '').substr(0, 15);
      }
    },
    filters: {
        timeDiff(time) {
            let date = new Date(time);
            return timeDiff(date);
        }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "columnArtCard.styl";
</style>
