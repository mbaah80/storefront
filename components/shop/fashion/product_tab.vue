<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{ subtitle }}</h4>
      <h2 class="title-inner1">{{ title }}</h2>
    </div>

    <section class="section-b-space pt-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <div class="tabs">
                <div class>
                  <ul class="nav nav-tabs" id="top-tab" role="tablist">
                    <li class="nav-items ">
                      <a class="nav-link active" href="#new" data-bs-toggle="tab">
                        NEW PRODUCT</a>
                    </li>
                    <li class="nav-items">
                      <a class="nav-link" href="#best" data-bs-toggle="tab">
                        BEST SELLERS</a>
                    </li>
                    <li class="nav-items">
                      <a class="nav-link" href="#feature" data-bs-toggle="tab">
                        FEATURED PRODUCT</a>
                    </li>
                    <li class="nav-items">
                      <a class="nav-link" href="#sale" data-bs-toggle="tab">
                        ON SALE</a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="top-tabContent">
                  <div id="new" class="tab-pane fade show active">
                    <div class="no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in products" :key="index">
                          <div class="product-box">
                            <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="best" class="tab-pane fade">
                    <div class=" no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in products" :key="index">
                          <div class="product-box">
                            <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="feature" class="tab-pane fade">
                    <div class=" no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in products" :key="index">
                          <div class="product-box">
                            <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sale" class="tab-pane fade">
                    <div class="no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in products" :key="index">
                          <div class="product-box">
                            <productBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import productBox1 from '../../product-box/product-box1.vue'
import firebaseApp from "~~/firebase";
export default {
  components: {
    productBox1
  },
  data() {
    return {
      title: 'special products',
      subtitle: 'exclusive products',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      products: [],
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
