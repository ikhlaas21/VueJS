// CREATE OBJECT
const app = Vue.createApp({
// CREATE VARIABLE IN DATA  
     data(){

     },
     data: function() {
        return{
            greeting:'ahoy'
        }
     }
//everything in here appears in the div with the app id
});
//NEED TO MOUNT IT
app.mount('#app');