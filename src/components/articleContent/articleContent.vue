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
              <img class="Avatar PostIndex-authorAvatar Avatar--xs" alt="袁浩瀚" src="https://pic3.zhimg.com/2d9b32906_xs.jpg">
            </a>
            <a href="https://www.zhihu.com/people/id47" target="_blank" class="PostIndex-authorName">袁浩瀚</a>
            <span class="Bull"></span>
            <div class="HoverTitle" data-hover-title="2015 年 6月 29 日星期一早上 8 点 10 分">
              <time datetime="2015-06-29T00:10:42.000Z">2 年前</time>
            </div>
          </div>
        </div>
        <div class="RichText PostIndex-content">{{articleData.content}}</div>
        <div class="Contributes">
          <div class="BlockTitle">
            <span class="BlockTitle-title">文章被以下专栏收录</span>
            <span class="BlockTitle-line"></span>
          </div>
          <ul class="Contributes-list">
            <li style="opacity: 1; max-height: 300px;">
              <div class="ContributesItem">
                <a href="https://zhuanlan.zhihu.com/alfredyuan" class="ContributesItem-avatar">
                  <img class="Avatar" src="https://pic2.zhimg.com/de66ce629_m.jpg">
                </a>
                <div class="ContributesItem-info">
                  <div class="ContributesItem-nameLine">
                    <a href="https://zhuanlan.zhihu.com/alfredyuan" class="ContributesItem-name">一蓑烟雨</a>
                  </div>
                  <p class="ContributesItem-intro u-ellipsis">一蓑烟雨任平生</p>
                </div>
                <a href="https://zhuanlan.zhihu.com/alfredyuan" class="ContributesItem-entrance">进入专栏</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
    import vArticleList from '../lists/article.vue';
    export default {
//       name: 'v-column-details',
        mounted() {
          this.getPersonalInfo();
        },

        data() {
            return {
              articleData: {},
              titleImage: ''
            };
        },

        created() {
        },

        computed: {

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

        components: {
          vArticleList
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './articleContent.styl';
</style>
