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
         <b-button href="College/Uploadarticle" variant="primary">Go Upload Articles</b-button>
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
        <b-button href="College/FacultyMangement" variant="primary">Go Faculty Management</b-button>
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
         <b-button href="College/SendRequest" variant="primary">Go Send Request</b-button>
      </template>
    </b-card>
  </b-col>
  <b-col sm-6>
    <b-card title="Update Profile" img-src="complaint.jpeg" img-height="300px"  img-width="300px" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <b-button href="" v-b-modal.update-1 variant="primary">Go Update Profile</b-button>
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
        <b-button href="College/Viewrequest" variant="primary">Go View request</b-button>
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
  <b-button href="/" variant="btn btn-outline-success">Logout</b-button>
</div>
</b-container>
<Updatecollege />
<div class="pt-3">
 <Footer />
</div>
</div>
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
import Updatecollege from './Updatecollege.vue';

export default {
  name: "College",
  components: {
    NavBar,
    Footer,
    Updatecollege
  },
};
</script>
<style scoped>

</style>