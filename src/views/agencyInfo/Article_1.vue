<template>
  <div class="age_article_info">
    <h5>{{tit}}</h5>
    <p>时间:{{date}} 点击:{{hot}}次</p>
    <img :src="require('@/assets/images/' + artImg)" alt="" />
  </div>
</template>
<script>
import {getCurrentInstance} from 'vue'
export default {
  setup() {
    const { proxy } = getCurrentInstance(); 

    return {...proxy.$root.$route.query}
  },
};
</script>
<style scoped>
.age_article_info {
  text-align: center;
  padding: 0.8rem;
}
.age_article_info h5 {
  font-size: 1rem;
  text-align: center;
  padding: 0.8rem;
}

.age_article_info p {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

.age_article_info img {
  width: 100%;
}
</style>
