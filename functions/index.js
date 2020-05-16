/**
 * This file defines all functions available on Firebase.
 */

// Export the Nuxt server as "ssrapp".
exports.ssrapp = require('./nuxtServer');


// Export the Flickr Photos API as "getPhotos".
exports.photos = require('./api/photos');

