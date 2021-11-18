<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ61SED.jpg" alt="" />
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
import { reactive } from "vue";
import useIsShowRoute from "../../../hooks/useIsShowRoute.js";
export default {
  setup() {
    let listData = reactive([
      {
        id: 1,
        title: "美容高研班",
        content: "注重提高学生综合能力",
        date: "9个月",
        img: "1-200R6103A70-L.jpg",
        url: "/course/mr/mr_1",
      },
      {
        id: 2,
        title: "时尚美容精英班",
        content: "从入门到精通的蜕变之旅",
        date: "6个月",
        img: "1-200R61034500-L.jpg",
        url: "/course/mr/mr_2",
      },
      {
        id: 3,
        title: "时尚美容精品班",
        content: "轻松学习就业不用愁",
        date: "3个月",
        img: "1-200R61032380-L.jpg",
        url: "/course/mr/mr_3",
      },
      {
        id: 4,
        title: "时尚美容进阶班",
        content: "注重提高学生专业知识和实操能力",
        date: "1个月",
        img: "1-200R61031240-L.jpg",
        url: "/course/mr/mr_4",
      },
    ]);

    let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
