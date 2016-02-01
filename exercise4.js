var _ = require ('lodash');

var worker = function(cities) {
    var results = {
        hot: [],
        warm: []
    };
    function tempChecker(city) {
        return city > 19;
    }
    _.forEach(cities, function(city, name) {
        if (_.every(city, tempChecker)) {
            results.hot.push(name);
        } else if (_.some(city, tempChecker)) {
            results.warm.push(name);
        }
    });
    return results;
};


module.exports = worker;