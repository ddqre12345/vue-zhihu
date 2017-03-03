<template>
  <div class="recommend-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="recommend-center">
      <figure v-for="data in leftData" @click="updateHeader(data.name)">
        <router-link :to="{ name: 'column', params: { id: data.slug }}">
          <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
        </router-link>
      </figure>
    </div>
    <div class="recommend-center">
      <figure v-for="data in rightData" @click="updateHeader(data.name)">
        <router-link :to="{ name: 'column', params: { id: data.slug }}">
          <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
        </router-link>
      </figure>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
//  import { objectDate } from '../../common/js/date';
  import vColumn from '../lazyloadimg/lazyimg.vue';
  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 0,
        title: '',
        time: ''
      };
    },
    components: {
      vColumn
    },
    created() {
    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        this.axios.get(`/api/recommendations/columns?limit=6&offset=${this.page}`)
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
      updateHeader(title) {
        console.log(title);
        this.$store.commit('UPDATE_COLUMNTITLE', title);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "column.styl";
</style>
