<template>
  <Banner />
  <Course />
  <TeacherTeam />
  <Introduce />
  <div class="home_adv">
    <img src="@/assets/images/36.png" alt="" />
  </div>
  <StudentWorks />
  <AgencyInfo />
  <BackTop />
</template>

<script>
import Banner from "./Banner";
import Course from "./Course";
import TeacherTeam from "./TeacherTeam";
import Introduce from "./Introduce";
import StudentWorks from "./StudentWorks";
import AgencyInfo from "./AgencyInfo";
import BackTop from "@/components/backTop/BackTop";
export default {
  components: {
    Banner,
    Course,
    TeacherTeam,
    Introduce,
    StudentWorks,
    AgencyInfo,
    BackTop,
  },
};
</script>

<style scoped>
.home_adv {
  margin-top: 25px;
}
.home_adv img {
  width: 100%;
}
</style>
