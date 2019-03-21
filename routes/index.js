var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Carter Rose`s Heroku Test App', message: "AROMA GEM ULTRASONIC DIFFUSER BY SAJE" });
});

var context = {
  productDesc: "SHINE BRIGHTLY, BREATHE DEEPLY. Infuse your air with the vitality of nature and create a soothing atmosphere by diffusing 100% natural essential oils. Add a splash of chic to any space with this decorative gem.",
  howToUse: "1. Fill water tank to maximum water level line. 2. Add 10-15 drops of your favourite Saje diffuser blend. 3. Press diffuser’s on button and breathe in the benefits of nature.",
  benefits: "Purifies and humidifies while infusing your air with the healing power of plants. Releases negative ions to reduce dust, pet dander and other airborne allergens (like dust mite matter). Refreshes the air in your space using 100% natural essential oil blends. Preserves the full integrity and properties of your essential oil blends using a heat-free system. Gives your atmosphere the same refreshing feeling as standing near a waterfall.",
};

var html = template(context);

module.exports = router;
