<template>
  <!-- <h1>HZ/index---{{ isShow }}</h1> -->
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-200RQ61120504.jpg" alt="" />
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
        title: "时尚进阶班",
        content: "从初级到高级的蜕变",
        date: "6个月",
        img: "1-200R61010390-L.png",
        url: "/course/hz/hz_432",
      },
      {
        id: 2,
        title: "尖端大师班",
        content: "从零基础到高级化妆造型师",
        date: "1年",
        img: "1-200R61015130-L.png",
        url: "/course/hz/hz_434",
      },
      {
        id: 3,
        title: "时尚彩妆造型班",
        content: "短期入门让你轻轻松松找工作",
        date: "1个月",
        img: "1-200R60951150-L.png",
        url: "/course/hz/hz_430",
      },
      {
        id: 4,
        title: "影楼造型精英班",
        content: "三个月变成影楼精英化妆师",
        date: "3个月",
        img: "1-200R610040H94.png",
        url: "/course/hz/hz_431",
      },
      {
        id: 5,
        title: "时尚精品班",
        content: "化妆师晋级之路",
        date: "9个月",
        img: "1-200R61013460-L.png",
        url: "/course/hz/hz_433",
      },
    ]);

    let isShow = useIsShowRoute();

   

    return { listData, isShow };
  },
};
</script>
