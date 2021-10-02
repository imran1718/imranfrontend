<template>
  <div>
    <!-- College Registration form start-->
    <div >
       <b-modal id="modal-3" title="College Registration" hide-footer>
         <div  class="form-control">  
                
        <b-form-group  label="CollegeName" label-for="collegename">
          <b-form-input id="name"
          name="collegename"
           v-model="college.collegename"
          
         > </b-form-input>
         </b-form-group>
         <b-form-group label="UserName" label-for="user">
          <b-form-input id="user"
          name="user"
           v-model="college.user"
         > </b-form-input>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
           v-model="college.password"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="CollegePhoneNumber" label-for="collegephonenumber">
          <b-form-input id="collegephonenumber"
          name="collegephonenumber"
           v-model="college.collegephonenumber"
         > </b-form-input>
         </b-form-group>
          <b-form-group label="CollegePostalAddress" label-for="collegepostaladdress">
          <b-form-input id="collegepostaladdress"
          name="collegepostaladdress"
           v-model="college.collegepostaladdress"
         > </b-form-input>
         </b-form-group>
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  variant="outline-success"  @click="putCollege()">Submit</b-button><br>
           <b-button  size="sm" id="submit"  variant="outline-danger"  @click="updatecollege()">Update</b-button><br>

          </div>
       </div>
       </b-modal>
    </div>
    <!--College Registration form end-->
  </div>
</template>
<script>
import StudentService from '../Service/StudentService'


export default {
 name: "StudentPage",
     components: {
     
       },
    data(){
        return{
             college: {
              collegeName: "",
              username: "",
              password: "",
              collegePhoneNumber: "",
              collegepPostalAddress: ""
            },
             
        }
    },
     mounted(){
        // this.getAllStudents();
    },
    methods:{
   
        putCollege: function(){           
        return new Promise((resolve, reject) => {
            StudentService.putCollege(this.college)
                .then(response => {
                    this.college.collegeName ="";
                    this.college.username ="";
                    this.college.password ="";
                    this.college.collegePhoneNumber ="";
                    this.college.collegepPostalAddress ="";
                    
                    
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