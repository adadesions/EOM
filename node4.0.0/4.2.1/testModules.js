var myLoop = require('./modules/myLoop');

data = [1,2,3,4,5,6,7];

myLoop.each(data);

console.log(myLoop.plus1loop(data));
console.log(myLoop.plusFnloop(data, function (chunk) {
    return chunk+10;
}));
console.log(myLoop.plusFnloop(data, x => x+100));
