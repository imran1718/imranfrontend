<template>
  <div>
      <header>
      <NavBar />
      <b-container>
        <h1>Approve Institute</h1>
    <b-table-simple hover small caption-top responsive class="pt-5">
      <b-tr>
      <b-th>Collegename</b-th>
      <b-th>Username</b-th>
      <b-th>Collegenumber</b-th>
      <b-th>Qualification</b-th>
      </b-tr>
      <b-tr>
      <b-td>{{college.collegename}}</b-td>
      <b-td>{{college.username}}</b-td>
      <b-td>{{college.collegenumber}}</b-td>
      <b-td>{{college.collegeaddress}}</b-td>    
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
  // export default {
  //      name: "Admin",
  // components: {
  //   NavBar,
  // },
  //   data() {
  //     return {
  //       items: [
  //         {
  //           college_id: '1',
  //           college_name: 'KLNCIT',
  //           college_status: 'Approved',
           
  //         },
  //         {
  //          college_id: '1',
  //           college_name: 'KLNCE',
  //           college_status: 'Approved',

  //         },
          
  //       ]
  //     }
  //   }
  // }
  
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
              }
              }
    },
    mounted(){
        this.getStudent();
    },
    methods:{
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
<style scoped>
.jumbo{
  padding: 2rem 1rem;
   
    background-color: #e9ecef;
    border-radius: .3rem;
}
</style>