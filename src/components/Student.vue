<template>
    
<div>
    <NavBar />    
<b-container>
 <div>
   <h1>Student login</h1>
  <b-card-group deck>
<b-row>
  <b-col sm-6>
    <b-card title="Download Articles" img-src="approve.jpg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="/Student/Downloadarticle"  variant="primary">Go Download Articles</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="Update Profile" img-src="approve.jpg" img-alt="Image" img-height="300px"  img-width="300px" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="#" @click="getId()"  v-b-modal.update-1 variant="primary">Go Update Profile</b-button>
      </template>
    </b-card>
  </b-col>
</b-row>
<b-row class="pt-5" >
  <b-col sm-6>
    <b-card title="Send Request" img-src="student.jpg" img-height="300px"  img-width="300px"  img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="/Student/SendRequestclg"  variant="primary">Go Send Request</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="View request" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="/Student/Viewrequest"  variant="primary">Go View request</b-button>
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
        <b-button href="/Student/Stufeedback"  variant="primary">Go Send Feedback</b-button>
      </template>
    </b-card>
  </b-col>
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
<div >
</div>
</div>
       <b-modal id="update-1" title="Update Student" hide-footer>
         <div class="control">

            <b-form-group label="First name:" label-for="firstname">
               <b-form-input
               id="firstname"
               name="firstname"  
               v-model.trim="student.firstname" 
               
             
               placeholder="Enter your First name"></b-form-input>
         
            </b-form-group>
          

            <b-form-group label="Last name:" label-for="lastname">
               <b-form-input
                id="lastname"
                name="lastname"  
                v-model.trim="student.lastname"              
              
                placeholder="Enter your Last name"></b-form-input>          
            </b-form-group>
           

            <b-form-group label="Username:" label-for="username">
               <b-form-input 
                 id="username"
                name="username"  
               v-model.trim="student.username"
             
            
               placeholder="Enter your Username"></b-form-input>               
            </b-form-group>
            

            <b-form-group label="Password:" label-for="password">
               <b-form-input 
                 id="password"
                name="password" 
                type="password" 
               v-model.trim="student.password" 
                           
                placeholder="Enter your Password"></b-form-input>                
            </b-form-group>
           

            <b-form-group label="Mobile Number:" label-for="mobilenumber">
               <b-form-input 
               id="mobilenumber"
                name="mobilenumber"  
                type="number"
               v-model.trim="student.mobilenumber" 
                            
                placeholder="Enter your Mobile Number"></b-form-input>                
            </b-form-group>
           


            <b-form-group label="E-mail:" label-for="email">
               <b-form-input 
               id="email"
                name="email"  
               v-model.trim="student.email"
                            
                placeholder="Enter your E-mail"></b-form-input>                 
            </b-form-group>
         


            <b-form-group label="Address:" label-for="address">
               <b-form-input 
                id="address"
                name="address"  
               v-model.trim="student.address" 
                           
                placeholder="Enter your Address"></b-form-input>               
            </b-form-group>
            


            <b-form-group label="College:">
                <b-form-select class="form-control"
                 v-model.trim="student.college"  
                 :options="colleges"></b-form-select>
            </b-form-group>
          <br>


            <div class="text-center">
             <b-button type="submit" variant="outline-success"  @click="updateStudent()">Update</b-button>
             
            </div>
         </div>
       </b-modal>
    </div>
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";




export default {
  name: "Student",
  components: {
    NavBar,
    Footer,
  },
  data(){
        return{
             student: {
              firstname: "",
              lastname:"",
              username: "",
              password: "",
              mobilenumber: "",
              email: "",
              address:"",
              college:""
            },
             selected: null,
        colleges: [
         { value: 'NULL', text: 'Choose' },
          { value: 'KLNCIT', text: 'KLNCIT' },
          { value: 'KLNCE', text: 'KLNCE' },
          { value: 'VIT', text: 'VIT' },
         
        ]
             
        }
    },   
     mounted(){
        // this.getAllStudents();
    },
    methods:{
       logout:function(){
      localStorage.setItem('status','NotVerified')
    },
    
        
    }
    }
         
   

</script>
<style scoped>

</style>