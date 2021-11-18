<template>
  <cswiper class="swiperDiv" :list="swiperList"></cswiper>
  <!-- <cswiper class="swiperDiv" :list="swiperList" @clickSwiper="clickSwiper"></cswiper> -->

</template>

<script>
// https://blog.csdn.net/qq_42925191/article/details/81904530
import cswiper from "../../components/swipr/cswiper";
export default {
  components: { cswiper },

  setup() {
    let swiperList = [
      {
        img_url: require("@/assets/images/1-210Z10T0132U.jpg"),
        // title: "文章标题1",
        id: "1",
      },
      {
        img_url: require("@/assets/images/1-210Z10S92Q11.jpg"),
        // title: "文章标题2",
        id: "2",
      },
      {
        img_url: require("@/assets/images/1-210Z20S406492.png"),
        // title: "文章标题3",
        id: "3",
      },
    ];

    // function clickSwiper() {

    // }
    return { swiperList };
  },
};
</script>

<style>
.wh_slide img {
  width: 100%;
}
</style>
