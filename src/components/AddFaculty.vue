<template>
  <div>
    <!-- Add Faculty form start-->
  
       <b-modal id="add-1" title="Add Faculty" hide-footer>
         <div  class="form-control">                 
        <b-form-group  label="Facultyname" label-for="Facultyname">
          <b-form-input id="name"
          name="facultyname"        
          v-model="faculty.facultyname"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Qualfication" label-for="qualification">
          <b-form-input id="qualification"
          name="qualification"  
         v-model="faculty.qualification"       
         > </b-form-input>
         </b-form-group>
          <b-form-group  label="Exprience" label-for="exprience">
          <b-form-input id="exprience"
          name="exprience"
          type="number"
          v-model="faculty.exprience"                 
         > </b-form-input>
         </b-form-group>
         <b-form-group label="SkillSet" label-for="skillset">
          <b-form-input id="skillset"
          name="skillset" 
          v-model="faculty.skillset"                 
         > </b-form-input>               
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  variant="outline-success"  @click="putFaculty()" >Add Faculty</b-button><br><br>
           <b-button  size="sm" id="submit"  variant="outline-danger"  >Resets</b-button><br>
          </div>
         </b-form-group>
         </div>
       </b-modal>
    </div>
    <!--Add Faculty form end-->

</template>
<script>
import FacultyService from '../Service/FacultyService'


export default {
 name: "StudentPage",
     components: {
     
       },
    data(){
        return{
             faculty: {
              facultyname: "",
              qualification: "",
              exprience: "",
              skillset: "",
              
            },
           
             
        }
    },
     
     mounted(){
        // this.getAllStudents();
    },
    methods:{
   
        putFaculty: function(){           
        return new Promise((resolve, reject) => {
            FacultyService.putFaculty(this.faculty)
                .then(response => {
                    this.faculty.facultyname ="";
                    this.faculty.qualification =""; 
                    this.faculty.exprience ="";
                    this.faculty.skillset ="";         
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