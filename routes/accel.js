var url = require('url');

var vals = [];

/*
 * POST point
 */

exports.add = function(req, res){
    var val = req.body;
    var valString = JSON.stringify(val, null, 4);
    console.log('body: ' + valString)
    vals.push(val);
    var str = 'adding: ' + valString + '\n';
    res.send(str);
};

exports.clear = function(req,res) {
    vals = [];
    res.send('ok');
}

exports.list = function(req, res) {
    res.send(JSON.stringify(vals, null, 4));
}

