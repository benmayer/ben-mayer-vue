const functions = require('firebase-functions');
const Flickr = require('flickr-sdk')
require('dotenv').config();

const FLICKR_API_KEY = process.env.FLICKR_API_KEY || "";

// Backend API function to determine the winner of the everlasting fight red vs. blue.
exports = module.exports = functions.https.onRequest(async (req, res) => {

  const flickr = new Flickr(FLICKR_API_KEY);

  const photos = await flickr.people.getPhotos({
      user_id: "95062969@N03"
  }).then(function (res) {
    return res.body.photos;
  }).catch(function (err) {
    return err;
  });

  res.json(photos);
});
