var names = require('./names');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'IOTNS', names: names.list() });
};
