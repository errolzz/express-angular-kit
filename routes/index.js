
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};

exports.test = function(req, res){
  res.render('views/test.html');
};