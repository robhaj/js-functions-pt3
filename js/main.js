// add scripts

console.log("sanity check!");

//sample
function test(str) {
  return "test" + str;
}
console.log(test("ing"));

//problem 1

function getStudentName(student) {
  return student.name;
}

var studentName = {name: "Robby", age: 24 };
console.log(getStudentName(studentName));

//problem 2
function getTotalLetters(strings){
  var newString = strings.join("");
  return newString.length;
}

var stringArray = ['javascript', 'is', 'not', 'python'];
console.log(getTotalLetters(stringArray));

//problem 3
function createObject(k, v) {
  var obj = {};
  obj[k]=v;
  return obj;
}
console.log(createObject('city', 'Boulder'));
