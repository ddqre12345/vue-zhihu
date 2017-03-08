<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" src="https://avatars2.githubusercontent.com/u/16521402?v=3&u=225ef33c491d879294c4cb06621ec15f5b01f02a&s=400"
          alt="">
        <div class="author">浅滩戏虾</div>
        <div class="author-site">北京-只比五环少一环</div>
        <div class="menu-title">纯粹知乎</div>
      </div>
      <div class="menu-ul">
        <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
          <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
            <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const MENU_CONVERT = { 'columns': '专栏 · 发现', 'articles': '文章 · 发现' };
  export default
    {
      name: 'v-menu',
      props: {
        show: {
          type: Boolean
        }
      },
      data() {
        return {
          MENU_CONVERT: MENU_CONVERT
        };
      },
      computed: {
      ...mapState([
        'menus'
      ])
      },
      methods: {
        updateHeader(title, menu) {
          this.$store.commit('UPDATE_TITLE', title);
          this.$store.commit('UPDATE_MENUSHOW');
        }
      }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';
</style>
