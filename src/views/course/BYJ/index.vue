<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ62615533.jpg" alt="" />
    </div>

    <div class="pubList">
      <router-link :to="item.url" v-for="item in listData" :key="item.id">
        <div class="img_box">
          <img :src="require('@/assets/images/' + item.img)" alt="" />
        </div>
        <div class="info_box">
          <h5>{{ item.title }}</h5>
          <span>{{ item.content }}</span>
          <p>{{ item.date }}</p>
        </div>
      </router-link>
    </div>
  </div>

  <router-view v-else></router-view>
</template>

<script>
import useIsShowRoute from "../../../hooks/useIsShowRoute.js";
import { reactive } from "vue";
export default {
  setup() {
    let listData = reactive([
      {
        id: 1,
        title: "韩式半永久进阶班",
        content: "毕业后轻松就业，协助创业",
        date: "1个月",
        img: "1-200R61051270-L.jpg",
        url: "/course/byj/byj_1",
      },
      {
        id: 2,
        title: "韩式半永久精英班",
        content: "掌握精湛半永久技术，轻松就业",
        date: "15天",
        img: "1-200R61050120-L.jpg",
        url: "/course/byj/byj_2",
      },
      {
        id: 3,
        title: "韩式半永久定妆术精品班",
        content: "轻松入门学完即可开店",
        date: "1周",
        img: "1-200R6104H40-L.jpg",
        url: "/course/byj/byj_3",
      },
    ]);

    let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
