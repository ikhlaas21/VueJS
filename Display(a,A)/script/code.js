const app = Vue.createApp({
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        handleKeyPressed(e){
            console.log(e)
            console.log(e.key);
            if (e.code = 'KeyA') {
                this.show = true
            }
            if (e.code != 'KeyA'){
                this.show = false
            }
        }
    }
})
app.mount('#app')

// const app = Vue.createApp({
//     // CREATE VARIABLE IN DATA  
//         //this can also be done here instead of html
//          template:`
//          <form>
//          <input type='text' v-model= 'Sentence'>
//          <button v-on:click.prevent= 'display' >Click Me</button>
         
//          </form>
        
//          <div v-if='isVisible' id='box1'>
//          <p>You Pressed the {{Sentence}}{{Sentences}} key.</p>
          
//          </div>
         
         
//          `,
         
//          data: function() {
//             return{
//              Sentence:'',
//             //  Small:'',
//              isVisible:false
//             }
//         },
//          methods:{
//             display(){
//                 if(this.Sentences === 'A') {
//                     this.isVisible = true;
//                 }else {
//                     this.isVisible = false;
//                 }
//                 if(this.Sentence === 'a') {
//                     this.isVisible = true;
//                 }else {
//                     this.isVisible = false;
//                }
//          }
//     //everything in here appears in the div with the app id
//     }});
//     //NEED TO MOUNT IT
//     app.mount('#app');