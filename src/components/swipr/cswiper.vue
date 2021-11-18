<template>
  <Swiper
    v-if="list.length > 0"
    :autoPlay="autoPlay"
    :showIndicator="showIndicator"
    :interval="interval"
    :duration="duration"
  >
    <Slide v-for="(item, index) in list" :key="index" @click="clickSwiper(item)">
      <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT55299052&lng=cn"><img :src="item.img_url" /></a>
      <p>{{ item.title }}</p>
    </Slide>
  </Swiper>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  props: {
    /**
     * 轮播图数据
     */
    list: Array,
    /**
     * 是否自动轮播
     */
    autoPlay: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示轮播的点
     */
    showIndicator: {
      type: Boolean,
      default: true,
    },
    /**
     * 每两次隔多久滚动一次
     */
    interval: {
      type: Number,
      default: 2500,
    },
    /**
     * 每次滚动一页需要多久
     */
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {};
  },

  components: {
    Swiper,
    Slide,
  },

  computed: {},

  mounted() {},

  methods: {
    /**
     * 轮播图点击事件
     */
    clickSwiper(data) {
      this.$emit("clickSwiper", data);
    },
  },

  watch: {},
};
</script>
<style>
.wh_show_bgcolor {
  background-color: #ffffff;
}
</style>
