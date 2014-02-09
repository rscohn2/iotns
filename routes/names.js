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
    var str = 'adding: ' + name + ' ' + val;
    res.send(str);
};

exports.list = function() {
    return names;
}
