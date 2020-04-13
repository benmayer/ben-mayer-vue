<template>
  <img 
    :src="default_url" 
    :data-photo-id="photo_details.id"
    :data-photo-title="photo_details.title"
  >
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
    data () {
      return {
        photo_details: this.photo,
        default_url: this.buildPhotoURL(this.photo),
      }
    },
    methods: {
      buildPhotoURL(Photo) {  
        const base_url = 'https://live.staticflickr.com';
        const default_type = 'jpg';
        const default_size = '_t'; // Thumbnail
        return `${base_url}/${Photo.server}/${Photo.id}_${Photo.secret}${default_size}.${default_type}`;
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
  }
</script>

<style>

</style>
