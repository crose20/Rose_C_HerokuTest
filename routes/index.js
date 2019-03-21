var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Carter Rose`s Heroku Test App', message: "AROMA GEM ULTRASONIC DIFFUSER BY SAJE", productDesc: "SHINE BRIGHTLY, BREATHE DEEPLY.Infuse your air with the vitality of nature and create a soothing atmosphere by diffusing 100% natural essential oils. Add a splash of chic to any space with this decorative gem." });
});

module.exports = router;
