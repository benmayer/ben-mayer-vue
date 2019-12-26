<template>
  <div class="section__google-maps">
    <GoogleMaps />
  </div>
</template>

<script>
import GoogleMaps from '~/components/GoogleMaps'

export default {
  name: 'HomePage',
  components: {
    GoogleMaps
  }
}
</script>

<style type="text/css">
.section__google-maps {
  width: 100%;
  height:600px;
}
</style>
