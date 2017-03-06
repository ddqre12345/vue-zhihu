<template>
  <transition name="fade">
    <div class="article-content">
      <header class="header">
        <header class="bar bar-nav">
          <router-link :to="{ name: 'column', params: {id: $route.params.id}}">
            <div class="pull-left">
              <span class="iconfont icon-left"></span>
            </div>
          </router-link>
          <div class="title">{{articleData.title}}</div>
        </header>
      </header>
      <div class="Layout-main Layout-titleImage--normal" data-za-module="PostItem">
        <div class="PostIndex-header">
          <div class="TitleImage">
            <img alt="articleData.title" :src="titleImage" class="TitleImage-imagePure TitleImage-imagePure--fixed" width="100%">
          </div>
          <h1 class="PostIndex-title">{{articleData.title}}</h1>
          <div class="PostIndex-author">
            <a href="https://www.zhihu.com/people/id47" target="_blank">
              <img class="Avatar PostIndex-authorAvatar Avatar--xs" alt="authorName" :src="avatarImage">
            </a>
            <a href="https://www.zhihu.com/people/id47" target="_blank" class="PostIndex-authorName">{{authorName}}</a>
            <span class="Bull"></span>
            <div class="HoverTitle">
              <time datetime="2015-06-29T00:10:42.000Z">{{articleData.publishedTime | formatDate}}</time>
            </div>
          </div>
        </div>
        <div class="RichText PostIndex-content" v-html="textContent"></div>
      </div>
    </div>
  </transition>
</template>

<script>
    import { formatDate } from '../../common/js/date';
    import vArticleList from '../lists/article.vue';
    export default {
//       name: 'v-column-details',
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

        created() {
        },

        methods: {
            getPersonalInfo() {
              this.$store.commit('UPDATE_LOADING', true);
//              this.axios.get(`https://zhuanlan.zhihu.com/api/posts/${this.$route.params.pid}`)
              this.axios.get(`/api/posts/20090944`)
                .then((response) => {
                  console.log(response);
                  this.articleData = response.data;
                  this.titleImage = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + response.data.titleImage;
                  this.avatarImage = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com/' + response.data.author.avatar.id + '_l.jpg';
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
            textContent() {
              return String(this.articleData.content)
              .replace(new RegExp('https://pic1.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic1.zhimg.com')
              .replace(new RegExp('https://pic2.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic2.zhimg.com')
              .replace(new RegExp('https://pic3.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic3.zhimg.com')
              .replace(new RegExp('https://pic4.zhimg.com', 'gm'), 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic4.zhimg.com');
            }
        },
        components: {
          vArticleList
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
