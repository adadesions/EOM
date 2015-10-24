'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AdaCode.I/O' });
});

router.get('/:page', function(req, res, next) {
  console.log(req.params.page)
  res.render(req.params.page, { greeting: 'aloha!!', test: 'Yayo' });
});

router.get('/:page/:subpage', function(req, res) {
  let page = req.params.page,
      subpage = req.params.subpage,
      path = page+'/'+subpage

      // student/ --> index
      if(subpage === '') { res.render(path+'index') }
      else { res.render(path)}

});

module.exports = router;
