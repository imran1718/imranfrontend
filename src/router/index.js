import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Viewstudent from '../components/Viewstudent'
import Colleges from '../components/Colleges'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/Viewstudent',
        name: 'Viewstudent',
        component: Viewstudent
      },
      {
        path: '/Colleges',
        name: 'ViewCollegest',
        component: Colleges
      },
      
     
    ];

      
    
    
    const router = new VueRouter({
        mode: 'history',
        // base: process.env.BASE_URL,
        routes
      });
      
      export default router;