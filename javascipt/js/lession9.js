var students = ["An", "Hanh", "Dat"];

var length = students.length;

for (var i = 0; i < length; i++) {

    var _value = students[i];
    if(_value === "An"){
        console.log("An buon ngu!");
    }

    if(_value === "Hanh"){
        console.log("Hanh di choi");
    }
    
    if(_value === "Dat"){
        console.log("Dat di lam");
    }

}

// toString
var text = students.toString();
console.log(text);

// push()
students.push("Thanh");
console.log(students);

// pop()
students.pop();
console.log(students);

// unshift()
students.unshift("Thanh");
console.log(students);

// shift()
students.shift();
console.log(students);

// concat()
var newStudents = ["A", "B", "C"];
var totalStudens = students.concat(newStudents, ["E", "F"]);
console.log(totalStudens);

// slice()
var newStudents = students.slice(-3,-1);
console.log(newStudents);