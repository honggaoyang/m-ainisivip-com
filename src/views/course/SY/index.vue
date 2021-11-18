<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ62459309.jpg" alt="" />
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
        title: "摄影专业精英班",
        content: "专业摄影必修课程",
        date: "3个月",
        img: "1-200R61045150-L.jpg",
        url: "/course/sy/sy_1",
      },
      {
        id: 2,
        title: "摄影专业星级班",
        content: "快速入门专业摄影师",
        date: "1个月",
        img: "1-200R61043140-L.jpg",
        url: "/course/sy/sy_2",
      },
    ]);

   let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
