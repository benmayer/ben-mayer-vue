<template>
  <section class="site__section">
    <h1>{{ title }}</h1>
    <Photos 
      :photos="photos"
    />
  </section>
</template>

<script>
import Photos from '~/components/Photos'

export default {
  components: {
    Photos
  },
  async asyncData({ $axios }) {
    // TODO won't load on client render 
    
    const flickrPhotos = await $axios.$get('http://localhost:5001/ben-mayer-1555360556148/us-central1/photos')

    return { 
      photos: flickrPhotos
    }
  },
  data () {
    return {
      title: "Hi, I'm Ben.",
      photos: {
        photo: []
      }
    }
  },
  head () {
    return {
      title: 'Home - Ben Mayer',
      meta: [
      ]
    }
  }
}
</script>

<style type="text/css">

</style>
