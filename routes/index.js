var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Carter Rose`s Heroku Test App', message: "AROMA GEM ULTRASONIC DIFFUSER BY SAJE" });
});

var context = {
  productDesc: "SHINE BRIGHTLY, BREATHE DEEPLY. <br><br> Infuse your air with the vitality of nature and create a soothing atmosphere by diffusing 100% natural essential oils. Add a splash of chic to any space with this decorative gem.",
  howToUse: "1. Fill water tank to maximum water level line. <br><br> 2. Add 10-15 drops of your favourite Saje diffuser blend. <br><br> 3. Press diffuser’s on button and breathe in the benefits of nature.",
};

module.exports = router;
