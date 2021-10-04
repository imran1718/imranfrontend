<template>

<!-- Student REGISTARTION FORM START -->

<div >
       <b-modal id="modal-2" title="Student Registration" hide-footer>
         <div class="control">
            <b-form-group label="First name:" label-for="firstname">
               <b-form-input
               id="firstname"
               name="firstname"  
               v-model="student.firstname" 
             
               placeholder="Enter your First name"></b-form-input>
         
            </b-form-group><br>
            <b-form-group label="Last name:" label-for="lastname">
               <b-form-input
                id="lastname"
                name="lastname"  
                v-model="student.lastname"
              
                placeholder="Enter your Last name"></b-form-input>
          
            </b-form-group><br>
            <b-form-group label="Username:" label-for="username">
               <b-form-input 
                 id="username"
                name="username"  
               v-model="student.username" 
            
               placeholder="Enter your Username"></b-form-input>
               
            </b-form-group><br>
            <b-form-group label="Password:" label-for="password">
               <b-form-input 
                 id="password"
                name="password" 
                type="password" 
               v-model="student.password"
               
                placeholder="Enter your Password"></b-form-input>
                
            </b-form-group><br>
            <b-form-group label="Mobile Number:" label-for="mobilenumber">
               <b-form-input 
               id="mobilenumber"
                name="mobilenumber"  
                type="number"
               v-model="student.mobilenumber" 
              
                placeholder="Enter your Mobile Number"></b-form-input>
                
            </b-form-group><br>
            <b-form-group label="E-mail:" label-for="email">
               <b-form-input 
               id="email"
                name="email"  
               v-model="student.email" 
              
                placeholder="Enter your E-mail"></b-form-input>
                 
            </b-form-group><br>
            <b-form-group label="Address:" label-for="address">
               <b-form-input 
                id="address"
                name="address"  
               v-model="student.address"
             
                placeholder="Enter your Address"></b-form-input>
               
            </b-form-group><br>
            <b-form-group label="student:">
                <b-form-select class="form-control" v-model="student.college" :options="colleges"></b-form-select>
            </b-form-group><br>
            <div class="text-center">
             <b-button type="submit" variant="outline-success"  @click="putStudent()">Submit</b-button>
              <b-button variant="outline-danger" @click="resetForm()" class="mx-3">Reset</b-button>
            </div>
         </div>
       </b-modal>
    </div>
      <!-- Student REGISTARTION FORM END       -->

</template>
<script>
import StudentService from '../Service/StudentService'


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
     mounted(){
        // this.getAllStudents();
    },
    methods:{
    putStudent: function(){           
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
    },    
    }   
 }                
</script>