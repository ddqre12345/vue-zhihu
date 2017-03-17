<template>
  <div>
    <header class="header">
      <header class="bar bar-nav">
        <div class="title">{{headerTitle}}</div>
      </header>
    </header>
    <v-menu :show="false"></v-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  import vMenu from '../menu/foot-menu.vue';
  import {mapState} from 'vuex';
  export default
  {
    name: 'v-header',
    components: {
      vMenu
    },
    data() {
      return {
        show: false
      };
    },
    computed: {
      ...mapState([
        'headerTitle'
      ])
    },
    methods: {
      isShow() {
       this.$store.commit('UPDATE_MENUSHOW');
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl";
</style>
