    <template>
      <!-- Admin Form -->
     <div>
      <b-modal id="modal-1" title="Login" hide-footer>       
         
           <b-form-group>
               <b-form-radio-group v-model="selected">
                 <b-container>
                   <b-row>
                     <b-col>       
                     <b-form-radio id="customRadioInline1" v-model="selected" v-bind:value="1">Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="customRadioInline2" v-model="selected" v-bind:value="2">College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="customRadioInline3" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
            </b-form-group>                     
            <b-form-group  class="pt-3" id="ad" label="User Name:">             
              <b-form-input id="input-2"
               name="input-1"  
              
               
               class="form-control"
               placeholder="Enter User name" ></b-form-input>
              
            </b-form-group>
             <b-form-group  label="Password:">        
              <b-form-input id="input-2"
               name="input-2"  
              
               type="password" 
                class="form-control" 
                placeholder="Enter Password"></b-form-input>   
                  
            </b-form-group>
            <div class="pt-5">
              <b-button  class="form-control " type="submit"  variant="btn btn-outline-success">Submit</b-button>   
            </div>      
            <div class="pt-3">
              <b-button class="form-control" type="reset" @click="resetForm()" variant="btn btn-outline-danger">Reset</b-button>   
            </div>        
           
      </b-modal>
     </div>
      <!-- Admin Form End -->
    </template>
<script>
import { validationMixin } from 'vuelidate'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
      return {
          selected: '1',
          role:'',
          form: {
          name:null,
          pass:null,
         }
      };
    },
}
</script>






  
