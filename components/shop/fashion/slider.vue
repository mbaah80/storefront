<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <swiper loop=true :navigation="true" :modules="modules" :slidesPerView="auto" class="swiper-wrapper" >

          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-center" :class="item.alignclass"
              v-bind:style="{ 'background-image': 'url(' + item.url + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4 class="text-white">{{ item.title }}</h4>
                        <h1 class="text-white">{{ item.description}}</h1>
                        <nuxt-link :to="{ path: '/collection/leftsidebar/all' }" class="btn  shopButton">shop
                          now</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import firebaseApp from "~~/firebase";
export default {
  data() {
    return {
      items: []
    }
  },
  components: { Swiper, SwiperSlide },
  methods: {
    getBanner(){
      const db = firebaseApp.db;
      db.collection("banner").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let item = doc.data()
              item.id = doc.id;
              this.items.push(item)
              console.log(this.items)
            });
          })
          .catch((error)=>{
            console.log(error)
          })
    },
  },
  mounted() {
    this.getBanner()
  },
  setup() {

    return {
      modules: [Navigation]
    }
  }
}
</script>
<style scoped>
.shopButton{
  background-color: #8B5A2F !important;
  color: #ffffff;
  padding: 15px !important;
  width: 200px !important;
}
.shopButton:hover{
  background-color: #fff !important;
  color: #000;
  padding: 15px !important;
  width: 200px !important;
  border: 2px solid #8B5A2F;
  transition: 1s ease;
}
</style>
