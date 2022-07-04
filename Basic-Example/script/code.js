// CREATE OBJECT
const app = Vue.createApp({
// CREATE VARIABLE IN DATA  
    //this can also be done here instead of html
     template:`
     <input type='text' v-model= 'greeting'/>
     <button v-on:click= 'display' >Click Me</button>
     <div v-if='isVisible' id='box1'>
     <p>{{greeting}}</p>
     </div>
     
     `,
     
     data: function() {
        return{
            greeting:'ahoy',
            isVisible:'true'
        }
     },
     methods:{
        display(){
           this.isVisible = !this.isVisible;
        }
     }
//everything in here appears in the div with the app id
});
//NEED TO MOUNT IT
app.mount('#app');