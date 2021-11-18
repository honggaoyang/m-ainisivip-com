<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ63331552.jpg" alt="" />
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
        title: "化妆美容美睫专业综合班",
        content: "行业高标准造型师标杆",
        date: "3个月",
        img: "1-200R6110Q80-L.jpg",
        url: "/course/zh/zh_1",
      },
      {
        id: 2,
        title: "美容美甲美睫专业综合班",
        content: "全能造型师华丽升级",
        date: "3个月",
        img: "1-200R6110G40-L.jpg",
        url: "/course/zh/zh_2",
      },
      {
        id: 3,
        title: "化妆美容半永久综合班",
        content: "高端美容师精英特训",
        date: "3个月",
        img: "1-200R61106400-L.jpg",
        url: "/course/zh/zh_3",
      },
      {
        id: 4,
        title: "美容美甲半永久专业综合",
        content: "高级形象设计师晋升之路",
        date: "3个月",
        img: "1-200R61104400-L.jpg",
        url: "/course/zh/zh_4",
      },
      {
        id: 5,
        title: "化妆美甲美容专业综合班",
        content: "晋升高级形象设计师",
        date: "3个月",
        img: "1-200R61103520-L.jpg",
        url: "/course/zh/zh_5",
      },
      {
        id: 6,
        title: "化妆美甲半永久专业综合",
        content: "复合型形象设计专业人才",
        date: "3个月",
        img: "1-200R6105R10-L.jpg",
        url: "/course/zh/zh_6",
      },
      {
        id: 7,
        title: "化妆美甲美睫专业综合班",
        content: "培养高层次复合型形象设计人员",
        date: "3个月",
        img: "1-200R61056450-L.jpg",
        url: "/course/zh/zh_7",
      },
    ]);

    let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
