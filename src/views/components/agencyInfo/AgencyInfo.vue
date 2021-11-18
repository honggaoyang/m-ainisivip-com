<template>
  <div style="background: #f2f2f2">
    <div class="home_age_box pubPad">
      <div v-for="item in agencyInfoList" :key="item.id" style="margin-bottom: 8px">
        <router-link :to="{ path: `/agencyInfo/art_1`, query: { tit: item.tit ,date:item.date,hot:item.hot,artImg:item.artImg} }">
          <img
            class="home_age_img"
            :src="require('@/assets/images/' + item.img)"
            alt=""
          />
          <div class="bg">
            <p class="home_age_tit">{{ item.tit }}</p>
            <div class="home_age_info">
              <span class="home_age_date">
                <img src="@/assets/images/29.png" alt="" />
                {{ item.date }}
              </span>
              <span class="home_age_hot">
                <img src="@/assets/images/30.png" alt="" />
                {{ item.hot }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    let agencyInfoList = reactive([
      {
        id: "001",
        tit: "慵懒高级风写真  集知性与干练为一体，重新诠释女性美",
        date: "2021-09-02",
        hot: 191860,
        img: "1-210Z2135FJ48.jpg",
        artImg:'1-210Z2135645644.jpg'
      },
      {
        id: "002",
        tit: "鲜花贴面妆  光影朦胧，请领略灵动柔美的夏日芬芳",
        date: "2021-09-02",
        hot: 190831,
        img: "1-210Z2135610S3.jpg",
        artImg:'1-210Z2135543608.jpg'
      },
      {
        id: "003",
        tit: "温柔与叛逆并存，这是冷艳绝美的超A西装风！",
        date: "2021-09-02",
        hot: 190042,
        img: "1-210Z21355102U.jpg",
        artImg:'1-210Z2135451637.jpg'
      },
      {
        id: "004",
        tit: "彭春波院长妆容大赏『黑暗中的曙光，在信仰中救赎",
        date: "2021-09-02",
        hot: 187713,
        img: "1-210Z213541G93.jpg",
        artImg:'1-210Z2135334L8.jpg'

      },
      {
        id: "005",
        tit: "欧美哥特妆 摄人心魂的魅力，源自黑暗中开出的花",
        date: "2021-09-02",
        hot: 181156,
        img: "1-210Z2135242c4.jpg",
        artImg:'1-210Z213522EG.jpg'

      },
      {
        id: "006",
        tit: "拿下朋友圈热搜，就靠这款妆容了！",
        date: "2021-09-02",
        hot: 180269,
        img: "1-210Z21352024b.jpg",
        artImg:'1-210Z2135140547.jpg'

      },
      {
        id: "007",
        tit: "冷酷御姐妆 有一种侵略性的美，存于黑白之间",
        date: "2021-09-02",
        hot: 179134,
        img: "1-210Z2135112125.jpg",
        artImg:'1-210Z21350522a.jpg'

      },
      {
        id: "008",
        tit: "花漾蝶面妆 你看了我一眼，引来蝴蝶翩跹",
        date: "2021-09-02",
        hot: 178595,
        img: "1-210Z2135025N0.jpg",
        artImg:'1-210Z213500D14.jpg'

      },
    ]);

    return { agencyInfoList };
  },
};
</script>

<style scoped>
.home_age_bg {
  background: #f2f2f2;
  padding-top: 25px;
}

.home_age_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home_age_img {
  width: 100%;
  border-radius: 6px 6px 0 0;
  vertical-align: middle;
}
.home_age_box .bg {
  background: #fff;
}
.home_age_tit {
  margin: 0 5px;
  height: 30px;
  line-height: 30px;
  color: #333333;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
.home_age_date {
  color: #999999;
  font-size: 12px;
}
.home_age_date img {
  width: 1rem;
  display: inline-block;
  padding-bottom: 2px;
  vertical-align: middle;
}
.home_age_hot {
  color: #999999;
  font-size: 12px;
}
.home_age_hot img {
  width: 1rem;
  display: inline-block;
  padding-bottom: 2px;
  vertical-align: middle;
}
.home_age_info {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}
.home_age_box > div {
  width: 49%;
}
</style>
