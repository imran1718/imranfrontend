<template>
  <div>
    <!-- College Registration form start-->
    <div >
       <b-modal id="modal-3" title="College Registration" hide-footer>
         <div  class="form-control">  
                
        <b-form-group  label="Collegename" label-for="collegename">
          <b-form-input id="name"
          name="collegename"
           v-model="college.collegename"
          
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Username" label-for="username">
          <b-form-input id="username"
          name="user"
           v-model="college.username"
         > </b-form-input>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
           v-model="college.password"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Collegenumber" label-for="collegenumber">
          <b-form-input id="collegenumber"
          name="collegenumber"
           v-model="college.collegenumber"
         > </b-form-input>
         </b-form-group>
          <b-form-group label="Collegeaddress" label-for="collegeaddress">
          <b-form-input id="collegeaddress"
          name="collegeaddress"
           v-model="college.collegeaddress"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="College:">
                <b-form-select class="form-control" v-model="selected" :options="colleges"></b-form-select>
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
              collegename: "",
              username: "",
              password: "",
              collegenumber: "",
              collegeaddress: ""
            },
            selected: null,
        options: [
         
          { value: 'a', text: 'KLNCIT' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
         
        ]
             
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
    },          
    }   
 }                
</script>