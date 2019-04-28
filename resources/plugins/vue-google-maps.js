import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDYr8xYxfARN54-QT8yL8lfITrBG1XpRvc',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})
