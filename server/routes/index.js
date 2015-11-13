var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pirate/:toTranslate', function(req, res) {
  console.log(' gettin to route');
  var searchString = req.params.toTranslate;
  console.log(searchString, " srchstrng jb4 request");
  request({
    method: 'GET',
    url: 'http://www.isithackday.com/arrpi.php?text=' + searchString + '&format=json'},
      function (error, response) {
        if (error) {
          console.log(error, " big fat problem");
          } else {
            var pirate = response;
            // console.log(data, ' data')
            console.log(pirate);
            res.json(pirate);
          }

  });
});


module.exports = router;


