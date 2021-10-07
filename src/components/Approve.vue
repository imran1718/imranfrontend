<template>
  <div>
      <header>
      <NavBar />
      <b-container>
        <h1>Approve Institute</h1>
    <b-table-simple hover responsive   class="table table-striped table-bordered pt-5">
      <b-tr>
      <b-th>Collegename</b-th>
      <b-th>Username</b-th>
      <b-th>Collegenumber</b-th>
      <b-th>Qualification</b-th>
      </b-tr>
      <b-tr v-for="s in colleges" :key="s.id">
      <b-td>{{s.collegename}}</b-td>
      <b-td>{{s.username}}</b-td>
      <b-td>{{s.collegenumber}}</b-td>
      <b-td>{{s.collegeaddress}}</b-td>    
      </b-tr>
    </b-table-simple>
      </b-container>
      </header>                      
           <div class="pt-5">
              <Footer />
          </div>
           
                  
                  
  
     
         
 
  </div>
</template>

<script>
import CollegeService from '../Service/CollegeService'

import NavBar from "./Navbar";
import Footer from "./Footer.vue"
  
export default {
    name: "Approve",
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
        }
    }

</script>
<style scoped>

</style>