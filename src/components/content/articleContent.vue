<template>
  <transition name="fade">
    <div class="article-content">
      <header class="header">
        <header class="bar bar-nav">
          <div class="pull-left" @click="goBack">
            <span class="iconfont icon-left"></span>
          </div>
          <div class="title" v-cloak>{{articleData.title}}</div>
        </header>
      </header>
      <div class="article-content-info" v-show='showFlag'>
        <div class="article-info-header">
          <div class="article-title-image" v-show="titleImageObj">
            <img  v-lazy="titleImageObj" class="article-title-image-pic" lazy="loading">
          </div>
          <div class="article-author-info">
            <div class="author-image">
                <img class="avatar-size-xs" alt="authorName" v-lazy="avatarImage" lazy="loading" v-cloak>
            </div>
            <div class="author-detail">
              <p v-text="authorName" class="author-name"></p>
              <p v-text="authorBio" class="author-bio"></p>
            </div>
          </div>
          <h1 class="article-title" v-text="articleData.title" v-cloak></h1>
        </div>
        <div class="rich-text" v-html="textContent"></div>
      </div>
    </div>
  </transition>
</template>
<script>
    import api from '../../api/index';
    import { formatDate } from '../../common/js/date';
    export default {
        mounted: function() {
            this.getPersonalInfo();
        },
        data() {
            return {
              articleData: {},
              titleImage: '',
              avatarImage: '',
              authorName: '',
              authorBio: '',
              showFlag: false
            };
        },

        methods: {
            goBack() {
              this.showFlag = false;
              this.$router.go(-1);
            },
            getPersonalInfo() {
                this.$store.commit('UPDATE_LOADING', true);
                api.getArticleDetail(this.$route.query.pid)
                    .then((response) => {
                        this.articleData = response.data;
                        this.titleImage = this.articleData.titleImage || '';
                        this.avatarImage = ('http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com/' + response.data.author.avatar.id + '_l.jpg');
                        this.authorName = this.articleData.author.name || '';
                        this.authorBio = this.articleData.author.bio || '';
                        console.log(this.articleData.author.name);
                        this.showFlag = true;
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
                return '' || ('http://zhihu.garychang.cn/tiny-pic?img=' + this.titleImage);
              } else {
                return '';
              }
            },

            textContent() {
              // 原本内容区图片链接添加了防盗链，需要转化
              return String(this.articleData.content)
              .replace(new RegExp('https://pic1.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=https://pic1.zhimg.com')
              .replace(new RegExp('https://pic2.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=https://pic2.zhimg.com')
              .replace(new RegExp('https://pic3.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=https://pic3.zhimg.com')
              .replace(new RegExp('https://pic4.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com')
              .replace(new RegExp('http://pic1.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=http://pic1.zhimg.com')
              .replace(new RegExp('http://pic2.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=http://pic2.zhimg.com')
              .replace(new RegExp('http://pic3.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=http://pic3.zhimg.com')
              .replace(new RegExp('http://pic4.zhimg.com', 'gm'), 'http://zhihu.garychang.cn/tiny-pic?img=http://pic4.zhimg.com');
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
