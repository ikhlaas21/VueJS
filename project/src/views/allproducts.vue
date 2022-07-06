<template>
 <div>
        <h2>All</h2>

    <div class="container">
        <div class="row">
            <div class="card p-3 m-3" v-for="property of properties" :key="property.id" style="width:18rem;">
              <img :src="property.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{{ property.address.street }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>

              </div>
            </div>
        </div>
    </div>
            <!-- <div class="card" style="width: 18rem;">
                <div class="card-body" >
                <img :src="properties.image" class="card-img-top" alt="...">
                    <h5 class="card-title">Card title</h5>
                     <p class="card-text">{{ property.address.street }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div> -->
    <!-- <div v-for="property of properties" :key="property.id" class="card">
        {{ property.address.street }}
         <img :src="property.image" alt="">
    </div> -->
 </div>
</template>

<script>
export default {
    data() {
        return {
            properties: [
            ],
        };
    },
    mounted(){
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data));
    },

};
</script>