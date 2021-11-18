<template>
  <div class="pubBanner">
    <img src="@/assets/images/newsbanner.jpg" alt="" />
  </div>

  <div v-if="isShow">
    <!-- 新闻资讯 -->
    <div class="pubTit home_age_bg">
      <h5>新闻资讯</h5>
      <span></span>
      <p>COMPANY NEWS</p>
    </div>

    <AgencyInfo />
  </div>

  <router-view v-else></router-view>
</template>
<script>
import { getCurrentInstance, ref } from "vue";
import AgencyInfo from "../components/agencyInfo/AgencyInfo";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  components: { AgencyInfo },
  setup() {
    let isShow = ref(true);

    const { proxy } = getCurrentInstance();

    if (proxy.$root.$route.path.indexOf("art") > 0) {
      isShow.value = false;
    }

    onBeforeRouteUpdate((to) => {
      // console.log(to, form);
      if (to.fullPath.indexOf("art") > 0) {
        isShow.value = false;
      } else {
        isShow.value = true;
      }
    });
 

    return { ...proxy.$root.$route.query, isShow };
  },
};
</script>
