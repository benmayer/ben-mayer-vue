<template>
  <img :src="Photo.sizes.Thumbnail.source">
</template>

<script>
  // import Flickr from 'flickr-sdk'
  
  export default {
    props: {
      photo: {
        type: Object,
        required: true,
      }
    },
    async fetch() {
      // New fetch, access to `this`
      // console.log('calling', this);

      // const flickr = new Flickr(process.env.FLICKR_API_KEY);

      // this.photo.sizes = await flickr.photos.getSizes({
      //   photo_id: this.photo.id
      // }).then(function (res) {
      //   return res.body.sizes.size;
      // }).catch(function (err) {
      //   return err;
      // });

    },
    data () {
      const base_url = 'https://live.staticflickr.com';
      const default_type = 'jpg';
      const default_size = '_t'; // Thumbnail
      
      let Photo = this.photo;

      Photo.sizes = {
        "Thumbnail": {
          label: 'Thumbnail',
          width: 75,
          height: 100,
        }
      }
      Photo.sizes.Thumbnail.source = 
        `${base_url}/${Photo.server}/${Photo.id}_${Photo.secret}${default_size}.${default_type}`
      return {
        Photo
      }
    },
  }
</script>

<style>

</style>
