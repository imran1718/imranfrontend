<template>
  <div class="hello">
    
      <div id="home">
        <NavBar />        
      </div>
     <b-container>
        <!-- FIRST CARD START -->
      <div>
        
        <b-container fluid="sm" class="my-5">
          <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            img-height="350"
          >
            <b-card-text align="left" class="my-5">
              <h3 class="cd">college Department</h3>
              <p>Click here for College department Campus.<br /></p>
              <b-button v-b-toggle.sidebar-1 variant="primary" href="Home1.vue">Go somewhere</b-button>
            </b-card-text>
          </b-card>
        </b-container>
      </div>
      <h2>Safe Together</h2>
      <b-container class="bv-example-row pt-5">
        <b-row>
          <img
            src="https://mhstrail.org/wp-content/uploads/2020/12/contact-tracing-on-college-campuses-820x440-1.jpg"
            width="900"
            height="450"
          />
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-card>
              <h3>KLNCIT Prepares for “Near Normal” Fall Semester</h3>
              <b-card-text class="pt-5"
                ><p>
                  With a community-wide vaccination rate surpassing 90 percent,
                  <br />
                  students can expect in-person studio and extra-curricular
                  experiences come September.
                  students can expect in-person studio and extra-curricular
                  experiences come September.
                </p></b-card-text
              >
            </b-card>
          </b-col>
          <b-col sm="6">
            <b-card>
              <h3>Covid Information</h3>
              <b-card-text class="pt-5">
                <a href="#"
                  ><h3>See the latest COVID updates and information</h3></a
                >
                <a href="#"
                  ><h3>
                    See how we’re tracking community health on our COVID
                    dashboard
                  </h3></a
                >
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <!-- FIRST CARD END -->
     
     
      <div class="py-5 pt-5 mt-5">
       
      </div>
      <div>
    
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
            
    </b-container>
    <div>
    <Home />
   
  </div>
   <div class="pt-5">
      <Footer />
    </div>
    
 
  
  </div>
</template>

<script>
import NavBar from './Navbar'
import Home from './Home1.vue'
import Footer from "./Footer.vue"

export default {
  name: "HelloWorld",
  components: {
        NavBar,
        Home,
        Footer
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
}
.heading{
  margin-top: 110px;
}

h2{
  color: #B94629;

  font-family: "Montserrat";
  font-weight: 500;
}
p{
  font-family:Arial, Helvetica, sans-serif
}
.cd{
  font-family:'Times New Roman', Times, serif
}

</style>
