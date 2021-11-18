<template>
  <div class="backTop" @click="toTop">
    <span>Top</span>
    <div><img src="@/assets/images/top.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  setup() {
    function toTop() {
      // document.documentElement.scrollTop = 0;
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }

    return { toTop };
  },
};
</script>

<style scoped>
.backTop {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  background: #f23030;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.backTop img {
  width: 10px;
  height: 10px;
  margin-left: 5px;
}
</style>
