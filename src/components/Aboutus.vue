<template>
<div>
   <div id="Aboutus">
        <NavBar />        
      </div>
  <b-container class="bv-example-row " id="aboutus">
        <div class=" ">
        <h2>About US</h2>
        </div>
         <div class="pt-5">
        <b-row>
          <b-col sm="3">
            <b-card title="Library">
              <b-card
                img-src="https://i0.wp.com/www.meagantilley.com/wp-content/uploads/2016/09/IMG_3333.jpg?w=439&h=348"
                img-height="210"
                img-alt="Card image"
              >
                <a href="#">learn more..</a>
              </b-card>
            </b-card>
          </b-col>
          <b-col sm="3">
            <b-card title="Placement">
              <b-card
                img-src="https://empresas.blogthinkbig.com/wp-content/uploads/2020/09/charles-deluvio-Lks7vei-eAg-unsplash-triangle.jpg?w=640&resize=1220%2C813"
                img-height="210"
                img-alt="Card image"
              >
                <a href="#">learn more..</a>
              </b-card>
            </b-card>
          </b-col>
          <b-col sm="3">
            <b-card title="E-contents">
              <b-card
                img-src="https://i.pinimg.com/474x/74/cd/50/74cd5081fa9ae8f2421caf52880e4650--brain-training-training-exercises.jpg"
                img-height="210"
                img-alt="Card image"
              >
                <a href="#">learn more..</a>
              </b-card>
            </b-card>
          </b-col>
          <b-col sm="3">
            <b-card title="Auditorium">
              <b-card
                img-src="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                img-height="210"
                img-alt="Card image"
              >
                <a href="#">learn more..</a>
              </b-card>
            </b-card>
          </b-col>
        </b-row>     
         </div>  
      </b-container>
      <div class="pt-5">
      <Footer />
      </div>
</div>
</template>

<script>
import NavBar from './Navbar'
import Footer from "./Footer";

export default {
  name: "Aboutus",
  components: {
        NavBar,
        Footer
  },
}

</script>

<style>

</style>