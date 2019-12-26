<template>
  <!--  <GmapMap
    :center="{lat:52.5011215, lng:13.4181897}"
    :zoom="12"
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
    <GmapCustomMarker :marker="marker" alignment="top">
      <div class="map-marker">
        <img src="http://lorempixel.com/800/600/nature/">
      </div>
    </GmapCustomMarker>
  </GmapMap> -->
  <div>Google Maps</div>
</template>

<script>
import { gmapApi }  from 'vue2-google-maps'
// import GmapCustomMarker from 'vue2-gmap-custom-marker'

export default {
  components: {
    // 'GmapMap': gmapApi
    // 'GmapCustomMarker': GmapCustomMarker
  },
  data() {
    return {
      marker: {
        lat: 52.5011215,
        lng: 13.4181897
      }
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>

<style type="text/css">
  .map-marker{
    width: 80px;
    height:60px;

    border:3px solid white;
    border-radius: 2px;
    box-shadow:  1px 3px 3px rgba(0,0,0,0.1)
  }
  .map-marker:after{
    content: "";
    position: absolute;
    height: 0px;
    width: 0px;
    left: 50%;
    top: 100%;
    border-top: 8px solid white;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    margin-left: -4px;
  }
  .map-marker img {
    max-width: 100%;
  }
</style>
