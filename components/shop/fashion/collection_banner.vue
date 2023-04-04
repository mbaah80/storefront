<template>
  <div>
    <section class="pb-0 ratio2_1">
      <div class="container">
        <div class="row partition2">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <nuxt-link :to="{ path: '/collection/leftsidebar/all' }">
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <nuxt-img :src="item.imagepath" class="img-fluid" style="height: 400px; object-fit: cover"/>
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{ item.subtitle }}</h4>
                    <h2>{{ item.title }}</h2>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: 'https://nextluxury.com/wp-content/uploads/Rugged-Style-Ideas-for-Men.jpg',
          title: 'men',
          subtitle: 'save 30%'
        },
        {
          imagepath: 'https://media.glamour.com/photos/5c17d3b33c23892cf46e7c48/1:1/w_1600%2Cc_limit/GettyImages-916377388.jpg',
          title: 'women',
          subtitle: 'save 60%'
        }
      ]
    }
  }
}
</script>
