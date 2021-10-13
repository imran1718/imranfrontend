<template>
    
<div>
    <NavBar />
<b-container>
 <div>
   <h1>College login</h1>
  <b-card-group deck>
<b-row>
  <b-col sm-6>
    <b-card title="Upload Articles" img-src="approve.jpg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="College/Uploadarticle"  variant="primary">Go Upload Articles</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="Faculty Management" img-src="approve.jpg" img-alt="Image" img-height="300px"  img-width="300px" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="College/FacultyManagement" variant="primary">Go Faculty Management</b-button>
      </template>
    </b-card>
  </b-col>
</b-row>
<b-row class="pt-5" >
  <!-- <b-col sm-6>
    <b-card title="Send Request" img-src="student.jpg" img-height="300px"  img-width="300px"  img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="College/SendRequest
         " variant="primary">Go Send Request</b-button>
      </template>
    </b-card>
  </b-col> -->
  <b-col sm-6>
    <b-card title="Update Profile" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="" @click="getId()"  v-b-modal.update-1 variant="primary">Go Update Profile</b-button>
      </template>
    </b-card>
  </b-col>
  <b-row class="pt-5" >
  <b-col sm-6>
    <b-card title="View request" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="College/Viewrequestclg"  variant="primary">Go View request</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="Send Feedback" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="College/SendFeedback" variant="primary">Go Send Feedback</b-button>
      </template>
    </b-card>
  </b-col>
  </b-row>
</b-row>    
</b-card-group>
</div>
<div class="text-center pt-5">
  <b-button href="/" @click="logout()" variant="btn btn-outline-success">
  <b-icon icon="power"></b-icon>Logout</b-button>
</div>
</b-container>

<div class="pt-3">
 <Footer />
</div>


<b-modal id="update-1" title="Update College" ref="modal" hide-footer>

                
        <b-form-group  label="Collegename" label-for="collegename">
          <b-form-input id="name"
          name="collegename"
           v-model="college.collegename"
          class="form-control"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Username" label-for="username">
          <b-form-input id="username"
          name="user"
           v-model="college.username"
           class="form-control"
         > </b-form-input>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
          type="password"
           v-model="college.password"
           class="form-control"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Collegenumber" label-for="collegenumber">
          <b-form-input id="collegenumber"
          name="collegenumber"
          type="number"
           v-model="college.collegenumber"
           class="form-control"
         > </b-form-input>
         </b-form-group>
          <b-form-group label="Collegeaddress" label-for="collegeaddress">
          <b-form-input id="collegeaddress"
          name="collegeaddress"
           v-model="college.collegeaddress"
           class="form-control"
         > </b-form-input>
         </b-form-group>
        
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"   variant="outline-danger"  @click="updateCollege()">Update</b-button><br>          
      </div>
</b-modal>


</div>
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";

import CollegeService from '../Service/CollegeService'
export default {
  name: "College",
  components: {
    NavBar,
    Footer,
   
  },
  data(){
        return{
             college: {   
                  id: '',              
                  collegename:'',
                  username:'',
                  password:'',
                  collegenumber:"",
                  collegeaddress:""

              },
              id: ''
        }
    },
  mounted(){
  //  this.logout();
  },
  methods:{
     getId : function(){
            var id = localStorage.getItem('collegeId')
            this.getCollege(id);
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
updateCollege: function(){
       
        return new Promise((resolve, reject) => {
            CollegeService.updateCollege(this.college)
                .then(response => {
                     alert(response.data);
                
                     this.college.id = '',
                    this.college.collegename =  '',
                    this.college.username =  '',
                    this.college.password = '',
                    this.college.collegenumber = '',
                    this.college.collegeaddress = '',                   
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },     
        
    logout:function(){
      localStorage.setItem('status','NotVerified')
    }    ,
      
  }
};
</script>
<style scoped>

</style>