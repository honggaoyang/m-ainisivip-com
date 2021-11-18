<template>
  <div class="pubBanner">
    <img src="@/assets/images/banner1.jpg" alt="" />
    <img src="@/assets/images/banner2.jpg" alt="" />
    <img src="@/assets/images/banner3.jpg" alt="" />
    <img src="@/assets/images/banner4.jpg" alt="" />
    <img src="@/assets/images/banner5.jpg" alt="" />
  </div>

  <Introduce />
</template>

<script>
import Introduce from "../introduce/Introduce";
export default {
  components: { Introduce },
};
</script>
