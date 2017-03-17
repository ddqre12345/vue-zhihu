<template>
    <transition name="fade1">
        <div class="details">
            <header class="header">
                <header class="bar bar-nav">
                    <div class="pull-left" @click="goBack">
                        <span class="iconfont icon-left"></span>
                    </div>
                    <div class="title">{{personalData.name}}</div>
                </header>
            </header>
            <div class="columnAbout">
              <img :src="imgId" class="columnAbout-avatar" alt=""/>
              <h1 class="columnAbout-name">{{personalData.name}}</h1>
              <p class="columnAbout-intro">{{personalData.intro}}</p>
            </div>
            <v-article-list></v-article-list>
        </div>
    </transition>
</template>

<script>
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
              window.history.back();
            },
            getPersonalInfo() {
              this.$store.commit('UPDATE_LOADING', true);
              this.axios.get(`/api/columns/${this.$route.params.id}`)
                .then((response) => {
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
    @import './columnDetails.styl';
</style>
