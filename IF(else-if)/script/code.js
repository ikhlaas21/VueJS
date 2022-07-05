const app = Vue.createApp({
    template:`
    <div v-if='isVisible1' id='box1'>
      <p>box 1</p>
    </div>
    <div v-if='isVisible2' id='box2'>
    <p>box 2</p>
    </div>
    <div v-if='isVisible3' id='box3'>
    <p>box 3</p>
    </div>
    `,
    data: function(){
        return{
            isVisible:true,
            isVisible2:true,
            isVisible3:false
        }
    },
    methods:{

    }
});
app.mount('#else');