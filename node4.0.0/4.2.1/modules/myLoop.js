'use strict'

exports.each = function (dataSet) {
    return dataSet.forEach(x => {console.log(x)});
};

exports.plus1loop = function (dataSet) {
    return dataSet.map(x => x+1);
}

exports.plusFnloop = function (dataSet, fn) {
    return dataSet.map(x => fn(x));
}
