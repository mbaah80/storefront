<template>
  <div>
    <section class="p-0">
      <div class="full-banner parallax text-center p-left" v-bind:style="{ 'background-image': `url(${imagepath})` }">
        <nuxt-img :src="imagepath" alt class="d-none" />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain">
                <h2>{{ title }}</h2>
                <h3>{{ subtitle }}</h3>
                <h4>{{ text }}</h4>
              </div>
            </div>
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
      imagepath: 'https://media.allure.com/photos/6201aca99b3da9fa2a2f29f5/16:9/w_1280,c_limit/castor%20oil.jpg',
      title: '2023',
      subtitle: 'Discount up to 50%',
      text: 'special offer'
    }
  }
}
</script>
