var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });

});

router.post('/:id', function (  req, res, next){

     data = {
       status: 0,
       data: req.body }

     res.json(data);
})

module.exports = router;
