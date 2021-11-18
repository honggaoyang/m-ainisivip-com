<template>
  <div class="pubBanner">
    <img src="@/assets/images/bannerteacher.jpg" alt="" />
  </div>
  <div class="tea_desc">
    <div>高层次、多元化的名师团队</div>
    <p>艾尼斯一直重视师资队伍的建设、</p>
    <p>不断优化教学队伍,吸纳人才组建专业化名师团队。</p>
  </div>
  <div class="tea_info">
    <img src="@/assets/images/founderhead.png" alt="" />
    <h3>左清松女士</h3>
    <p>艾尼斯教育董事长</p>
    <div class="blank"></div>
    <p>30年美业操盘经验</p>
    <p>中国改革开放首批美业探索者、开拓者</p>
    <p>中国著名女性民营企业家代表</p>
    <p>艾尼斯美学研究院院长</p>
  </div>

  <!-- 师资力量 -->
  <div class="pubTit home_age_bg">
    <h5>师资力量</h5>
    <span></span>
    <p>TEACHER STRENGTH</p>
  </div>

  <div class="tea_list_wrap">
    <img
      v-for="item in teacherList.slice(one, two)"
      :key="item.id"
      :src="require('@/assets/images/' + item.imgName)"
      alt=""
    />
  </div>

  <div class="tea_pageBar">
    <span @click="prePage"><a href="javascript:void(0)">首页</a></span>
    <span :class="[one == 0 ? 'active' : '']" @click="prePage"
      ><a href="javascript:void(0)">1</a></span
    >
    <span :class="[one > 0 ? 'active' : '']" @click="nextPage"
      ><a href="javascript:void(0)">2</a></span
    >
    <span @click="nextPage"><a href="javascript:void(0)">下一页</a></span>
    <span @click="nextPage"><a href="javascript:void(0)">末页</a></span>
    <span
      ><a href="javascript:void(0)">共<strong>2</strong>页<strong>11</strong>条</a></span
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
      two: 6,
    });

    // 初始化数据
    let teacherList = reactive([
      { id: 1, imgName: "1-200R910460M54.jpg" },
      { id: 2, imgName: "1-200R9104541328.jpg" },
      { id: 3, imgName: "1-200R61H4550-L.jpg" },
      { id: 4, imgName: "1-200R61H3460-L.jpg" },
      { id: 5, imgName: "1-200R61H3060-L.jpg" },
      { id: 6, imgName: "1-200R61H2170-L.jpg" },
      { id: 7, imgName: "1-200R61AQ80-L.jpg" },
      { id: 8, imgName: "1-200R61AJ90-L.jpg" },
      { id: 9, imgName: "1-200R61AG70-L.jpg" },
      { id: 10, imgName: "1-200R61A6490-L.jpg" },
      { id: 11, imgName: "1-200R61A2320-L.jpg" },
    ]);

    // 下一页
    function nextPage() {
      sliceData.one = 7;
      sliceData.two = teacherList.length;
    }
    // 上一页
    function prePage() {
      sliceData.one = 0;
      sliceData.two = 6;
    }

    return { teacherList, prePage, nextPage, ...toRefs(sliceData) };
  },
};
</script>
<style scoped>
.tea_desc {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.tea_desc div {
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid #ce9a74;
  width: 65%;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 0.25rem;
}

.tea_desc p {
  color: #515150;
  font-size: 0.8rem;
  padding-top: 1rem;
}

.tea_info {
  background: #040000;
  text-align: center;
  color: #ffffff;
  padding-bottom: 3rem;
}
.tea_info img {
  width: 12rem;
  height: auto;
  margin-top: 3rem;
}
.tea_info .blank {
  width: 25px;
  height: 2px;
  background: #dba674;
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 10px;
}
.tea_info h3 {
  font-size: 1.35rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.tea_info p {
  font-size: 0.94rem;
  margin-bottom: 0.5rem;
}
.tea_list_wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0.3rem;
}
.tea_list_wrap img {
  width: 32.5%;
  height:auto;
  margin-bottom: 0.3rem;
}

.tea_pageBar {
  text-align: center;
  padding: 0.5rem 0;
}

.tea_pageBar .active {
  background: #000;
}
.tea_pageBar .active a {
  color: #fff;
}

.tea_pageBar span {
  display: inline-block;
  color: #000000;
  margin-right: 0.2rem;
  border: 1px solid #000000;
  border-radius: 0.18rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.2rem;
}
</style>
