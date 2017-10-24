const list = require("./modules/source").data;
const handler = require("./modules/handler");
// const styles = require("./scss/styles.scss");
const moment = require("moment");
const _ = require("lodash");


function getElements() {
    handler.handle(list);
    _.sortBy(list, function(el) { return el.id; })
    return list;
}

console.log(getElements());
console.log(moment());

module.exports = {
    getElements: getElements
};
