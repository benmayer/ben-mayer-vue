<template>
  <div class="photos">
    <ul class="photo-list">
      <li 
        v-for="(photo, key) of photos.photo" 
        :key="key"
        class="photo-list-item"
      >
        <Photo 
          :photo="photo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import Photo from '~/components/Photo'
  export default {
    components: {
      Photo
    },
    props: {
      photos: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style>

</style>
