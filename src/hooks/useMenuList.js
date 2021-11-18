import { reactive } from 'vue'
export default function() {
    let menuList = reactive([
        { id: "001", name: "首页", path: "/home" },
        { id: "002", name: "精品课程", path: "/course" },
        { id: "003", name: "分部介绍", path: "/introduce" },
        { id: "004", name: "名师团队", path: "/teacherTeam" },
        { id: "005", name: "学员作品", path: "/studentsWork" },
        { id: "006", name: "机构资讯", path: "/agencyInfo" },
        { id: "007", name: "联系我们", path: "/contact" },
    ]);
    return menuList;
}