// length
var hello = 'Hello kitty';
console.log('Chieu dai cua bien hello la ' + hello.length);

// toUpperCase()
console.log(hello.toUpperCase());

// toLowerCase()
console.log(hello.toLowerCase());

// concat()
var anh = 'anh';
var em = 'em';
var love = anh.concat(' yeu ',em);
console.log(love);

// indexOf()
var cha = "Hai cha cON buoc di tren cat con te bay ra cat";
var con = "con";
var indexOfCon = cha.indexOf(con);
console.log(indexOfCon);

// lastIndexOf()
var lastIndexOfCon = cha.lastIndexOf(con);
console.log(lastIndexOfCon);

// charAt()
var char = cha.charAt(8);
console.log(char);

// substr()
var string = cha.substr(8, 11);
console.log(string);

// substring()
var sstring = cha.substring(8, cha.length);
console.log(sstring);

// replace()
var newCha = cha.replace('buoc di', 'chay');
console.log(newCha);

// match()
var con = cha.match(/cOn/gi);
console.log(con);
