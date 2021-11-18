<template>
  <div class="pubBanner">
    <img src="@/assets/images/xybanner.jpg" alt="" />
  </div>

  <!-- 学员作品 -->
  <div class="pubTit home_age_bg">
    <h5>学员作品</h5>
    <span></span>
    <p>STUDENTS WORK</p>
  </div>

  <div class="stu_list_wrap">
    <img
      v-for="item in stuWordsList.slice(one, two)"
      :key="item.id"
      :src="require('@/assets/images/' + item.imgName)"
      alt=""
    />
  </div>
  <div class="stu_pageBar">
    <span @click="toPage(1)"><a href="javascript:void(0)">首页</a></span>
    <span @click="prePage"><a href="javascript:void(0)">上一页</a></span>
    <span :class="[one == 0 ? 'active' : '']" @click="toPage(1)"
      ><a href="javascript:void(0)">1</a></span
    >
    <span :class="[one == 12 ? 'active' : '']" @click="toPage(2)"
      ><a href="javascript:void(0)">2</a></span
    >
    <span :class="[one == 24 ? 'active' : '']" @click="toPage(3)"
      ><a href="javascript:void(0)">3</a></span
    >
    <span @click="nextPage"><a href="javascript:void(0)">下一页</a></span>
    <span @click="toPage(3)"><a href="javascript:void(0)">末页</a></span>
    <span
      ><a href="javascript:void(0)">共<strong>3</strong>页<strong>27</strong>条</a></span
    >
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    // 截取数据
    let sliceData = reactive({
      one: 0,
      two: 12,
    });

    // 初始化数据
    let stuWordsList = reactive([
      { id: 1, imgName: "1-2006011U21V06.jpg" },
      { id: 2, imgName: "1-2006011U141323.jpg" },
      { id: 3, imgName: "1-2006011U10O35.jpg" },
      { id: 4, imgName: "1-2006011U025J0.jpg" },
      { id: 5, imgName: "1-2006011T624M7.jpg" },
      { id: 6, imgName: "1-2006011T522355.jpg" },
      { id: 7, imgName: "1-2006011T446227.jpg" },
      { id: 8, imgName: "1-2006011T40M31.jpg" },
      { id: 9, imgName: "1-2006011T324b8.jpg" },
      { id: 10, imgName: "1-2006011T2343W.jpg" },
      { id: 11, imgName: "1-2006011T154627.jpg" },
      { id: 12, imgName: "1-2006011T1161I.jpg" },
      { id: 13, imgName: "1-2006011T035526.jpg" },
      { id: 14, imgName: "1-2006011S95L24.jpg" },
      { id: 15, imgName: "1-2006011S91LC.jpg" },
      { id: 16, imgName: "1-2006011SSO45.jpg" },
      { id: 17, imgName: "1-2006011SJcO.jpg" },
      { id: 18, imgName: "1-2006011SA14O.jpg" },
      { id: 19, imgName: "1-2006011R933256.jpg" },
      { id: 20, imgName: "1-2006011RS9B7.jpg" },
      { id: 21, imgName: "1-2006011RP3121.jpg" },
      { id: 22, imgName: "1-2006011RG0648.jpg" },
      { id: 23, imgName: "1-2006011R619425.jpg" },
      { id: 24, imgName: "1-2006011R5363O.jpg" },
      { id: 25, imgName: "1-2006011R442E3.jpg" },
      { id: 26, imgName: "1-2006011R3493c.jpg" },
      { id: 27, imgName: "1-2006011R301531.jpg" },
    ]);

    // 下一页
    function nextPage() {
      console.log(stuWordsList.length);

      if (stuWordsList.length > sliceData.two) {
        sliceData.one = sliceData.two;
        sliceData.two = sliceData.one + 12;
      }
    }
    // 上一页
    function prePage() {
      if (sliceData.one > 0) {
        sliceData.one = sliceData.one - 12;
        sliceData.two = sliceData.two - 12;
      }
    }

    // 跳转到第几页
    function toPage(page) {
      // 1,2,3
      //  sliceData.one=0  12   24
      //  sliceData.two=12   24   36
      sliceData.one = (page - 1) * 12;
      sliceData.two = page * 12;
    }

    return { stuWordsList, prePage, nextPage, toPage, ...toRefs(sliceData) };
  },
};
</script>
<style scoped>
.stu_list_wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0.3rem;
}
.stu_list_wrap img {
  width: 32.5%;
  margin-bottom: 0.3rem;
  border-radius: 10px;
}

.stu_pageBar {
  text-align: center;
  padding: 0.5rem 0;
}
.stu_pageBar .active {
  background: #000;
}
.stu_pageBar .active a {
  color: #fff;
}

.stu_pageBar span {
  display: inline-block;
  color: #000000;
  margin-right: 0.2rem;
  border: 1px solid #000000;
  border-radius: 0.18rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.2rem;
}
</style>
