<template>
  <div>
      <NavBar />
<b-container>    
     <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button href="/Admin" pill variant="primary" @click="back()">
          <b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>  
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
                
                <b-tr v-for="c in cfeedbacks" :key="c.id">
                    <b-td>{{c.college}}</b-td>
                    <b-td>{{c.feedback}}</b-td>
                  
                    
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
          feedbacks:null,
            cfeedbacks:null
      }
    },

     mounted(){
        this.getAllfeedbacks();
         this.getAllcfeedbacks();
    },
     methods:{
        
         back:function(){
      localStorage.setItem('status','Verified')
    } ,
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
    getAllcfeedbacks: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.getAllcFeedbacks(this.collegefeedback)
                .then(response => {
                      this.cfeedbacks = response.data; 
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