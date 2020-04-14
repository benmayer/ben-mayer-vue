/**
 * This file defines all functions available on Firebase.
 */

// Export the Nuxt server as "ssrapp".
exports.ssrapp = require('./nuxtServer');


// Export the redVsBlue API as "getRedVsBlue".
exports.test = require('./api/test');
// exports.getRedVsBlue = require('./api/test');
