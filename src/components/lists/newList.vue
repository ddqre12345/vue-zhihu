<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <a v-for="data in datas" :href="data.url " target="view_window">
      <v-new-card :data="data" ></v-new-card>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
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
        this.axios.get(`/api/recommendations/columns?limit=16&offset=0&seed=60`)
          .then((response) => {
            console.log(response);

            this.datas = this.datas.concat(response.data);
            this.$nextTick(() => {
              this.$store.commit('UPDATE_LOADING', false);
            });
          })
          .catch((response) => {
            console.log(response);
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
