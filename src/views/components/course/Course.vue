<template>
  <div class="pubTit">
    <h5>精品课程</h5>
    <span></span>
    <p>PREMIUM COURSES</p>
  </div>
  <div class="home_cou_box pubPad">
    <slot></slot>
  </div>
</template>

<script>
export default {
//   setup(props, context) {
//     console.info(context.slots.default);
//   },
};
</script>

<style>
.home_cou_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home_cou_box a {
  width: 49.5%;
}
/* .home_cou_box a:nth-child(odd){
    margin-right: 0.5rem;
} */

.home_cou_box a img {
  width: 100%;
}
</style>
