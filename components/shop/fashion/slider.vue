<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <swiper loop=true :navigation="true" :modules="modules" :slidesPerView="auto" class="swiper-wrapper" >

          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-center" :class="item.alignclass"
              v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4 class="text-bg-danger">{{ item.title }}</h4>
                        <h1 class="text-bg-warning">{{ item.subtitle }}</h1>
                        <nuxt-link :to="{ path: '/collection/leftsidebar/all' }" class="btn btn-solid">shop
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
export default {
  data() {
    return {

      items: [
        {
          imagepath: 'https://www.afdb.org/sites/default/files/afawa-conversation.jpg',
          title: 'welcome to Expiro',
          subtitle: 'Discount up to 50%',
          alignclass: 'p-left'
        },
        {
          imagepath: 'https://content.pymnts.com/wp-content/uploads/2019/11/Africa-FinTech-investors-OPay-Nigeria-funding-PalmPay-1000x600.jpg',
          title: 'welcome to Expiro',
          subtitle: 'Buy Any Product',
          alignclass: 'p-left'
        }
      ]
    }
  },
  components: { Swiper, SwiperSlide },

  setup() {

    return {
      modules: [Navigation]
    }
  }
}
</script>
