<template>
  <section class="site__section">
    <h1>{{ title }}</h1>
    <Photos 
      :photos="photos"
    />
  </section>
</template>

<script>
import Flickr from 'flickr-sdk'
import Photos from '~/components/Photos'

export default {
  components: {
    Photos
  },
  async asyncData() {
    // TODO: process.env.FLICKR_API_KEY breaks on front end navigation unless authkey is added to hardcoded.
    const FLICKR_API_KEY = process.env.FLICKR_API_KEY || "";
    const flickr = new Flickr(FLICKR_API_KEY);
    const photos = await flickr.people.getPhotos({
      user_id: "95062969@N03"
    }).then(function (res) {
      return res.body.photos;
    }).catch(function (err) {
      return err;
    });
    return { photos: photos }
  },
  // this doesn't work yet
  // async fetch() {
  //   this.photos = await this.$http.$get('/api/test')

  //   console.log(this.photos)
  // },
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
