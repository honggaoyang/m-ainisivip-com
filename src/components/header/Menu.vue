<template>
  <div class="subMenu">
    <ul>
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import useMenuList from "../../hooks/useMenuList.js";
export default {
  name: "Menu",
  setup() {
    let menuList = useMenuList();

    return { menuList };
  },
};
</script>

<style scoped>
.subMenu ul {
  height: 54px;
  display: flex;
  white-space: nowrap;
  max-width: 512px;
  background: #fff;
  align-items: center;
  overflow-x: scroll;
}

.subMenu .active a {
  color: #ffffff;
}

.subMenu ul li {
  color: #333333;
  font-size: 14px;
  margin-left: 5px;
}
.subMenu ul li a {
  padding: 5px 15px;
  display: block;
}
.router-link-active {
  background: #dba673;
  border-radius: 50px;
  color: #fff;
}
</style>
