var _ = require ('lodash');

var worker = function(list) {
    return _.sortBy(list, 'quantity').reverse();
}

module.exports = worker;