<template>
  <div class="card">
    <div class="list-info">
      <img v-lazy="avatarImage" lazy="loading" class="avatar">
      <span class="author">{{authors}}</span>
      <div class="time">{{data.publishedTime | timeDiff}}</div>
    </div>
    <img  v-lazy="titleImage" lazy="loading" class="title-image">
    <h1 class="title">{{data.title}}</h1>
    <p class="summary" v-html="summary"></p>
  </div>
</template>
<script>
  import { timeDiff } from '../../common/js/date';
  export default {
    name: 'v-card',
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      titleImage() {
        if (this.data.titleImage) {
          return 'http://zhihu.garychang.cn/tiny-pic?img=' + this.data.titleImage.replace('_r', '_b');
        } else {
          return '';
        }
      },
      summary() {
        let re1 = new RegExp('<.+?>', 'g');
        return this.data.summary.replace(re1, '').substr(1, 85) + '...';
      },
      columnId() {
        if (this.data.column_id != null) {
            return this.data.column_id;
         } else {
            return null;
         }
      },
      authors() {
        return this.data.author.name;
      },
      avatarImage() {
        return '' || ('http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com/' + this.data.author.avatar.id + '_xs.jpg');
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
  @import "articleCard.styl";
</style>
