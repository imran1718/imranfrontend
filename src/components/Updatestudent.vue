<template>



<div >
       <b-modal id="update-1" title="Update Student" hide-footer>
         <div class="control">

            <b-form-group label="First name:" label-for="firstname">
               <b-form-input
               id="firstname"
               name="firstname"  
               v-model.trim="$v.student.firstname.$model" :class="{'is-invalid':$v.student.firstname.$error, 'is-valid':!$v.student.firstname.$invalid}" 
             
               placeholder="Enter your First name"></b-form-input>
         
            </b-form-group>
            <div class="valid-feedback">Your First name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.firstname.required">First Name is required</span>
            </div>


            <b-form-group label="Last name:" label-for="lastname">
               <b-form-input
                id="lastname"
                name="lastname"  
                v-model.trim="$v.student.lastname.$model" :class="{'is-invalid':$v.student.lastname.$error, 'is-valid':!$v.student.lastname.$invalid}"
              
                placeholder="Enter your Last name"></b-form-input>          
            </b-form-group>
            <div class="valid-feedback">Your Last name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.lastname.required">Last Name is required</span>
            </div>


            <b-form-group label="Username:" label-for="username">
               <b-form-input 
                 id="username"
                name="username"  
               v-model.trim="$v.student.username.$model" :class="{'is-invalid':$v.student.username.$error, 'is-valid':!$v.student.username.$invalid}" 
            
               placeholder="Enter your Username"></b-form-input>               
            </b-form-group>
            <div class="valid-feedback">Your User name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.username.required">User Name is required</span>
            </div>


            <b-form-group label="Password:" label-for="password">
               <b-form-input 
                 id="password"
                name="password" 
                type="password" 
               v-model.trim="$v.student.password.$model" :class="{'is-invalid':$v.student.password.$error, 'is-valid':!$v.student.password.$invalid}"             
                placeholder="Enter your Password"></b-form-input>                
            </b-form-group>
            <div class="valid-feedback">Your Password  is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.password.required">Password is required</span>
            </div>


            <b-form-group label="Mobile Number:" label-for="mobilenumber">
               <b-form-input 
               id="mobilenumber"
                name="mobilenumber"  
                type="number"
               v-model.trim="$v.student.mobilenumber.$model" :class="{'is-invalid':$v.student.mobilenumber.$error, 'is-valid':!$v.student.mobilenumber.$invalid}"               
                placeholder="Enter your Mobile Number"></b-form-input>                
            </b-form-group>
            <div class="valid-feedback">Your Mobile Number  is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.mobilenumber.required">Mobile Number is required</span>
            </div>


            <b-form-group label="E-mail:" label-for="email">
               <b-form-input 
               id="email"
                name="email"  
               v-model.trim="$v.student.email.$model" :class="{'is-invalid':$v.student.email.$error, 'is-valid':!$v.student.email.$invalid}"               
                placeholder="Enter your E-mail"></b-form-input>                 
            </b-form-group>
          <div class="valid-feedback">Your E-mail  is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.email.required">E-mail is required</span>
            </div>


            <b-form-group label="Address:" label-for="address">
               <b-form-input 
                id="address"
                name="address"  
               v-model.trim="$v.student.address.$model" :class="{'is-invalid':$v.student.address.$error, 'is-valid':!$v.student.address.$invalid}"             
                placeholder="Enter your Address"></b-form-input>               
            </b-form-group>
            <div class="valid-feedback">Your Address  is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.address.required">Address is required</span>
            </div>


            <b-form-group label="College:">
                <b-form-select class="form-control"
                 v-model.trim="$v.student.college.$model" :class="{'is-invalid':$v.student.college.$error, 'is-valid':!$v.student.college.$invalid}" 
                 :options="colleges"></b-form-select>
            </b-form-group>
            <div class="valid-feedback">Your College  is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.student.college.required">College is required</span>
            </div><br>


            <div class="text-center">
             <b-button type="submit" variant="outline-success"  @click="putStudent()">Update</b-button>
             
            </div>
         </div>
       </b-modal>
    </div>


</template>
<script>
import StudentService from '../Service/StudentService'

import { required, minLength,maxLength,numeric ,email} from "vuelidate/lib/validators";
export default {
 name: "StudentPage",
     components: {
     
       },
    data(){
        return{
             student: {
              firstname: "",
              lastname:"",
              username: "",
              password: "",
              mobilenumber: "",
              email: "",
              address:"",
              college:""
            },
             selected: null,
        colleges: [
         { value: 'NULL', text: 'Choose' },
          { value: 'KLNCIT', text: 'KLNCIT' },
          { value: 'KLNCE', text: 'KLNCE' },
          { value: 'VIT', text: 'VIT' },
         
        ]
             
        }
    },
    validations: {
        student: {
            firstname: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(25)
            },
            lastname: {
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
            mobilenumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            email:{
                required,
                email
            },
            address: {
                required,               
                minLength: minLength(5)
            },
            college:{
                 required,
            }          
        }
     },

     mounted(){
        // this.getAllStudents();
    },
    methods:{
    putStudent: function(){ 
        this.$v.$touch()
                if(this.$v.$invalid){
                    this.submitstatus = "FAIL"
                }
                else {
                    this.submitstatus = "SUCCESS"          
        return new Promise((resolve, reject) => {
            StudentService.putStudent(this.student)
                .then(response => {
                    this.student.firstname ="";
                    this.student.lastname ="";
                    this.student.username ="";
                    this.student.password ="";
                    this.student.mobilenumber ="";
                    this.student.email ="";     
                    this.student.address="";  
                    this.student.college="";  
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