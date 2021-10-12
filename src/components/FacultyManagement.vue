<template>
<div>
    <NavBar />
    <b-container>
    <div class=" mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
          <b-button href="/College" pill variant="primary" @click="back()">
          <b-icon icon="backspace-fill"></b-icon>Back</b-button>
        </div>
    <div class="pt-2">
        <h1>FacultyManagement</h1>
    </div>
    <div class="mt-5">
        <b-button variant="success"  v-b-modal.add-1>Add Faculty</b-button>   
    </div>
    <div class="mt-5">
        <b-button variant="success"  href="/College/FacultyManagement/ManageFaculty" @click="back()">Manage Faculty</b-button>
    </div>
    </b-container>
    <AddFaculty />
   
<div class="mt-5 pt-5">
    <Footer />
   
</div>
</div>
  
</template>

<script>
import NavBar from './Navbar.vue';
import Footer from "./Footer.vue"
import AddFaculty from "./AddFaculty.vue"

export default {
    name:'FacultyManagement',
    components:{
        NavBar,
        Footer,
        AddFaculty,
       
    },
    mounted(){
        
        
    },
    methods:{
       
      back:function(){
      localStorage.setItem('status','Verified')
    }
    }

}
</script>

<style>

</style>