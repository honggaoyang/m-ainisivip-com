<template>
  <!-- <h1>Course---{{isShow}}</h1> -->


  <div v-if="isShow">
    <div class="pubBanner">
      <img src="@/assets/images/kcflbanner.jpg" alt="" />
    </div>
    <course>
      <router-link to="/course/hz"><img src="@/assets/images/5.png" alt="" /></router-link>
      <router-link to="/course/mj"><img src="@/assets/images/6.png" alt="" /></router-link>
      <router-link to="/course/mr"><img src="@/assets/images/7.png" alt="" /></router-link>
      <router-link to="/course/mf"><img src="@/assets/images/8.png" alt="" /></router-link>
      <router-link to="/course/zh"><img src="@/assets/images/9.png" alt="" /></router-link>
      <router-link to="/course/byj"><img src="@/assets/images/10.png" alt="" /></router-link>
      <router-link to="/course/pfgl"><img src="@/assets/images/11.png" alt="" /></router-link>
      <router-link to="/course/sy"><img src="@/assets/images/12.png" alt="" /></router-link>
      <router-link to="/course/xmt"><img src="@/assets/images/152.png" alt="" /></router-link>
    </course>
  </div>

 


  <router-view v-else></router-view>
</template>
<script>
import Course from "../components/course/Course";
import { ref, getCurrentInstance } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  components: { Course },

  setup() {
    let isShow = ref(true);

    const { proxy } = getCurrentInstance();
    // console.log(proxy);
    if (proxy.$root.$route.path !== "/course") {
      isShow.value = false;
    }

    // 在当前路由改变，但是该组件被复用时调用
    onBeforeRouteUpdate((to) => {
      //  console.log(":::::",to);

      if (to.path === "/course") {
        isShow.value = true;
      } else {
        isShow.value = false;
      }
    });
    // console.log("%%%%%%%%",isShow.value);
    return { isShow };
  },
};
</script>
<style scoped></style>
