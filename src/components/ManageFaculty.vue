<template>
  <div>
      <NavBar />
    <b-container>
       <div class="  d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button href="/College/FacultyManagement" pill variant="primary" @click="back()">
          <b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>
  <b-table-simple hover responsive   class="pt-3 table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                    <b-th>Faculty Name</b-th>
                    <b-th>Qualification</b-th>
                     <b-th>Exprience</b-th>             
                    <b-th>Skillset</b-th>  
                    <b-th>Action</b-th>                
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in facultys" :key="s.id">
                    <b-td>{{s.facultyname}}</b-td>
                     <b-td>{{s.qualification}}</b-td>
                    <b-td>{{s.exprience}}</b-td>                   
                    <b-td>{{s.skillset}}</b-td>
                    <b-td><b-icon icon="trash-fill" @click="deleteFaculty(s.id)" /></b-td>
                </b-tr>           
                   
            </b-tbody>
         </b-table-simple>
</b-container>
    <div class="mt-5 pt-5" fixed="bottom">
        <Footer />
    </div>
  </div>

</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer.vue"
import FacultyService from "../Service/FacultyService"
export default {
     name: "Viewstudent",
     components: {
    NavBar,
    Footer
  },
   data(){
        return{
             faculty: {
              facultyname: "",
              qualification: "",
              exprience: "",
              skillset: "",
              
            },
              facultys:null,
        }
    },
    mounted(){
        this.getAllFacultys();
    },
    methods:{
         back:function(){
      localStorage.setItem('status','Verified')
    } ,
       getAllFacultys: function(){          
            return new Promise((resolve, reject) => {
                FacultyService.getAllFacultys()
                .then((response) => {                    
                    this.facultys = response.data;                   
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });       
        },
         deleteFaculty: function(id){
           
            return new Promise((resolve, reject) => {
                FacultyService.deleteFaculty(id)
                .then((response) => {
                     this.facultys = response.data; 
                    this.getAllFacultys();                                                      
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });      
      },
    }
    }
</script>