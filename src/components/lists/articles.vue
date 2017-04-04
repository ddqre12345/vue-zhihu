<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <ul>
      <li v-for="data in datas" @click="goArticleDetail(data.slug)">
          <v-card :data="data"></v-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/index';
  import vCard from '../card/articleCard.vue';

  export default
  {
    data() {
      return {
        datas: [],
        offset: 0,
        busy: false,
        articleContent: {}
      };
    },

    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        api.getRecommendActicleList(6, this.offset)
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
        this.offset += 6;
      },
      goArticleDetail(pid) {
        this.$router.push({
            path: 'article',
            query: {
              pid: pid
            }
        });
      }
    },
    components: {
      vCard
    }
  };
</script>
