<template>
  <div>
      <NavBar />
      <b-container >
        <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button href="/Student" pill variant="primary" @click="back()">
          <b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>
      <div>
      <h2>Send Feedback</h2>
      </div>
  
   <b-form-group class="mt-4" label="Please select your College:">
                <b-form-select class="form-control" v-model="studentfeedback.college" :options="colleges"></b-form-select>
            </b-form-group><br> 
                 <b-row >
    <b-col sm="2">
      <label for="textarea-large">Feed Back:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
         v-model="studentfeedback.feedback"
        placeholder="Enter Feed Back"
      ></b-form-textarea>
    </b-col>
  </b-row>
      </b-container>
      <div class="text-center pt-3">
             <b-button type="submit" variant="outline-success"  @click="insertFeedback()">Submit</b-button>
      </div>
  <div class="mt-5 pt-5">
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
        Footer
    },
    data(){
      return {
           studentfeedback: {
              feedback:"",
              college:""
            },
          selected: null,
          colleges: [
        { value: null, text: 'Please select college' },
          { value: 'KLNCIT', text: 'KLNCIT' },
          { value: 'KLNCE', text: 'KLNCE' },
          { value: 'VIT', text: 'VIT' },         
        ]
      }
    },
     methods:{
       back:function(){
      localStorage.setItem('status','Verified')
    },       
       
    insertFeedback: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.insertFeedback(this.studentfeedback)
                .then(response => {
                     
                    this.studentfeedback.college=""; 
                     this.studentfeedback.feedback=""; 
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },   
      
     }
}
//  localStorage.setItem('isStudentlogin','true');
//        this.$routes.push({name:'Stufeedback'})
//      },

</script>

<style>

</style>