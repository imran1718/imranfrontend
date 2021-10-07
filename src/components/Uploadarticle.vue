<template>
  <div>
      <NavBar />
      <div class="pt-3"> 
         <h1> Upload Article</h1>
      </div>
    <!-- Styled -->
     <div class="pt-5">
    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
       
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

  
  </div>
  
  <div  class="mt-5 pt-5">
      <Footer />
  </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue"
import NavBar from './Navbar.vue';
export default {
    name:"UploadArticle",
    components:{
        NavBar,
        Footer,
        
    },
     data() {
      return {
        file1: null
      }
     }

}
</script>

<style>

</style>