<template>
    <transition name="fade">
        <div v-show="showFlag" class="details">
            <div>
                <header class="header">
                    <header class="bar bar-nav">
                      <router-link :to="{ name: 'columns'}">
                        <div class="pull-left">
                            <span class="iconfont icon-left"></span>
                        </div>
                      </router-link>
                        <div class="title">{{columnTitle}}</div>
                    </header>
                </header>
                <div class="ColumnAbout"><img src="http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic2.zhimg.com/a09dabc3d_xl.jpg" class="ColumnAbout-avatar" alt="">
                  <h1 class="ColumnAbout-name">琉森：抽油烟少女</h1>
                  <p class="ColumnAbout-intro">沉迷于新闻摄影的师范生，却做了格子间里的产品经理…</p>
              </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import {mapState} from 'vuex';
    export default {
//        name: 'v-column-details',
        data() {
            return {
                showFlag: true
            };
        },
        created() {
        },
        methods: {
            show() {
                this.showFlag = true;
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$el, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            },
            hide() {
                this.showFlag = false;
            },
            getColumnDetail() {
              this.axios.get(`/api/columns/${this.column}/posts?limit=10&offset=0`)
                .then((response) => {
                  console.log(this);
                  let data = response.data;
                  this.personalData = data[0];
                  console.log(this.personalData);
                  this.$refs.details.show();
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
          ...mapState([
            'columnTitle'
          ])
        },
        components: {
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './columnDetails.styl';
</style>
