<template>
  <div>
      <NavBar />
<b-container>    
     <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button pill variant="primary" href="/College" @click="back()"><b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>  
    <h3>View Request</h3>
  <b-table-simple hover responsive   class="table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                    <b-th> Name</b-th>                             
                    <b-th>College</b-th>
                    <b-th>Request For</b-th>                  
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in requests" :key="s.id">
                   <b-th>{{s.name}}</b-th>                   
                    <b-td>{{s.college}}</b-td>
                     <b-td>{{s.request}}</b-td>
                    
                </b-tr>           
                   
            </b-tbody>
         </b-table-simple>         
</b-container>
  <div>
      <Footer />
  </div>
  </div>
</template>

<script>
import NavBar from "./Navbar";
import Footer from "./Footer.vue"
import RequestService from "../Service/RequestService"

export default {
    name:'SendFeedback',
    components:{
        NavBar,
        Footer,
        
    },
    data(){
      return {
           request: {
               name:"",
              college:"",
              Request:""
            }, 
            requests:null,        
      }
    },
    
     mounted(){
        this.getAllsendrequests();
       
    },
     methods:{
        
         back:function(){
      localStorage.setItem('status','Verified')
    } ,
    getAllsendrequests: function(){           
        return new Promise((resolve, reject) => {
            RequestService.getAllsendrequests()
                .then(response => {
                      this.requests = response.data; 
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

<style>

</style>