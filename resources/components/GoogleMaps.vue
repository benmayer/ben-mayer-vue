<template>
  <GmapMap
    :center="{lat:10, lng:11}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      disableDefaultUi: false,
      gestureHandling: 'cooperative'
    }"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="google && new google.maps.LatLng(m.position.lat, m.position.lng)"
      :icon="m.icon"
      :clickable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  data: () => ({
    markers: [{
      position: {
        lat: 10.0,
        lng: 10.0,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      }
    }, {
      position: {
        lat: 11.0,
        lng: 11.0
      }
    }]
  }),
  computed: {
    google: gmapApi
  }
}
</script>
