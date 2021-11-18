import { ref, getCurrentInstance } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
export default function() {
    let isShow = ref(true);

    const { proxy } = getCurrentInstance();
    // 在当前路由改变，但是该组件被复用时调用
    onBeforeRouteUpdate((to) => {
        console.log("userIsShow === === === === == ", to);
        isShow.value = false;


        // console.log(proxy.$root.$route.path.indexOf("_"));
        if (proxy.$root.$route.path.indexOf("_") > 0) {
            // console.log("jinlaila");
            isShow.value = true;
        }

    });


    if (proxy.$root.$route.path.indexOf("_") > 0) {
        isShow.value = false;
    }
    return isShow;

}