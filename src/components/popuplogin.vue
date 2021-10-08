<template>
    <div>
        <b-modal id="modal-1" title="LOGIN" ref="modal" hide-footer>
      <!-- <div>
    <b-form-group>
               <b-form-radio-group  v-model="selected"
        >
                 <b-container>
                   <b-row>
                     <b-col>
                       <b-form-radio  id="admr" v-model="selected" v-bind:value="1" >Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio  id="clgr" v-model="selected" v-bind:value="2" >Student</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="stur" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group>
  </div> -->
       <b-form-group id="username" label="User Name" >
          <b-form-input  v-model="sl.username" 
         >
           </b-form-input>
       </b-form-group>
          <b-form-group id="password" label="Password" >
          <b-form-input v-model="sl.password" type="password"
          >
           </b-form-input>
       </b-form-group>
          <div class="pt-5 ">
           <b-button   class="form-control " type="submit"  variant="outline-success" @click="loginStudent()">Submit</b-button>
          </div>
          <div class="pt-3">
          <b-button class="form-control" size="sm"   variant="outline-danger">Reset</b-button>
          </div>
  </b-modal>
    </div>
</template>
<script>
import StudentService from '../Service/StudentService'
// import VueCookies from 'vue-cookies'

export default {
  name: 'Login',
  data() {
      return {
         
          sl:{
            username:'',
            password:''
          },
      };
    },
     methods: {
     loginStudent: function(){
        return new Promise((resolve, reject) => {
            StudentService.loginStudent(this.sl)
                .then(response => {
                    alert("login successfully")
                    // VueCookies.set('name' ,this.sl.username, "1h")                             
                   localStorage.setItem('name', this.sl.username)
                   localStorage.setItem('status','Verified')
                   this.$router.push({name:'Studentlogin'});
                   this.sl.username="",
                   this.sl.password=""
                   resolve(response);

                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.sl.username="",
                   this.sl.password=""
                    reject(err);
                });
        });        
    },    
       
     }
     }

</script>