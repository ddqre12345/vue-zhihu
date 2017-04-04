<template>
    <transition name="fade">
        <div class="details">
            <header class="header">
                <div class="bar bar-nav">
                    <div class="pull-left" @click="goBack">
                        <span class="iconfont icon-left"></span>
                    </div>
                    <div class="title">{{personalData.name}}</div>
                </div>
            </header>
            <div class="column-info">
                <div class="author-image">
                  <img alt="authorName" v-lazy="imgId" lazy="loading">
                </div>
                <div class="column-detail">
                  <p v-text="personalData.name" class="column-name"></p>
                  <p class="column-hot"><span class="concern-sum">{{personalData.followersCount}}人关注</span> · <span class="articles-sum">{{personalData.postsCount}}文章</span></p>
                </div>
                <p class="column-description">{{personalData.description}}</p>
              </div>
            <v-article-list></v-article-list>
        </div>
    </transition>
</template>

<script>
    import api from '../../api/index';
    import vArticleList from '../lists/article.vue';
    export default {
       name: 'v-column-details',
        mounted() {
          this.getPersonalInfo();
        },

        data() {
            return {
                personalData: {},
                imgId: ''
            };
        },

        methods: {
            goBack() {
              this.$router.go(-1);
            },
            getPersonalInfo() {
              this.$store.commit('UPDATE_LOADING', true);
              api.getPersonalInfo(this.$route.query.id)
                  .then((response) => {
                      console.log(response);
                      this.personalData = response.data;
                      this.imgId = 'http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com/' + response.data.avatar.id + '_l.jpg';
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
    @import 'columnDetails.styl';
</style>
