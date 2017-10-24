const _ = require("lodash");

function modifyArray(array) {
    _.each(array, function(element) {
        element = element.name + " " + element.id;
    });
}

module.exports = {
    handle: modifyArray
};