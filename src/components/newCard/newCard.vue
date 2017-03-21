<template>
  <div class="card">
    <router-link :to="{ name: 'article', params: {id: data.id, pid: data.slug }}" class="PostListItem-titleImageWrapper" v-show="imgObj !== ''">
      <img v-lazy="imgObj" lazy="loading" alt="题图" class="PostListItem-titleImage">
    </router-link>
    <div class="PostListItem-info">
      <p class="time">{{data.publishedTime | formatDate}}</p>
      <router-link :to="{ name: 'article', params: { pid: data.slug }}">
        <p class="title">{{data.title}}</p>
      </router-link>
      <div class="PostListItem-footer">
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
  import { formatDate } from '../../common/js/date';
  export default {
    name: 'v-new-card',
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
        formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd');
        }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "newCard.styl";
</style>
