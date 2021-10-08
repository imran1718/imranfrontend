import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Aboutus from '../components/Aboutus'
import Contactus from '../components/Contactus'
import Admin from '../components/Admin'
import Viewstudent from '../components/Viewstudent'
import Colleges from '../components/Colleges'
import Approve from '../components/Approve'
import College from '../components/College'
import Updatecollege from '../components/Updatecollege'
import Uploadarticle from '../components/Uploadarticle'
import FacultyManagement from '../components/FacultyManagement'
import ManageFaculty from '../components/ManageFaculty'
import SendFeedback from '../components/SendFeedback'
import Studentlogin from '../components/Studentlogin'
import Stufeedback from '../components/Stufeedback'
import SendRequestclg from '../components/SendRequestclg'
import Viewcomplaints from '../components/Viewcomplaints'



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
      {
        path: '/Admin/Viewcomplaints',
        name: 'Viewcomplaints',
        component: Viewcomplaints
      }, 
      {
        path:'/College',
        name:'Collegelogin',
        component:College
      }, 
      {
        path:'/College/Updatecollege',
        name:'Updatecollege',
        component:Updatecollege
      },   
      {
        path:'/College/Uploadarticle',
        name:'Uploadarticle',
        component:Uploadarticle
      },
      {
        path:'/College/FacultyManagement',
        name:'FacultyManagement',
        component:FacultyManagement
      },   
      {
        path:'/College/FacultyManagement/ManageFaculty',
        name:'ManageFaculty',
        component:ManageFaculty
      },
      {
        path:'/College/SendFeedback',
        name:'SendFeedback',
        component:SendFeedback
      },
      {
        path:'/Studentlogin',
        name:'Studentlogin',
        component:Studentlogin,        
        meta:{
          requiresAuth:true
        }
      }, 
      {
        path:'/Studentlogin/Stufeedback',
        name:'Stufeedback',
        component:Stufeedback,
        meta:{
          requiresAuth:true
        }
      }, 
      {
        path:'/Studentlogin/SendRequestclg',
        name:'SendRequestclg',
        component:SendRequestclg

      }
     
    ];    
    
    
    
    const router = new VueRouter({
        mode: 'history',
        // base: process.env.BASE_URL,
        routes
      });
      router.beforeEach((to,from,next)=>{
        if(to.meta.requiresAuth){
                if(localStorage.getItem('status')=='Verified')
                {
                       next();
                }
                else{
                        router.push({name:'Studentlogin'})
                }
        }
        else{
                next();
        }
})
      
      export default router;
 