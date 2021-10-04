<template>
 
    <div>
      <b-navbar toggleable="lg" type="dark" fixed="top">
        <!-- <b-container > -->
        <b-navbar-brand href="#">
          <img
            src="https://i0.wp.com/hamidgraphic.com/wp-content/uploads/2020/09/FREE-EDUCATION-LOGO-DESIGN-DOWNLAOD-CDR-FORMAT-1.png?ssl=1"
            width="40"
            height="35"
            class="d-inline-block align-top"
            alt="Kitten"
          />
          <span> 𝕂𝕃ℕℂ𝕀𝕋</span>
        </b-navbar-brand>     

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item href=""> Home</b-nav-item>
            <b-nav-item href="#" v-b-modal.modal-1>Login</b-nav-item>
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Registration" right>
              <b-dropdown-item href="#" v-b-modal.modal-2>Student Registration</b-dropdown-item>
              <b-dropdown-item href="#" v-b-modal.modal-3>College Registration</b-dropdown-item>             
            </b-nav-item-dropdown>
            <b-nav-item href="Aboutus">About US</b-nav-item>
            <b-nav-item href="Contactus">Contact US</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <!-- </b-container> -->
      </b-navbar>     
    <b-container>
      <div class="title mt-5 p-5">
        <h1>KLN <br />COLLEGE OF INFORMATION TECHNOLOGY</h1>
      </div>     
    </b-container>
    
      <div>
       <PopupClg /> 
    </div> 
      <div>
       <PopupStudent /> 
    </div> 
    <div>
       <PopupLogin /> 
    </div> 
   
    
     
    </div>
     

</template>
<script>
import PopupClg from "./popupclg"
import PopupStudent from "./popupstudent.vue"
import PopupLogin from "./popuplogin.vue"

export default {
  name: "Navbar",
  components: {
    PopupClg, 
    PopupStudent,
    PopupLogin,    
  },
  
};
                
</script>

<style scoped>
.navbar {
  background: #b94629;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat");
body {
  background-color: #111;
}

.title {
  font-family: "Montserrat";
  text-align: center;
  color: #fff;
  display: flex;

  align-items: center;
  justify-content: center;

  letter-spacing: 1px;
}

h1 {
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 40px;
}
/* styling my button */

.white-mode {
  text-decoration: none;

  background-color: #122;
  border-radius: 3px;
  color: #fff;
  transition: 0.35s ease-in-out;

  font-family: "Montserrat";
}

.white-mode:hover {
  background-color: #fff;
  color: #122;
}

</style>
      