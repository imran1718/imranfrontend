<template>
  <div>
      <header>
      <NavBar />
      <b-container>
        <h1>Download Article</h1>
    <b-table-simple hover responsive   class="table table-striped table-bordered pt-5">
      <b-tr>
      <b-th>#</b-th>
      <b-th>Filename</b-th>
      <b-th>Download</b-th>
      
      </b-tr>
      <b-tr v-for="s in colleges" :key="s.id">
      <b-td>1</b-td>
      <b-td>pathandcls.txt</b-td>
      <b-td><a>Download</a></b-td>
    
      </b-tr>
    </b-table-simple>
      </b-container>
      </header>                      
           <div class="pt-5">
              <Footer />
          </div>       
                            
           
  </div>
</template>
<script>
import NavBar from './Navbar.vue';
import Footer from "./Footer.vue"


export default {
    name:'FacultyManagement',
    components:{
        NavBar,
        Footer,
  
       
    }

}
</script>