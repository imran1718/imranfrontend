<template>
<div>
<b-container>
      <NavBar />
  <b-table-simple hover responsive   class="table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                    <b-th>Student Name</b-th>
                    <b-th>Mobile</b-th>
                     <b-th>Email-id</b-th>             
                    <b-th>Address</b-th>
                   <b-th>College</b-th>
                   
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in students" :key="s.id">
                    <b-td>{{s.firstname+s.lastname}}</b-td>
                     <b-td>{{s.mobilenumber}}</b-td>
                    <b-td>{{s.email}}</b-td>
                    <b-td>{{s.address}}</b-td>
                    <b-td>{{s.college}}</b-td>
                </b-tr>           
                   
            </b-tbody>
         </b-table-simple>
</b-container>
</div>
</template>

<script>
import StudentService from '../Service/StudentService'
import NavBar from "./Navbar";
export default {
     name: "Viewstudent",
     components: {
    NavBar,
  },
   data(){
        return{
             student: {  
              firstname: "",
              lastname:"",               
              mobilenumber: "",
              email: "",
              address:"",
              college:""
              },
              students:null,
        }
    },
    mounted(){
        this.getAllStudents();
    },
    methods:{
       getAllStudents: function(){          
            return new Promise((resolve, reject) => {
                StudentService.getAllStudents()
                .then((response) => {                    
                    this.students = response.data;                   
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });       
        },
    }
    }
</script>