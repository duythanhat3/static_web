// toString()
var year = 1999;
var yearString = year.toString();
console.log(typeof yearString);

// toFixed()
var rateAvegare = 7.73274362842;
var rateAvarageFix = rateAvegare.toFixed(3);
console.log(rateAvegare + ' - ' + rateAvarageFix);

// Number()
var year = Number(true);
console.log(year);

var not = Number(false);
console.log(not);

var time =  new Date();
console.log(Number(time));

var name = 'tien dat';
console.log(Number(name));

var birthYear = '1999';
console.log(Number(birthYear));

var birthDay = '01 03 1999';
console.log(Number(birthDay));

// parseInt()
var year = parseInt(true);
console.log(year);

var not = parseInt(false);
console.log(not);

var time =  new Date();
console.log(parseInt(time));

var birthYear = '1999';
console.log(parseInt(birthYear));

var stringNum = 'haha 1999';
console.log(parseInt(stringNum));

// parseFloat()
var year = parseFloat(true);
console.log(year);

var birthYear = '1999';
console.log(parseFloat(birthYear));

var floatNum = '25.333';
console.log(parseFloat(floatNum));
console.log(parseInt(floatNum));

// MAX_VALUE
var maxNum = Number.MAX_VALUE;
console.log(maxNum);

var minNum = Number.MIN_VALUE;
console.log(minNum);

// isInteger()
var a = '1999';
console.log(Number.isInteger(a));

var b = 1999;
console.log(Number.isInteger(b));

// isNan() gia tri trong ham isNan bi ep kieu number
var a = '1999';
console.log(isNaN(a));

var b = 'Hello';
console.log(isNaN(b));



