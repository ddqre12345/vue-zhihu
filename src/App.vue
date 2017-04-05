<template>
<div>
    <v-header></v-header>
    <loading :show="loadingShow"></loading>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>

<script>
  import vMenu from './components/menu/foot-menu.vue';
  import vHeader from './components/header/header.vue';
  import loading from './components/loading/loading.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'app',
    components: {
      vMenu,
      vHeader,
      loading
    },
    computed: {
      ...mapState([
        'loadingShow'
      ])
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    padding-top: 50px;
  }
  #app .show {
    transform: translateX(285px);
  }
  #app .page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }
  #app .first{
    position: fixed;
    top: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: red;
  }
</style>
