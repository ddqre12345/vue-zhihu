<template>
  <div class="recommend-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <div class="recommend-center">
      <figure v-for="data in leftData" @click="goColumnDetail(data.slug)">
          <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
      </figure>
    </div>
    <div class="recommend-center">
      <figure v-for="data in rightData" @click="goColumnDetail(data.slug)">
          <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
      </figure>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index';
  import vColumn from '../content/columnContent.vue';

  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 0
      };
    },
    components: {
      vColumn
    },
    methods: {
      loadTop() {
          this.$store.commit('UPDATE_LOADING', true);
          api.getRecommendationsColumns(6, this.page)
            .then((response) => {
                let left = response.data.filter((data, i) => {
                    return (i + 1) % 2 === 1;
                });
                let right = response.data.filter((data, i) => {
                    return (i + 1) % 2 !== 1;
                });
                this.leftData = this.leftData.concat(left);
                this.rightData = this.rightData.concat(right);
                this.busy = false;
                // $nextTick() 在dom 重新渲染完后执行
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
        this.page = this.page + 6;
      },
      goColumnDetail(id) {
        this.$router.push({
            path: 'column',
            query: {
              id: id
            }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "columns.styl";
</style>
