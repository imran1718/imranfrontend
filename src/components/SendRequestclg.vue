<template>
    <div>
        <NavBar />
        <b-container>
          <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button href="/Student" pill variant="primary" @click="back()">
          <b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>
        <h2>Send Request</h2>

          <b-form-group   label="Name" >
          <b-form-input
           v-model="sendrequest.name"
           id="name"
           name="name"
         >
           </b-form-input>
       </b-form-group>
       <b-form-group class="mt-4" label="Please select your College:">
                <b-form-select class="form-control" v-model="sendrequest.college"  :options="colleges"></b-form-select>
            </b-form-group><br>
        <b-row >
    <b-col sm="2">
      <label for="textarea-large">Request For:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
        v-model="sendrequest.request"
        placeholder="Enter Request "
      ></b-form-textarea>
    </b-col>
  </b-row>
         
          <div class="pt-3">
           <b-button   type="submit"  variant="outline-success" @click="putSendrequest()">Submit</b-button>
          </div>
        </b-container>
    <div class="pt-3">
        <Footer />
    </div>
    </div>
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import RequestService from "../Service/RequestService"
export default {
  name: "SendRequestclg",
  components: {
    NavBar,
    Footer
  },
  data(){
      return{
          sendrequest: {
              name:"",              
              college:"",
              request:""
            },
          slected:null,
          colleges:[
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
    putSendrequest: function(){           
        return new Promise((resolve, reject) => {
            RequestService.insertSendrequest(this.sendrequest)
                .then(response => {
                     this.sendrequest.name="";
                    this.sendrequest.college=""; 
                     this.sendrequest.request=""; 
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
