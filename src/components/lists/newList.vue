<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <a v-for="data in datas" :href="data.url " target="view_window">
      <v-card :data="data" ></v-card>
    </a>
  </div>

</template>

<script>
  import vNewCard from '../newCard/newCard.vue';
  export default
  {
    name: 'v-new-list',
    props: {
      type: {
        type: String
      }
    },
    data() {
      return {
        datas: [],
        page: 1,
        busy: false
      };
    },
    computed: {

    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        this.$http.get(`http://news-at.zhihu.com/api/4/news/latest`).then((response) => {
          console.log(response);
          this.datas = this.datas.concat(response);
          this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false);
          });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      }
    },
    components: {
      vNewCard
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list {
    padding: 15px;
  }
</style>
