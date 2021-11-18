<template>
  <div class="pubTit">
    <h5>分部介绍</h5>
    <span></span>
    <p>CAMPUS MAP</p>
  </div>

  <Introduce>
    <p v-for="(item, index) in introList" :key="index">{{ item }}</p>
  </Introduce>
  <div class="pubBtn"> 
    <router-link to="/introduce">更多分部</router-link>
  </div>
</template>

<script>
import Introduce from "../components/introduce/Introduce";
import { reactive } from "vue";
export default {
  components: { Introduce },
  setup() {
    let introList = reactive([
      "苏州相城分部",
      "苏州石路分部",
      "苏州张家港分部",
      "无锡分部",
      "上海浦东分部",
      "上海嘉定分部",
      "上海静安分部",
      "上海松江分部",
      "北京朝阳分部",
      "北京海淀分部",
      "北京丰台分部",
      "南京鼓楼分部",
    ]);

    return { introList };
  },
};
</script>
