<template>
<div>
    <NavBar />
    <div class="pt-2">
        <h1>FacultyManagement</h1>
    </div>
    <div class="mt-5">
        <b-button  v-b-modal.add-1>Add Faculty</b-button>   
    </div>
    <div class="mt-5">
        <b-button  href="/College/FacultyManagement/ManageFaculty">Manage Faculty</b-button>
    </div>
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
       
    }

}
</script>

<style>

</style>