<template>
<div>
    <div id="Aboutus">
        <NavBar />        
      </div>
  <!-- Contact Us Start-->
      <div class=" ">
        <b-container class="bv-example-row " id="contactus">
          <div class="  mt-5 p-8">
          <h2>Contact Us</h2>
          </div>
          <b-row class="py-5">
            <b-col sm="4">
              <b-card title="" header-tag="header" footer-tag="footer">
                <template #header>
                  <h3 class="mb-0">College Address</h3>
                </template>
                <b-card-text><p> KLN college of Information Technology, pottaplayam,</p>           
            <p>sivagangai-630612</p>
            <p>Tamil Nadu.</p>
            <p>India.</p></b-card-text>
              </b-card>
            </b-col>
            <b-col sm="4"> 
            <b-card title="" header-tag="header" footer-tag="footer">
                <template #header>
                  <h3 class="mb-0">College City Office</h3>
                </template>
                <b-card-text> 
           <p> KLN college of Information Technology, Southgate,,</p>           
            <p>Madurai-625001</p>
            <p>Tamil Nadu.</p>
            <p>India.</p></b-card-text>
              </b-card>
              </b-col>
            <b-col sm="4" class=""> 
              <b-card title="" header-tag="header" footer-tag="footer">
                <template #header>
                  <h3 class="mb-0">College Contact</h3>
                </template>
                <b-card-text>          
            <p>E-mail : klncit@gmail.com,klncollege@gmail.com</p>
            <p>Mobile no : +91 9078564545.</p>
            <p>Phone no : +91 9078564545.</p>
            <p>Time : (9am-6pm)</p>
           
            </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>        
      </div>   
      <div class="pt-3">
 <Footer />
</div>
</div>                    
</template>

<script>
import NavBar from './Navbar'
import Footer from './Footer'

export default {
  name: "Contactus",
  components: {
        NavBar,
        Footer
  },
}
</script>

<style>

</style>