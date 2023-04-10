<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{ subtitle }}</h4>
      <h2 class="title-inner1">{{ title }}</h2>
    </div>
    <div class="container">
    </div>
    <section class="section-b-space pt-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="3" :spaceBetween="20"
              class="swiper-wrapper">

              <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-box">
                  <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                               @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import firebaseApp from "~~/firebase";


import 'swiper/css/free-mode';
import productBox1 from '../../product-box/product-box1.vue'
export default {
  components: {
    productBox1, Swiper, SwiperSlide,
  },
  data() {
    return {
      title: 'top Products',
      subtitle: 'special offer',
      products: [],
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 2,
          }
        }
      }
    }
  },
  methods: {
    getProducts(){
      const db = firebaseApp.db;
      db.collection("products").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let product = doc.data()
              product.id = doc.id;
              this.products.push(product)
            });
          })
          .catch((error)=>{
            console.log(error)
          })
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  },

  mounted() {
    this.getProducts()
  }
}
</script>
