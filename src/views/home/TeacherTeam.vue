<template>
  <div class="pubTit">
    <h5>名师团队</h5>
    <span></span>
    <p>TEACHER TEAM</p>
  </div>
  <div class="home_tea_box pubPad">
    <a href="javascript:void(0)" v-for="(item, index) in teacherList" :key="index">
      <img :src="require('@/assets/images/' + item.imgName)" alt=""
    /></a>
  </div>

  <div class="pubBtn">
    <router-link to="/teacherTeam">更多老师</router-link>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    // 初始化数据
    let teacherList = reactive([
      { id: 1, imgName: "14.png" },
      { id: 2, imgName: "15.png" },
      { id: 3, imgName: "teacher_lyj.png" },
      { id: 4, imgName: "laoshi_tangcuiping.jpg" },
      { id: 5, imgName: "laoshi_changdan.jpg" },
      { id: 6, imgName: "19.png" },
    ]);

    return { teacherList };
  },
};
</script>

<style scoped>
.home_tea_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home_tea_box a {
  width: 49.5%;
}

.home_tea_box a img {
  width: 100%;
}
</style>
