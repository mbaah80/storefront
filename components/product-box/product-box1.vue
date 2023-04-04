<template>
  <div>
    <div class="img-wrapper">
      <div class="lable-block">
        <span class="lable3" v-if="product.status">new</span>
        <span class="lable4" v-if="product.category">on sale</span>
      </div>
      <div class="front">
        <nuxt-link :to="`/product/sidebar/${product.id}`" >
          <img
            :src='product.image'
            :id="product.id"
            class="img-fluid bg-img media "
            :alt="product.title"
            :key="index"
            style="height: 400px; width: 100%; object-fit: cover;"
          />
        </nuxt-link>
      </div>
      <div class="back" v-if="product.image">
        <nuxt-link :to="`/product/sidebar/${product.id}`" >
        <img :src='product.image'  :key="index"  :id="product.id" alt="" style="height: 400px; width: 100%; object-fit: cover;" class="img-fluid  m-auto media"> </nuxt-link></div>
      <div class="cart-info cart-wrap">
          <button
            data-toggle="modal"
            data-target="#modal-cart"
            title="Add to cart"
            @click="addToCart(product)"

            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button>
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a>
        <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        <a href="javascript:void(0)" title="Comapre" @click.prevent="addToCompare(product)"  variant="primary">
          <i class="ti-reload" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="product-detail">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <nuxt-link :to="`/product/sidebar/${product.id}`">
        <h6>{{ product.title }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.status">
        GHS {{ product.price}} <del><small>GHS {{ product.price }}</small></del>
      </h4>
      <h4 v-else>
        Auction <del><small> 24 Hrs </small></del>
      </h4>
    </div>
  </div>

</template>

<script>
import { mapState } from 'pinia'
import { useProductStore } from '~~/store/products'
import { useCartStore } from '~~/store/cart'
import firebase  from '~/plugins/firebase'
export default {
  props: ['product', 'index'],
  data() {
    return {
      symbol: '$',
      imageSrc: '',
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: '',
        image: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      products:[],
    }
  },

  methods: {

    getImgUrl(path) {

      return ('/images/'+ path)
    },
    addToCart: function (product) {

      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)

      useCartStore().addToCart(product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      useNuxtApp().$showToast({msg:"Product Is successfully added to your wishlist.",type:"info"})
      useProductStore().addToWishlist(product)
    },
    showQuickview: function (productData) {
      this.showquickview = true
      this.quickviewProduct = productData
      this.$emit('openquickview', this.showquickview, this.quickviewProduct)
    },
    addToCompare: function (product) {
      this.showCompareModal = true
      this.compareProduct = product
      this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)

      useProductStore().addToCompare(product)
    },
    // Color(variants) {
    //   const uniqColor = []
    //   for (let i = 0; i < Object.keys(variants).length; i++) {
    //     if (uniqColor.indexOf(variants[i].color) === -1) {
    //       uniqColor.push(variants[i].color)
    //     }
    //   }
    //   return uniqColor
    // },
    productColorchange(color, product) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src
            }
          })
        }
      })
    },
    productVariantChange(imgsrc) {
      this.imageSrc = imgsrc
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100))* this.curr.curr
      return price

    }
  },

}
</script>
