<template>
  <div style="background: #f2f2f2">
    <div class="pubTit home_age_bg">
      <h5>机构资讯</h5>
      <span></span>
      <p>SCHOOL CONSULIATION</p>
    </div>
    <AgencyInfo />
  </div>
</template>

<script>
import AgencyInfo from "../components/agencyInfo/AgencyInfo";
export default {
  components: { AgencyInfo },
};
</script>

<style scoped>
.home_age_bg {
  background: #f2f2f2;
  padding-top: 25px;
}
</style>
