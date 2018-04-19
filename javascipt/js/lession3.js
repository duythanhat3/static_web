function getMyProfile(name, age, job) {
    var profile = 'Toi ten la ' + name + ', toi ' + age + ' tuoi. Toi la mot ' + job;
    document.getElementById('my-profile').innerHTML = profile;
}

function hideMyProfile(){
    document.getElementById('my-profile').innerHTML = '';
}

function getNameStudent(student){ 
    var name = student.name;
    document.getElementById('student').innerHTML = name;    
}

function getAgeStudent(student) {
    var age = student.age;
    document.getElementById('student').innerHTML = age;
}

function learning(student) {
    student.learn();
}

var student = {
    name: 'An',
    age: 19,
    learn: function () {
        alert('Tui dang hoc bai do');
    }
}
