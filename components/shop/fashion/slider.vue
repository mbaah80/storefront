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
                        <h4>{{ item.title }}</h4>
                        <h1>{{ item.subtitle }}</h1>
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
          imagepath: 'https://pricesghana.com/wp-content/uploads/2019/05/fashion-schools-in-ghana.jpeg',
          title: 'welcome to fashion',
          subtitle: 'women fashion',
          alignclass: 'p-left'
        },
        {
          imagepath: 'https://images.squarespace-cdn.com/content/v1/5c55184293a6324e1f793b37/1627313270606-IPMIQ05OSGW59VVEKUGD/Tones+of+trends.jpg?format=1000w',
          title: 'welcome to fashion',
          subtitle: 'men fashion',
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
