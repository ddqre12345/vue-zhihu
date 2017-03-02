<template>
    <transition name="fade">
        <div v-show="showFlag" class="details">
            <div>
                <header class="header">
                    <header class="bar bar-nav" @click="hide">
                        <div class="pull-left">
                            <span class="iconfont icon-left"></span>
                        </div>
                        <div class="title">{{title}}</div>
                    </header>
                </header>
                <div class="ColumnAbout"><img src="http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=https://pic2.zhimg.com/a09dabc3d_xl.jpg" class="ColumnAbout-avatar" alt="">
                  <h1 class="ColumnAbout-name">琉森：抽油烟少女</h1>
                  <p class="ColumnAbout-intro">沉迷于新闻摄影的师范生，却做了格子间里的产品经理…</p>
                  <div>
                    <div class="ColumnAbout-actions">
                      <div class="Menu ColumnAbout-menu ">
                        <button
                          class="Button Button Button--plain MenuButton MenuButton-listen-hover ColumnAbout-menuButton icon icon-ic_unfold"
                          aria-label="更多操作" type="button"></button>
                        <div class="Menu-dropdown"></div>
                      </div>
                    </div>
                    <a class="ColumnAbout-followers" href="/luzern/followers" target="_blank"><!-- react-text: 1218 -->
                      7648<!-- /react-text --><!-- react-text: 1219 --> 人关注<!-- /react-text --></a></div>
                  <ul class="ColumnTopicList">
                    <li><a href="/luzern"><span class="TopicTag is-active"><!-- react-text: 1224 -->全部<!-- /react-text --><span
                      class="TopicTag-count">27</span></span></a></li>
                    <li><a href="/luzern?topic=%E7%BE%8E%E9%A3%9F"><span class="TopicTag"><!-- react-text: 1229 -->美食
                      <!-- /react-text --><span class="TopicTag-count">4</span></span></a></li>
                    <li><a href="/luzern?topic=%E7%83%B9%E9%A5%AA"><span class="TopicTag"><!-- react-text: 1234 -->烹饪
                      <!-- /react-text --><span class="TopicTag-count">2</span></span></a></li>
                    <li><a href="/luzern?topic=%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8"><span class="TopicTag"><!-- react-text: 1239 -->日本旅游
                      <!-- /react-text --><span class="TopicTag-count">2</span></span></a></li>
                    <li>
                      <button class="ColumnTopicList-showall" type="button">更多</button>
                    </li>
                  </ul>
                </div>
                <v-day :data="personalData" ref="day"></v-day>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import { formatDate } from '../../common/js/date';
    import BScroll from 'better-scroll';
    import vDay from '../day/day.vue';
    export default {
        name: 'v-column-details',
        props: {
            personalData: {
                type: Object
            },
            data: {
              type: Object
            },
            title: {
              type: String
            }
        },
        data() {
            return {
                showFlag: false
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
                    this.$refs.day.clearStyle();
                });
            },
            hide() {
                this.showFlag = false;
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            }
        },
        components: {
            vDay
        }
    };
</script>


<style lang="stylus" rel="stylesheet/stylus">
    @import './columnDetails.styl';
</style>
