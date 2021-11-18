<template>
  <div class="pubBanner">
    <img src="@/assets/images/xqbanner.jpg" alt="" />
  </div>
  <div class="int_info_box">
    <img src="@/assets/images/50icon.png" alt="" />
    <h5>全国36+所分部覆盖全国一二三线城市</h5>
    <p>是国内较具潜力的</p>
    <p>专业美妆教育大型连锁机构</p>
  </div>
  <Introduce>
    <p v-for="(item, index) in introList" :key="index">{{ item }}</p>
  </Introduce>

  <!-- 分部环境 -->
  <div class="pubTit home_age_bg">
    <h5>分部环境</h5>
    <span></span>
    <p>CAMPUS ENVIRONMENT</p>
  </div>
  <div class="int_env_img">
    <img src="@/assets/images/sjxyhj.jpg" />
  </div>

  <!-- 分部地址 -->
  <div class="pubTit home_age_bg">
    <h5>分部地址</h5>
    <span></span>
    <p>CAMPUS ADDRESS</p>
  </div>
  <div class="int_address_wrap">
    <span
      :class="[acitveId === item.id ? 'active' : '']"
      v-for="item in intAddressList"
      :key="item.id"
      @click="showSchool(item.id)"
      >{{ item.address }}</span
    >
  </div>
  <div class="school-address-list">
    <template v-for="item in intAddressList" :key="item.id">
      <div
        class="school-address-list-item"
        v-show="acitveId === i.pid"
        v-for="i in item.intr"
        :key="i.id"
      >
        <p>{{ i.name }}</p>
        <p>地址:{{ i.address }}</p>
        <p>电话:{{ i.phone }}</p>
        <p><img :src="require('@/assets/images/' + i.ewm)" alt="" /></p>
        <p>艾尼斯老师微信</p>
      </div>
    </template>
  </div>
</template>
<script>
import Introduce from "../components/introduce/Introduce";
import { reactive, ref } from "vue";
export default {
  components: { Introduce },
  setup() {
    // 分部列表
    let introList = reactive([
      "苏州相城分部",
      "苏州石路分部",
      "苏州张家港分部",
      "上海浦东分部",
      "上海嘉定分部",
      "上海静安分部",
      "上海松江分部",
      "北京朝阳分部",
      "北京海淀分部",
      "北京丰台分部",
      "南京鼓楼分部",
      "杭州江干分部",
      "杭州余杭分部",
      "杭州萧山分部",
      "杭州西湖分部",
      "广州白云分部",
      "广州天河分部",
      "深圳福田分部",
      "深圳龙岗分部",
      "温州鹿城分部",
      "无锡梁溪分部",
      "合肥蜀山分部",
      "郑州二七分部",
      "天津和平分部",
      "成都武侯分部",
      "成都锦江分部",
      "绍兴分部",
      "嘉兴分部",
      "宁波分部",
      "武汉分部",
      "扬州分部",
      "西安分部",
      "长沙分部",
      "重庆分部",
      "徐州分部",
      "常州分部",
    ]);

    // 分部地址
    let intAddressList = reactive([
      {
        id: "001",
        address: "苏州",
        intr: [
          {
            id: "001_1",
            pid: "001",
            name: "苏州相城分部（总部）",
            address: "苏州市相城区春申湖西路903号",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "001_2",
            pid: "001",
            name: "苏州石路分部",
            address: "苏州姑苏区石路步行街奥特莱斯四楼",
            // QQ: "1423460941",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "001_3",
            pid: "001",
            name: "苏州张家港分部",
            address: "苏州市张家港市杨舍镇人民东路19号国泰新天地广场Z415室",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
        ],
      },
      {
        id: "002",
        address: "杭州",
        intr: [
          {
            id: "002_1",
            pid: "002",
            name: "杭州江干分部",
            address: "杭州市江干区新塘路58号新传媒产业大厦11楼",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "002_2",
            pid: "002",
            name: "杭州余杭分部",
            address: "杭州市余杭区南苑街道玩月街101号杭州启业科创园区2号楼2层203室",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "002_3",
            pid: "002",
            name: "杭州萧山分部",
            address: "地铁2号线人民广场站附近",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "002_4",
            pid: "002",
            name: "杭州西湖分部",
            address: "浙江省杭州市西湖区申悦国际A座14楼",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
        ],
      },
      {
        id: "003",
        address: "上海",
        intr: [
          {
            id: "003_1",
            pid: "003",
            name: "上海静安分部",
            address: "上海闸北区灵石路697号聚丰商务楼右侧小路向内20米",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "003_2",
            pid: "003",
            name: "上海浦东分部",
            address: "上海市浦东新区三林恒大长青商城长青路507号(长青路东)3楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "003_3",
            pid: "003",
            name: "上海松江分部",
            address: "上海市松江新城地铁站二楼(长青路东)3楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "003_4",
            pid: "003",
            name: "上海嘉定分部",
            address: "上海市嘉定区双单路1355 号2层",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
        ],
      },
      {
        id: "004",
        address: "广州",
        intr: [
          {
            id: "004_1",
            pid: "004",
            name: "广州白云分部",
            address: "广州市白云区白云大道解放庄1号楼四楼（整层）",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "004_2",
            pid: "004",
            name: "广州天河分部",
            address: "地铁4、5号线车陂南站附近",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
        ],
      },
      {
        id: "005",
        address: "深圳",
        intr: [
          {
            id: "005_1",
            pid: "005",
            name: "深圳福田分部",
            address: "深圳市福田区新洲十一街128号祥祺投资大厦三楼",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "005_2",
            pid: "005",
            name: "深圳龙岗分部",
            address: "深圳市龙岗区深惠路龙珠商城4楼",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
        ],
      },
      {
        id: "006",
        address: "成都",
        intr: [
          {
            id: "006_1",
            pid: "006",
            name: "成都武侯分部",
            address: "四川省成都市武侯区晋阳路128号二号楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "006_2",
            pid: "006",
            name: "成都锦江分部",
            address: "成都红星路35号创意产业园1号楼6楼604",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
        ],
      },
      {
        id: "007",
        address: "全部",
        intr: [
          {
            id: "007_1",
            pid: "007",
            name: "苏州相城分部（总部）",
            address: "苏州市相城区春申湖西路903号",
            phone: "400-9699-180",
            ewm: "szxq.jpg",
          },
          {
            id: "007_2",
            pid: "007",
            name: "苏州石路分部",
            address: "苏州姑苏区石路步行街奥特莱斯四楼",
            phone: "18662291350（同微信号）",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_3",
            pid: "007",
            name: "苏州张家港分部",
            address: " 苏州市张家港市杨舍镇人民东路19号国泰新天地广场Z415室",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_4",
            pid: "007",
            name: "无锡分部",
            address: "无锡市梁溪区五爱路五爱人家2号写字楼11层",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_5",
            pid: "007",
            name: "南京分部",
            address: "南京市鼓楼区幕府东路绿地缤纷广场的4号楼的4楼",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_6",
            pid: "007",
            name: "扬州分部",
            address: "扬州市文昌中路时代广场四楼404a、404b区域",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_7",
            pid: "007",
            name: "北京海淀分部",
            address: "北京市海淀区上地七街环岛金远见大厦a座五楼",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_8",
            pid: "007",
            name: "北京朝阳分部",
            address: "北京市朝阳区东三环南路98号1幢高和蓝峰大厦11层",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_9",
            pid: "007",
            name: "北京丰台分部",
            address: "地铁9、10号线六里桥站附近",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_10",
            pid: "007",
            name: "宁波分部",
            address: "浙江省宁波市鄞州区姚隘路796号东城国际11楼1105室",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_11",
            pid: "007",
            name: "天津分部",
            address: "天津市和平区汉口西道3号翰石和谐大厦20层",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_12",
            pid: "007",
            name: "郑州分部",
            address: "郑州市二七区兴隆街8号001号楼第11层",
            phone: "400-9699-180",
            ewm: "szslxq.jpg",
          },
          {
            id: "007_13",
            pid: "007",
            name: "嘉兴分部",
            address: "嘉兴巿耀城广场附近",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_14",
            pid: "007",
            name: "绍兴分部",
            address: "绍兴巿越城区迪荡新城北辰广场1幢",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_15",
            pid: "007",
            name: "合肥分部",
            address: "安徽省合肥市蜀山区潜山路帝豪大厦16层",
            phone: "400-9699-180",
            ewm: "name_wj.jpg",
          },
          {
            id: "007_16",
            pid: "007",
            name: "杭州江干分部",
            address: "杭州市江干区新塘路58号新传媒产业大厦11楼",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_17",
            pid: "007",
            name: "杭州余杭区分部",
            address: "杭州市余杭区南苑街道玩月街101号杭州启业科创园区2号楼2层203室",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_18",
            pid: "007",
            name: "杭州萧山分部",
            address: "地铁2号线人民广场站附近",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_19",
            pid: "007",
            name: "杭州西湖分部",
            address: "浙江省杭州市西湖区申悦国际A座14楼",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_20",
            pid: "007",
            name: "温州分部",
            address: "温州市鹿城区市中心人民路温州国际大酒店6楼",
            phone: "400-9699-180",
            ewm: "name_cy.jpg",
          },
          {
            id: "007_21",
            pid: "007",
            name: "上海静安分部",
            address: "上海闸北区灵石路697号聚丰商务楼右侧小路向内20米",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_22",
            pid: "007",
            name: "上海浦东分部",
            address: "上海市浦东新区三林恒大长青商城长青路507号(长青路东)3楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_23",
            pid: "007",
            name: "上海松江分部",
            address: "上海市松江新城地铁站二楼(长青路东)3楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_24",
            pid: "007",
            name: "上海嘉定分部",
            address: "上海市嘉定区双单路1355 号2层",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_25",
            pid: "007",
            name: "广州白云分部",
            address: "广州市白云区白云大道解放庄1号楼四楼（整层）",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_26",
            pid: "007",
            name: "广州天河分部",
            address: "地铁4、5号线车陂南站附近",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_27",
            pid: "007",
            name: "深圳福田分部",
            address: "深圳市福田区新洲十一街128号祥祺投资大厦三楼",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_28",
            pid: "007",
            name: "深圳龙岗分部",
            address: "深圳市龙岗区深惠路龙珠商城4楼",
            phone: "400-9699-180",
            ewm: "name_dgx.jpg",
          },
          {
            id: "007_29",
            pid: "007",
            name: "重庆分部",
            address: "重庆市渝中区上清寺路太平洋广场B座4楼全层",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_30",
            pid: "007",
            name: "长沙分部",
            address: "湖南省长沙市芙蓉区解放西路136号蓝色地标15楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_31",
            pid: "007",
            name: "武汉分部",
            address: "武昌区中南路9号中商广场写字楼20楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_32",
            pid: "007",
            name: "成都分部",
            address: "四川省成都市武侯区晋阳路128号二号楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_33",
            pid: "007",
            name: "成都锦江分部",
            address: "成都市红星路35号6楼",
            phone: "400-9699-180",
            ewm: "name_wym.jpg",
          },
          {
            id: "007_34",
            pid: "007",
            name: "徐州分部",
            address: "淮海东路71号主楼3楼",
            phone: "400-9699-180",
            ewm: "daizong.jpg",
          },
          {
            id: "007_35",
            pid: "007",
            name: "常州分部",
            address: "天宁区延陵西路53号常州大酒店B座9层",
            phone: "400-9699-180",
            ewm: "daizong.jpg",
          },
          {
            id: "007_36",
            pid: "007",
            name: "西安分部",
            address: "碑林区南大街粉巷3号真爱粉巷里大厦1单元9楼916室",
            phone: "400-9699-180",
            ewm: "daizong.jpg",
          },
        ],
      },
    ]);

    let acitveId = ref("001");

    function showSchool(id) {
      acitveId.value = id;
    }

    return { introList, intAddressList, showSchool, acitveId };
  },
};
</script>
<style scoped>
.int_info_box {
  text-align: center;
  margin: 2rem 0;
}
.int_info_box img {
  width: 10rem;
  margin: auto;
}
.int_info_box h5 {
  font-size: 1.1rem;
  padding: 1rem 0;
}
.int_info_box p {
  color: #515150;
  font-size: 1.045rem;
}
.int_env_img img {
  width: 100%;
}
.int_address_wrap {
  padding: 0 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.int_address_wrap span {
  border: 1px solid #000;
  padding: 2px 15px;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.int_address_wrap span.active {
  color: #ffffff;
  background: #000000;
}

.school-address-list-item {
  margin: 0.25rem 0.3rem 0.45rem 0.3rem;
  background: #f2f2f2;
  padding: 0.9rem;
}
.school-address-list-item img {
  width: 120px;
}
.school-address-list-item p {
  font-size: 0.7rem;
  padding: 0.2rem 0;
}
</style>
