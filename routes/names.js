var url = require('url');

var names = {};

/*
 * PUT name
 */

exports.add = function(req, res){
    var query = url.parse(req.url, true).query;
    //console.log('query: ' + JSON.stringify(query));
    var name = query.name;
    var val = query.value;
    names[name] = val;
    var str = 'adding: ' + name + ' ' + val + '\n';
    res.send(str);
};

exports.clear = function(req,res) {
    names = {};
    res.send('ok');
}

exports.list = function() {
    return names;
}

exports.get = function(req, res) {
    var query = url.parse(req.url, true).query;
    res.send('name: ' + query.name + ' value: ' + names[query.name] + '\n');
}
