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
import axios from 'axios';
export default {
  name: 'Login',
  data() {
      return {
          // selected: '1',
          sl:{
            username:'',
            password:''
          },
      };
    },
     methods: {
     loginStudent: function(){
        var axis = axios.create({
            baseURL: "http://localhost:8080",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            axis
                .post("/student/login",this.sl, config)
                .then(response => {
                  alert("login successfully")
                 
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    reject(err);
                });
        }); 
     }
     }
}
</script>