<template>
  <transition name="fade2">
    <div class="article-content">
      <header class="header">
        <header class="bar bar-nav">
          <router-link :to="{ name: 'column', params: {id: $route.params.id}}">
            <div class="pull-left">
              <span class="iconfont icon-left"></span>
            </div>
          </router-link>
          <div class="title" v-cloak>{{articleData.title}}</div>
        </header>
      </header>
      <div class="article-content-info">
        <div class="article-info-header">
          <div class="article-title-image" v-show="titleImageObj">
            <img alt="articleData.title" v-lazy="titleImageObj" class="article-title-image-pic" lazy="loading">
          </div>
          <h1 class="article-title" v-text="articleData.title" v-cloak></h1>
          <div class="article-author-info">
            <a>
              <img class="avatar-size-xs" alt="authorName" v-lazy="avatarImage" lazy="loading" v-cloak>
            </a>
            <a v-text="authorName" v-cloak></a>
            <div class="published-time" v-cloak>{{articleData.publishedTime | formatDate}}</div>
          </div>
        </div>
        <div class="rich-text" v-html="textContent"></div>
      </div>
    </div>
  </transition>
</template>

<script>
    import { formatDate } from '../../common/js/date';
    export default {
        mounted() {
          this.getPersonalInfo();
        },

        data() {
            return {
              articleData: {},
              titleImage: '',
              avatarImage: '',
              authorName: ''
            };
        },

        methods: {
            getPersonalInfo() {
              this.$store.commit('UPDATE_LOADING', true);
              this.axios.get(`/api/posts/${this.$route.params.pid}`)
                .then((response) => {
                  this.articleData = response.data;
                  this.titleImage = response.data.titleImage;
                  this.avatarImage = '' || ('http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com/' + response.data.author.avatar.id + '_l.jpg');
                  this.authorName = response.data.column.name;
                  // $nextTick() 在dom 重新渲染完后执行
                  this.$nextTick(() => {
                    this.$store.commit('UPDATE_LOADING', false);
                  });
                })
                .catch((response) => {
                  console.log(response);
                });
            }
        },
        computed: {
            titleImageObj() {
              if (this.titleImage) {
                return '' || ('http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + this.titleImage);
              } else {
                return '';
              }
            },
            textContent() {
              // 原本内容区图片链接添加了防盗链，需要转化
              return String(this.articleData.content)
              .replace(new RegExp('https://pic1.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic1.zhimg.com')
              .replace(new RegExp('https://pic2.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic2.zhimg.com')
              .replace(new RegExp('https://pic3.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic3.zhimg.com')
              .replace(new RegExp('https://pic4.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com');
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
  @import './articleContent.styl';
</style>
