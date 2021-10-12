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
import Student from '../components/Student'
import Stufeedback from '../components/Stufeedback'
import SendRequestclg from '../components/SendRequestclg'
import Viewcomplaints from '../components/Viewcomplaints'
import Downloadarticle from '../components/Downloadarticle'
import Viewrequest from '../components/Viewrequest'
import Viewrequestclg from '../components/Viewrequestclg'
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
        component: Admin,
        meta:{
          requiresAuth:true,
          role : 'Admin'        
        }        
      },
      {
        path: '/Admin/Approve',
        name: 'Approve',
        component: Approve,
        meta:{
          requiresAuth:true,
          role : 'Admin'
        }
      },
      {
        path: '/Admin/Colleges',
        name: 'Colleges',
        component: Colleges,
        meta:{
          requiresAuth:true,
          role : 'Admin'
        }
      },
      {
        path: '/Admin/Viewstudent',
        name: 'Viewstudent',
        component: Viewstudent,
        role : 'Admin'
        
      }, 
      {
        path: '/Admin/Viewcomplaints',
        name: 'Viewcomplaints',
        component: Viewcomplaints,
        meta:{
          requiresAuth:true,
          role : 'Admin'
        }
      }, 
      {
        path:'/College',
        name:'College',
        component:College,
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      }, 
      {
        path:'/College/Updatecollege',
        name:'Updatecollege',
        component:Updatecollege,
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      },   
      {
        path:'/College/Uploadarticle',
        name:'Uploadarticle',
        component:Uploadarticle,
        meta:{
          requiresAuth:true,
          role : 'College'
        }                                                                                                                                          
      },
      {
        path:'/College/Viewrequestclg',
        name:'Viewrequestclg',
        component:Viewrequestclg,
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      },
      {
        path:'/College/FacultyManagement',
        name:'FacultyManagement',
        component:FacultyManagement,
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      },   
      {
        path:'/College/FacultyManagement/ManageFaculty',
        name:'ManageFaculty',
        component:ManageFaculty,
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      },
      {
        path:'/College/SendFeedback',
        name:'SendFeedback',
        component:SendFeedback,                
        meta:{
          requiresAuth:true,
          role : 'College'
        }
      },
      {
        path:'/Student',
        name:'Student',
        component:Student,        
        meta:{
          requiresAuth:true,
          role : 'Student'
        }
      }, 
      {
        path:'/Student/Downloadarticle',
        name:'Downloadarticle',
        component:Downloadarticle,        
        meta:{
          requiresAuth:true,
          role : 'Student'
        }
      }, 
      {
        path:'/Student/Stufeedback',
        name:'Stufeedback',
        component:Stufeedback,
        meta:{
          requiresAuth:true,
          role : 'Student'
        }
      }, 
      {
        path:'/Student/SendRequestclg',
        name:'SendRequestclg',
        component:SendRequestclg,
        meta:{
          requiresAuth:true,
          role : 'Student'
        }
      },
      {
      path:'/Student/Viewrequest',
      name:'Viewrequest',
      component:Viewrequest,
      meta:{
        requiresAuth:true,
        role : 'Student'
      
      }
    }
     
    ];    
    
    
    
    const router = new VueRouter({
        mode: 'history',
        // base: process.env.BASE_URL,
        routes
      });
      router.beforeEach((to,from,next)=>{
        if((to.meta.requiresAuth) && (to.meta.role ==='Admin')){
                if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='Admin')
               
                {
                       next();
                }
                else{
                        router.push({name:'Admin'})
                }
              }
               else if((to.meta.requiresAuth) && (to.meta.role ==='Student')){
                  if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='Student')
                 
                  {
                         next();
                  }
                  else{
                          router.push({name:'Student'})
                  }
                }
                  else if((to.meta.requiresAuth) && (to.meta.role ==='College')){
                    if(localStorage.getItem('status')=='Verified' && localStorage.getItem('role')=='College')
                   
                    {
                           next();
                    }
                    else{
                            router.push({name:'College'})
                    }
        }
        else{
                next();
        }
})

      
      export default router;
 