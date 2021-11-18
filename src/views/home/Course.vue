<template>
  <course> 
    <router-link to="/course/hz"><img src="@/assets/images/5.png" alt="" /></router-link>
    <router-link to="/course/mj"><img src="@/assets/images/6.png" alt="" /></router-link>
    <router-link to="/course/mr"><img src="@/assets/images/7.png" alt="" /></router-link>
    <router-link to="/course/mf"><img src="@/assets/images/8.png" alt="" /></router-link>
    <router-link to="/course/zh"><img src="@/assets/images/9.png" alt="" /></router-link>
    <router-link to="/course/byj"><img src="@/assets/images/10.png" alt="" /></router-link>
    <router-link to="/course/pfgl"><img src="@/assets/images/11.png" alt="" /></router-link>
    <router-link to="/course/sy"><img src="@/assets/images/12.png" alt="" /></router-link>
  </course>
</template>

<script>
import Course from "../components/course/Course";

export default {
  components: { Course },
};
</script>
