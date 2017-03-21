<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <ul>
      <li v-for="data in datas">
        <v-card :data="data"></v-card>
      </li>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import api from '../../api/index';
  import vCard from '../newCard/newCard.vue';
  export default
  {
    name: 'v-article-list',
    props: {
      type: {
        type: String
      }
    },
    data() {
      return {
        datas: [],
        page: 0,
        busy: false
      };
    },
    computed: {

    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        api.getColumnList(this.$route.params.id, 6, this.page)
            .then((response) => {
              this.datas = this.datas.concat(response.data);
              this.busy = false;
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
        this.page += 6;
      }
    },
    components: {
      vCard
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
