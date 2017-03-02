<template>
  <div class="recommend-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="recommend-center">
      <figure v-for="data in leftData" @click="selectDetails(data.slug, data.name)">
        <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
      </figure>
    </div>
    <div class="recommend-center">
      <figure v-for="data in rightData" @click="selectDetails(data.slug, data.name)">
        <v-column :imgUrl="data.avatar.id" :data="data"></v-column>
      </figure>
    </div>
    <v-column-details ref="details" :time="time" :personalData="personalData" :title="title"></v-column-details>
  </div>
</template>

<script>
//  import { objectDate } from '../../common/js/date';
  import vColumn from '../lazyloadimg/lazyimg.vue';
  import vColumnDetails from '../columnDetails/columnDetails.vue';
  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 0,
        personalData: {},
        title: '',
        time: ''
      };
    },
    components: {
      vColumn,
      vColumnDetails
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
      selectDetails(column, name) {
        this.column = column;
        this.title = name;
        this.$store.commit('UPDATE_LOADING', true);
        this.axios.get(`/api/columns/${this.column}/posts?limit=10&offset=0`)
          .then((response) => {
            console.log(this);
            let data = response.data;
            this.personalData = data[0];
            console.log(this.personalData);
            this.$refs.details.show();
            this.$nextTick(() => {
              this.$store.commit('UPDATE_LOADING', false);
            });
          })
          .catch((response) => {
            console.log(response);
          });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "column.styl";
</style>
