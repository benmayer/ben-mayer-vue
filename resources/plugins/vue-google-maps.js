import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const goolgeApiKey = process.env.VUE_APP_GOOGLE_API_KEY

Vue.use(VueGoogleMaps, {
  load: {
    key: goolgeApiKey
  }
})
