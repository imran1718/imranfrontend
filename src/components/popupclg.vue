<template>
  <div>
    <!-- College Registration form start-->
    <div >
       <b-modal id="modal-3" title="College Registration" hide-footer>
         <div  class="form-control">  
                
        <b-form-group  label="Collegename" label-for="collegename">
          <b-form-input id="name"
          name="collegename"
           
          v-model.trim="$v.college.collegename.$model" :class="{'is-invalid':$v.college.collegename.$error, 'is-valid':!$v.college.collegename.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your college name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.collegename.required">College Name is required</span>
            </div>
         <!-- v-model="college.collegename" -->
         </b-form-group>
         <b-form-group label="Username" label-for="username">
          <b-form-input id="username"
          name="user"           
           v-model.trim="$v.college.username.$model" :class="{'is-invalid':$v.college.username.$error, 'is-valid':!$v.college.username.$invalid}"
         > </b-form-input>
          <div class="valid-feedback">Your User name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.username.required">User Name is required</span>
            </div>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
          type="password"
          v-model.trim="$v.college.password.$model" :class="{'is-invalid':$v.college.password.$error, 'is-valid':!$v.college.password.$invalid}"
         > </b-form-input>
         <div class="valid-feedback">Your Password is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.password.required">Password is required</span>
            </div>
         </b-form-group>
         <b-form-group label="Collegenumber" label-for="collegenumber">
          <b-form-input id="collegenumber"
          name="collegenumber"
          type="number"
          v-model.trim="$v.college.collegenumber.$model" :class="{'is-invalid':$v.college.collegenumber.$error, 'is-valid':!$v.college.collegenumber.$invalid}"

         > </b-form-input>
         <div class="valid-feedback">Your Collegenumber is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.collegenumber.required">Phone number is required</span>
            </div>
         </b-form-group>
          <b-form-group label="Collegeaddress" label-for="collegeaddress">
          <b-form-input id="collegeaddress"
          name="collegeaddress"
          v-model.trim="$v.college.collegeaddress.$model" :class="{'is-invalid':$v.college.collegeaddress.$error, 'is-valid':!$v.college.collegeaddress.$invalid}"

         > </b-form-input>
         <div class="valid-feedback">Your collegeaddress is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.collegeaddress.required">Collegeaddress is required</span>
            </div>
         </b-form-group>
        
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  variant="outline-success"  @click="putCollege()">Submit</b-button><br>

          </div>
       </div>
       </b-modal>
    </div>
    <!--College Registration form end-->
  </div>
</template>
<script>
import CollegeService from '../Service/CollegeService'

import { required, minLength,maxLength,numeric } from "vuelidate/lib/validators";

export default {
 name: "StudentPage",
     components: {
     
       },
    data(){
        return{
             college: {
              collegename: "",
              username: "",
              password: "",
              collegenumber: "",
              collegeaddress: ""
            },         
           
          }
    },
     validations: {
        college: {
            collegename: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(25)
            },
            username: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(25)
            },
            password: {
                required,
                minLength: minLength(8)
            },
            collegenumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            collegeaddress: {
                required,               
                minLength: minLength(5)
            }            
        }
     },
     
     mounted(){
        // this.getAllStudents();
    },
    methods:{
   
        putCollege: function(){   
              this.$v.$touch()
                if(this.$v.$invalid){
                    this.submitstatus = "FAIL"
                }
                else {
                    this.submitstatus = "SUCCESS"        
        return new Promise((resolve, reject) => {
            CollegeService.putCollege(this.college)
                .then(response => {
                    alert(response.data);
                    this.college.collegename ="";
                    this.college.username ="";
                    this.college.password ="";
                    this.college.collegenumber ="";
                    this.college.collegeaddress =""; 
                             
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    }        
    }   
    }
 }                
</script>