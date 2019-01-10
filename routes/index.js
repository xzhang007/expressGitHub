var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('https://github.com/xzhang007');
});

router.get('/userrepo', function(req, res, next) {
	res.redirect('https://github.com/xzhang007?tab=repositories')
})



module.exports = router;
	