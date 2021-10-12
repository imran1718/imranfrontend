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
        <b-button href="#" v-b-modal.update-1 variant="primary">Go Update Profile</b-button>
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
</div>
<updatestudent/>
</div>
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import Updatestudent from "./Updatestudent";

export default {
  name: "Student",
  components: {
    NavBar,
    Footer,
    Updatestudent
    
  },
   mounted(){
  //  this.logout();
  },
  methods:{
    logout:function(){
      localStorage.setItem('status','NotVerified')
    },
    
  }
};
</script>
<style scoped>

</style>