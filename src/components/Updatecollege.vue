<template>
  <div>
     

<b-modal id="update-1" title="Update College" ref="modal" hide-footer>

                
        <b-form-group  label="Collegename" label-for="collegename">
          <b-form-input id="name"
          name="collegename"
           v-model="college.collegename"
          class="form-control"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Username" label-for="username">
          <b-form-input id="username"
          name="user"
           v-model="college.username"
           class="form-control"
         > </b-form-input>
         </b-form-group>
          <b-form-group  label="Password" label-for="password">
          <b-form-input id="password"
          name="password"
          type="password"
           v-model="college.password"
           class="form-control"
         > </b-form-input>
         </b-form-group>
         <b-form-group label="Collegenumber" label-for="collegenumber">
          <b-form-input id="collegenumber"
          name="collegenumber"
          type="number"
           v-model="college.collegenumber"
           class="form-control"
         > </b-form-input>
         </b-form-group>
          <b-form-group label="Collegeaddress" label-for="collegeaddress">
          <b-form-input id="collegeaddress"
          name="collegeaddress"
           v-model="college.collegeaddress"
           class="form-control"
         > </b-form-input>
         </b-form-group>
        
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"   variant="outline-danger"  @click="updateCollege()">Update</b-button><br>          
      </div>
</b-modal>
     
         
       </div>
 
</template>

<script>
import CollegeService from '../Service/CollegeService'


export default {
    name: "collegePage",
     components: {
              
       },
    data(){
        return{
             college: {                 
                  collegename:'',
                  username:'',
                  password:'',
                  collegenumber:"",
                  collegeaddress:""

              },
              colleges:null,
        }
    },
    mounted(){
        // this.getAllcolleges();
    },
    methods:{
          getCollege: function(id){
           
            return new Promise((resolve, reject) => {
                 CollegeService.getCollege(id)
                .then((response) => {
                  
                    this.college = response.data;                      
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }); 
            });       
        },        
updateCollege: function(){
       
        return new Promise((resolve, reject) => {
            CollegeService.updateCollege(this.college)
                .then(response => {
                     this.college = response.data;  
                    this.getAllcolleges();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    }     
}
}
</script>

<style>

</style>