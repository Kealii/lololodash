var _ = require ('lodash');

var worker = function(list) {
    return _.forEach(list, function(city) {
        if(city.population > 1){
            city.size = 'big';
        } else if (city.population > .5) {
            city.size = 'med';
        } else {
            city.size = 'small';
        }
    })
}

module.exports = worker;