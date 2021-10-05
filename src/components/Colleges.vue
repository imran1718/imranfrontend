<template>
  <div>
<b-container>
      <NavBar />
      <div>
          <h1 class="text-center">Colleges</h1>
      </div>
     
  <b-table-simple hover responsive   class="table table-striped table-bordered pt-5" >
  
            <b-thead>
                <b-tr>
                    <b-th>College Id</b-th>
                    
                   <b-th>College Name</b-th>
                    <b-th>Action</b-th>
                   
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in colleges" :key="s.id">
                    <b-td>{{s.id}}</b-td>                     
                    <b-td>{{s.collegename}}</b-td>
                    <b-td>
                     <b-icon icon="eye-fill" v-b-modal.pop @click="getCollege(s.id)"  ></b-icon>&nbsp;&nbsp;
                     <b-icon icon="trash-fill" @click="deleteCollege(s.id)"></b-icon>
                    </b-td>
                </b-tr>           
                   
            </b-tbody>
         </b-table-simple>
</b-container>
<div class="pt-5">
  <Footer />
</div>
<div>
       <b-modal id="pop" title="View College" hide-footer>
           <div class="control">
               <b-table-simple >
           
                <b-tr>
                   <b-th>College Id :</b-th> 
                    <b-td>{{college.id}}</b-td>                    
                </b-tr>
                <b-tr>  
                    <b-th>College Name :</b-th> 
                    <b-td>{{college.collegename}}</b-td>               
                </b-tr>
                <b-tr>
                     <b-th>User Name :</b-th>  
                      <b-td>{{college.username}}</b-td>
                 </b-tr>
                <b-tr>
                      <b-th>College Number :</b-th> 
                     <b-td>{{college.collegenumber}}</b-td>
                 </b-tr>
                <b-tr>
                      <b-th>College Address :</b-th>
                     <b-td>{{college.collegeaddress}}</b-td>
                 </b-tr>                
                                         
              </b-table-simple>
           </div>
       </b-modal>
</div>
</div>
</template>

<script>
import CollegeService from '../Service/CollegeService'
import NavBar from "./Navbar";
import Footer from "./Footer.vue"

export default {
     name: "Colleges",
     components: {
    NavBar,
    Footer
  },
   data(){
        return{
             college: {  
              id:"",             
              collegename:"",
              username: "",             
              collegenumber: "",
              collegeaddress: ""
              },
              colleges:null,
        }
    },
    mounted(){
        this.getAllColleges();
    },
    methods:{
       getAllColleges: function(){          
            return new Promise((resolve, reject) => {
                CollegeService.getAllColleges()
                .then((response) => {                    
                    this.colleges = response.data;                   
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });       
        },
         deleteCollege: function(id){
           
            return new Promise((resolve, reject) => {
                CollegeService.deleteCollege(id)
                .then((response) => {
                    //  this.Colleges = response.data; 
                    // this.getAllColleges();                                                      
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });      
      },
       getCollege: function(id){
           
            return new Promise((resolve, reject) => {
                 CollegeService.getCollege(id)
                .then((response) => {
                  
                    this.college = response.data;                      
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });       
        },
    }
    }
</script>

<style>

</style>