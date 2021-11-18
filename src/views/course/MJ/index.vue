<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ61FcU.jpg" alt="" />
    </div>

    <div class="pubList">
      <router-link :to="item.url"  v-for="item in listData" :key="item.id">
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
        title: "美甲综合班",
        content: "培养高阶精英美甲师",
        date: "3个月",
        img: "1-200R6102F90-L.jpg",
        url: "/course/mj/mj_439",
      },
      {
        id: 2,
        title: "时尚美甲进阶班",
        content: "强化训练让学生熟练掌握前沿美甲技术",
        date: "1个月",
        img: "1-200R61024380-L.jpg",
        url: "/course/mj/mj_438",
      },
    ]);

    let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
