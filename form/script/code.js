// CREATE OBJECT
const app = Vue.createApp({
    // CREATE VARIABLE IN DATA  
        //this can also be done here instead of html
         template:`
         <form>
         <input type='text' placeholder='name' v-model= 'FirstName' required>
         <input type='number' placeholder='age' v-model= 'Age' required>
         <button v-on:click.prevent= 'display' >Click Me</button>
         
         </form>
        
         <div v-if='isVisible' id='box1'>
         <p>{{FirstName}} {{LastName}} is {{Age}} years old</p>
         
         </div>
         
         
         `,
         
         data: function() {
            return{
             FirstName:'',
             LastName:'',
             Age:0,
             isVisible:false
            }
        },
         methods:{
            display(){
                if(this.Age > 17) {
                    this.isVisible = true;
                }else {
                    this.isVisible = false;
                }
               
            }
         }
    //everything in here appears in the div with the app id
    });
    //NEED TO MOUNT IT
    app.mount('#app');
            //  <input type='text' placeholder='surname' v-model= 'LastName' required>