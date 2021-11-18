<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ6150A17.jpg" alt="" />
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
        title: "美发高研班",
        content: "高端美发造型师之路",
        date: "7个月",
        img: "1-200R61020490-L.jpg",
        url: "/course/mf/mf_1",
      },
      {
        id: 2,
        title: "时尚美发进阶班",
        content: "从初级到高级的升级之路",
        date: "5个月",
        img: "1-200R61020180-L.jpg",
        url: "/course/mf/mf_2",
      },
      {
        id: 3,
        title: "时尚发型精剪班",
        content: "三个月变身精英发型设计师",
        date: "3个月",
        img: "1-200R6101R60-L.jpg",
        url: "/course/mf/mf_3",
      },
    ]);

     let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
