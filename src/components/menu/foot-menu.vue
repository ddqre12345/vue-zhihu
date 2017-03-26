<template>
  <div class="foot-menu" :class="{'show': show}">
    <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
      <router-link :to="{ path: menu }" class="menu-item" replace>
        <div class="menu-icon" :class="'icon-'+ menu"></div>
        <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const MENU_CONVERT = { 'articles': '发现', 'columns': '专栏' };
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
        'menus', 'menuActive'
      ])
    },
    methods: {
      updateHeader(title, menu) {
        console.log(menu);
        this.$store.commit('UPDATE_TITLE', title);
        this.$store.commit('UPDATE_MENUACTIVE', menu);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'foot-menu.styl';
</style>
