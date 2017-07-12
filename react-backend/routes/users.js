var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({
    id:"3095144",
    name:"kelvin mwangi"
  });


});

module.exports = router;
