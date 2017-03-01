<template>
  <div class="recommend-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="recommend-center">
      <figure v-for="data in leftData" @click="selectDetails(data.url)">
        <v-img :imgUrl="data.avatar.id" :data="data"></v-img>
      </figure>
    </div>
    <div class="recommend-center">
      <figure v-for="data in rightData" @click="selectDetails(data.url)">
        <v-img :imgUrl="data.avatar.id" :data="data"></v-img>
      </figure>
    </div>
    <v-details ref="details" :time="time" :detailsData="detailsData"></v-details>
  </div>
</template>

<script>
  import { objectDate } from '../../common/js/date';
  import vImg from '../lazyloadimg/lazyimg.vue';
  import vDetails from '../details/details.vue';
  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 0,
        detailsData: {},
        time: ''
      };
    },
    components: {
      vImg,
      vDetails
    },
    created() {
    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        this.axios.get(`https://zhuanlan.zhihu.com/api/recommendations/columns?limit=6&offset=${this.page}`)
          .then((response) => {
            console.log(response);
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
      selectDetails(time) {
        this.time = time;
          this.$store.commit('UPDATE_LOADING', true);
        let object = objectDate(this.time);
        this.axios.get(`http://gank.io/api/history/content/day/${object.Y}/${object.M}/${object.D}`)
          .then((response) => {
            console.log(response);
            let data = response.data.results;
            this.detailsData = data[0];
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
  @import "recommend.styl";
</style>
