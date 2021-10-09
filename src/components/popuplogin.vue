<template>
    <div>
        <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
      <div>
    <b-form-group>
               <b-form-radio-group  v-model="selected"
        >
                 <b-container>
                   <b-row>
                     <b-col>
                       <b-form-radio  id="admr" v-model="selected" v-bind:value="1" >Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio  id="clgr" v-model="selected" v-bind:value="2" >College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="stur" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group>
  </div>
       <b-form-group id="username" label="User Name" >
          <b-form-input  v-model="logobj.username" 
         >
           </b-form-input>
       </b-form-group>
          <b-form-group id="password" label="Password" >
          <b-form-input v-model="logobj.password" type="password"
          >
           </b-form-input>
       </b-form-group>
          <div class="pt-5 ">
           <b-button   class="form-control " type="submit"  variant="outline-success" @click="login()">Submit</b-button>
          </div>
          <div class="pt-3">
          <b-button class="form-control" size="sm"   variant="outline-danger">Reset</b-button>
          </div>
  </b-modal>
    </div>
</template>
<script>
import CollegeService from '../Service/CollegeService';
import StudentService from '../Service/StudentService'
import AdminService from '../Service/AdminService'
// import VueCookies from 'vue-cookies'

export default {
  name: 'Login',
  data() {
      return {      
          selected: '1',
          logobj:{
            username:'',
            password:''
          },
          
          
      };
    },
     methods: {
     login: function(){
    if(this.selected==3)
        return new Promise((resolve, reject) => {
            StudentService.loginStudent(this.logobj)
                .then(response => {
                    alert("login successfully")
                    // VueCookies.set('name' ,this.login.username, "1h")                             
                   localStorage.setItem('name', this.logobj.username)
                   localStorage.setItem('status','Verified')
                   this.$router.push({name:'Studentlogin'});
                   this.logobj.username="",
                   this.logobj.password=""
                   resolve(response);

                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.logobj.username="",
                   this.logobj.password=""
                    reject(err);
                });
        });  
        else if(this.selected==1)
        return new Promise((resolve, reject) => {
            AdminService.loginAdmin(this.logobj)
                .then(response => {
                    alert("login successfully")
                    // VueCookies.set('name' ,this.login.username, "1h")                             
                   localStorage.setItem('name', this.logobj.username)
                   localStorage.setItem('status','Verified')
                   this.$router.push({name:'Admin'});
                   this.logobj.username="",
                   this.logobj.password=""
                   resolve(response);

                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.logobj.username="",
                   this.logobj.password=""
                    reject(err);
                });
        });           
        else if(this.selected==2)
        return new Promise((resolve, reject) => {
            CollegeService.loginCollege(this.logobj)
                .then(response => {
                    alert("login successfully")
                    // VueCookies.set('name' ,this.login.username, "1h")                             
                   localStorage.setItem('name', this.logobj.username)
                   localStorage.setItem('status','Verified')
                   this.$router.push({name:'College'});
                   this.logobj.username="",
                   this.logobj.password=""
                   resolve(response);

                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.logobj.username="",
                   this.logobj.password=""
                    reject(err);
                });
        });        
    },   
   
       
     }
     }

</script>
// loginStudent: function(){
       
//         return new Promise((resolve, reject) => {
//             StudentService.loginStudent(this.login)
//                 .then(response => {
//                     alert("login successfully")
//                     // VueCookies.set('name' ,this.login.username, "1h")                             
//                    localStorage.setItem('name', this.login.username)
//                    localStorage.setItem('status','Verified')
//                    this.$router.push({name:'Studentlogin'});
//                    this.login.username="",
//                    this.login.password=""
//                    resolve(response);

//                 })
//                 .catch(err => {
//                    alert("login failed")
//                     localStorage.setItem('status','NotVerified')
//                     this.login.username="",
//                    this.login.password=""
//                     reject(err);
//                 });
//         });        
//     },    