<template>
  <div>
      <NavBar />
      <b-container >
      <div>
      <h2>Send Feedback</h2>
      </div>
  
   <b-form-group class="mt-4" label="Please select your College:">
                <b-form-select class="form-control" v-model="collegefeedback.college" :options="colleges"></b-form-select>
            </b-form-group><br> 
                 <b-row >
    <b-col sm="2">
      <label for="textarea-large">Feed Back:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
         v-model="collegefeedback.feedback"
        placeholder="Enter Feed Back"
      ></b-form-textarea>
    </b-col>
  </b-row>
      </b-container>
      <div class="text-center pt-3">
             <b-button type="submit" variant="outline-success"  @click="putFeedback()">Submit</b-button>
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
           collegefeedback: {
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
    putFeedback: function(){           
        return new Promise((resolve, reject) => {
            FeedbackService.putFeedback(this.collegefeedback)
                .then(response => {
                     
                    this.collegefeedback.college=""; 
                     this.collegefeedback.feedback=""; 
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