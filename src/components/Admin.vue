<template>
    
<div>
    <NavBar />
<b-container>
 <div>
   <h1>Admin login</h1>
  <b-card-group deck>
<b-row>
  <b-col sm-6>
    <b-card title="Approve Institute" img-src="approve.jpg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="Admin/Approve"  variant="primary">Go Approve Institute</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="Delete Institute" img-src="approve.jpg" img-alt="Image" img-height="300px"  img-width="300px" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="Admin/Colleges" variant="primary">Go Delete Institute</b-button>
      </template>
    </b-card>
  </b-col>
</b-row>
<b-row class="pt-5" >
  <b-col sm-6>
    <b-card title="View Student" img-src="student.jpg" img-height="300px"  img-width="300px"  img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
         <b-button href="Admin/Viewstudent"  variant="primary">Go View Student</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="View Compalints" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="Admin/Viewcomplaints"  variant="primary">Go View Compalints</b-button>
      </template>
    </b-card>
  </b-col>
</b-row>    
</b-card-group>
<div class="text-center pt-5">
  <b-button href="/" @click="logout()" variant="btn btn-outline-success"> 
  <b-icon icon="power"></b-icon>Logout</b-button>
</div>
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
export default {
  name: "Admin",
  components: {
    NavBar,
    Footer,    
  },
  mounted(){
  //  this.logout();
  },
  methods:{
    logout:function(){
      localStorage.setItem('role','Admin')
    },
     
  }
};
</script>
<style scoped>

</style>