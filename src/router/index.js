 import { createRouter, createWebHashHistory } from 'vue-router'

 import Home from '../views/home/Home'
 import Course from '../views/course/Course'
 import Introduce from '../views/introduce/Introduce'
 import TeacherTeam from '../views/teacherTeam/TeacherTeam'
 import StudentsWork from '../views/studentsWork/StudentsWork'
 import AgencyInfo from '../views/agencyInfo/AgencyInfo'
 import Contact from '../views/contact/Contact'
 import BYJ from '../views/course/BYJ'
 import HZ from '../views/course/HZ'
 import MF from '../views/course/MF'
 import MJ from '../views/course/MJ'
 import MR from '../views/course/MR'
 import PFGL from '../views/course/PFGL'
 import SY from '../views/course/SY'
 import XMT from '../views/course/XMT'
 import ZH from '../views/course/ZH'
 import Hz_432 from '../views/course/HZ/Hz_432'
 import Hz_434 from '../views/course/HZ/Hz_434'
 import Hz_430 from '../views/course/HZ/Hz_430'
 import Hz_431 from '../views/course/HZ/Hz_431'
 import Hz_433 from '../views/course/HZ/Hz_433'
 import Mj_438 from '../views/course/MJ/Mj_438'
 import Mj_439 from '../views/course/MJ/Mj_439'
 import Mr_1 from '../views/course/MR/Mr_1'
 import Mr_2 from '../views/course/MR/Mr_2'
 import Mr_3 from '../views/course/MR/Mr_3'
 import Mr_4 from '../views/course/MR/Mr_4'
 import Mf_1 from '../views/course/MF/Mf_1'
 import Mf_2 from '../views/course/MF/Mf_2'
 import Mf_3 from '../views/course/MF/Mf_3'
 import Zh_1 from '../views/course/ZH/Zh_1'
 import Zh_2 from '../views/course/ZH/Zh_2'
 import Zh_3 from '../views/course/ZH/Zh_3'
 import Zh_4 from '../views/course/ZH/Zh_4'
 import Zh_5 from '../views/course/ZH/Zh_5'
 import Zh_6 from '../views/course/ZH/Zh_6'
 import Zh_7 from '../views/course/ZH/Zh_7'
 import Byj_1 from '../views/course/BYJ/Byj_1'
 import Byj_2 from '../views/course/BYJ/Byj_2'
 import Byj_3 from '../views/course/BYJ/Byj_3'
 import Pfgl_1 from '../views/course/PFGL/Pfgl_1'
 import Sy_1 from '../views/course/SY/Sy_1'
 import Sy_2 from '../views/course/SY/Sy_2'
 import Xmt_1 from '../views/course/XMT/Xmt_1'
 import Article_1 from '../views/agencyInfo/Article_1'



 const routes = [{
         path: '/',
         redirect: "/home"
     },
     {
         path: '/home',
         component: Home
     },
     //  精品课程
     {
         path: '/course',
         component: Course,
         children: [{
             path: 'byj',
             component: BYJ,
             children: [{
                 path: 'byj_1',
                 component: Byj_1
             }, {
                 path: 'byj_2',
                 component: Byj_2
             }, {
                 path: 'byj_3',
                 component: Byj_3
             }]
         }, {
             path: 'hz',
             component: HZ,
             children: [{
                 path: 'hz_432',
                 component: Hz_432
             }, {
                 path: 'hz_434',
                 component: Hz_434
             }, {
                 path: 'hz_430',
                 component: Hz_430
             }, {
                 path: 'hz_431',
                 component: Hz_431
             }, {
                 path: 'hz_433',
                 component: Hz_433
             }, ]
         }, {
             path: 'mf',
             component: MF,
             children: [{
                 path: 'mf_1',
                 component: Mf_1
             }, {
                 path: 'mf_2',
                 component: Mf_2
             }, {
                 path: 'mf_3',
                 component: Mf_3
             }]
         }, {
             path: 'mj',
             component: MJ,
             children: [{
                 path: 'mj_438',
                 component: Mj_438
             }, {
                 path: 'mj_439',
                 component: Mj_439
             }]
         }, {
             path: 'mr',
             component: MR,
             children: [{
                 path: 'mr_1',
                 component: Mr_1
             }, {
                 path: 'mr_2',
                 component: Mr_2
             }, {
                 path: 'mr_3',
                 component: Mr_3
             }, {
                 path: 'mr_4',
                 component: Mr_4
             }]
         }, {
             path: 'pfgl',
             component: PFGL,
             children: [{
                 path: 'pfgl_1',
                 component: Pfgl_1
             }]
         }, {
             path: 'sy',
             component: SY,
             children: [{
                 path: 'sy_1',
                 component: Sy_1
             }, {
                 path: 'sy_2',
                 component: Sy_2
             }]
         }, {
             path: 'xmt',
             component: XMT,
             children: [{
                 path: 'xmt_1',
                 component: Xmt_1
             }]
         }, {
             path: 'zh',
             component: ZH,
             children: [{
                 path: 'zh_1',
                 component: Zh_1
             }, {
                 path: 'zh_2',
                 component: Zh_2
             }, {
                 path: 'zh_3',
                 component: Zh_3
             }, {
                 path: 'zh_4',
                 component: Zh_4
             }, {
                 path: 'zh_5',
                 component: Zh_5
             }, {
                 path: 'zh_6',
                 component: Zh_6
             }, {
                 path: 'zh_7',
                 component: Zh_7
             }, ]
         }]
     },
     //  分部介绍
     {
         path: '/introduce',
         component: Introduce
     },
     //  名师团队
     {
         path: '/teacherTeam',
         component: TeacherTeam
     },
     //  学员作品
     {
         path: '/studentsWork',
         component: StudentsWork
     },
     //  机构资讯
     {
         path: '/agencyInfo',
         component: AgencyInfo,
         children: [{
             name: '/agencyInfo/art_1',
             path: 'art_1',
             component: Article_1
         }]
     },
     //  联系我们
     {
         path: '/contact',
         component: Contact
     },
     //  {
     //      path: '/hz',
     //      component: HZ
     //  },

 ]

 const router = new createRouter({
     history: createWebHashHistory(),
     routes,

 })


 //导出路由
 export default router