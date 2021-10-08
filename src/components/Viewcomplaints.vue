<template>
  <div>
      <NavBar />
<b-container>      
    <h3>Student Feedback</h3>
  <b-table-simple hover responsive   class="table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                    <b-th> Id</b-th>                             
                    <b-th>College</b-th>
                    <b-th>Feedback</b-th>                  
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in feedbacks" :key="s.id">
                   <b-th>{{s.id}}</b-th>                   
                    <b-td>{{s.college}}</b-td>
                     <b-td>{{s.feedback}}</b-td>
                    
                </b-tr>           
                   
            </b-tbody>
         </b-table-simple>
         <h3 class="pt-3">College Feedback</h3>
  <b-table-simple hover responsive   class="table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                                        
                    <b-th>College</b-th>
                    <b-th>Feedback</b-th>                  
                </b-tr>
            </b-thead>
            <b-tbody>
                
                <b-tr v-for="s in feedbacks" :key="s.id">
                    <b-td>{{s.college}}</b-td>
                    <b-td>{{s.feedback}}</b-td>
                  
                    
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
import FeedbackService from '../Service/FeedbackService'

export default {
    name:'SendFeedback',
    components:{
        NavBar,
        Footer,
        
    },
    data(){
      return {
           feedback: {
               id:"",
              feedback:"",
              college:""
            }, 
            feedbacks:null,        
      }
    },
    
     mounted(){
        this.getAllfeedbacks();
    },
     methods:{
    getAllfeedbacks: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.getAllFeedbacks(this.studentfeedback)
                .then(response => {
                      this.feedbacks = response.data; 
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