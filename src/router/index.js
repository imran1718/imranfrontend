import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Aboutus from '../components/Aboutus'
import Contactus from '../components/Contactus'
import Admin from '../components/Admin'
import Viewstudent from '../components/Viewstudent'
import Colleges from '../components/Colleges'
import Approve from '../components/Approve'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/Aboutus',
        name: 'Aboutus',
        component: Aboutus
      },
      {
        path: '/Contactus',
        name: 'Contactus',
        component: Contactus
      },
      {
        path: '/Admin',
        name: 'Admin',
        component: Admin
      },
      {
        path: '/Admin/Approve',
        name: 'Approve',
        component: Approve
      },
      {
        path: '/Admin/Colleges',
        name: 'Colleges',
        component: Colleges
      },
      {
        path: '/Admin/Viewstudent',
        name: 'Viewstudent',
        component: Viewstudent
      },     
      
     
    ];

      
    
    
    const router = new VueRouter({
        mode: 'history',
        // base: process.env.BASE_URL,
        routes
      });
      
      export default router;