<template>
  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/1-2102251JF3958.jpg" alt="" />
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
        title: "新媒体运营（短视频与直播）",
        content: "培养新媒体运营技术人才",
        date: "1个月",
        img: "1-2102251JU40-L.jpg",
        url: "/course/xmt/xmt_1",
      },
    ]);

    let isShow = useIsShowRoute();

    return { listData, isShow };
  },
};
</script>
