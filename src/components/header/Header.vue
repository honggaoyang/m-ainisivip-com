<template>
  <div class="navBar" :class="{ open: isOpenMenu }">
    <!-- 按钮 -->
    <div class="burger" @click="isOpenMenu = !isOpenMenu">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>

    <!-- 菜单 -->
    <div class="menu" v-if="isOpenMenu">
      <ul>
        <li v-for="item in menuList" :key="item.id" @click="isOpenMenu = !isOpenMenu">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>

    <!-- logo -->
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="" />
    </div>

    <!-- 电话 -->
    <div class="phone">
      <a href="tel://400-9699-180">
        <img src="../../assets/images/top_tel@2x.png" alt="" />
      </a>
    </div>
  </div>
  <Menu />
</template>

<script>
import useMenuList from "../../hooks/useMenuList.js";
import Menu from "./Menu";
import { ref } from "vue";
export default {
  name: "Header",
  components: { Menu },
  setup() {
    let isOpenMenu = ref(false);
    let menuList = useMenuList();
    return { isOpenMenu, menuList };
  },
};
</script>

<style scoped>
.navBar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 512px;
  top: 0;
  height: 54px;
  z-index: 99;
  background-image: url(../../assets/images/topbg.png);
  background-color: #151515;
  background-size: cover;
  align-items: center;
  position: fixed;
}

.burger {
  margin-left: 10px;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.burger-line1,
.burger-line2,
.burger-line3 {
  width: 20px;
  height: 3px;
  background-color: #fff;
  transition: 0.4s ease;
}
.burger-line2,
.burger-line3 {
  margin-top: 5px;
}
.navBar.open .burger-line1,
.navBar.open .burger-line2,
.navBar.open .burger-line3 {
  transition: 0.4s ease;
}
.navBar.open .burger-line2 {
  transform: translateX(5px);
  opacity: 0;
}
.navBar.open .burger-line1 {
  transform: rotate(45deg) translate(6.5px, 6px);
}
.navBar.open .burger-line3 {
  transform: rotate(-45deg) translate(5px, -4.5px);
}

.phone {
  margin-right: 10px;
}

.phone img {
  height: 25px;
}

/* 菜单 */
.menu {
  background-color: #2b2b2b;
  transition: all 0.5s;
  width: 60%;
  position: absolute;
  top: 54px;
  left: -60%;
  /* animation: slideUp 0.5s ease-out 0s 1 normal forwards; */
}

.navBar.open .menu {
  animation: slideDown 0.5s ease-out 0s 1 normal forwards;
}
@keyframes slideDown {
  from {
    left: -60%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    left: 0;
    opacity: 1;
  }
  to {
    left: -60%;
    opacity: 0;
  }
}

.menu li {
  padding: 0 10px;
  background: url(../../assets/images/jt.png) right 10px center no-repeat;
  border-bottom: 1px solid #343434;
  height: 60px;
  line-height: 60px;
  margin: 3px;
}
.menu a {
  color: #fff;
  display: block;
  font-size: 18px;
  padding-left: 5px;
}
</style>
