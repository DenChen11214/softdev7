function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

var temp = JSON.parse(readJSON('data.json'));
var asian = function(e){
  var numStu = temp.reduce(function(a,b) {
    if(b.asian_num == "0"){
      return a
    }
    return a + b.asian_num
  },0)
  return numStu
}
console.log(asian())

var numSchoolM = function(e){
  var num = temp.filter(function(n){
    return (n.male_per > 60) && (n.male_num > 1000)
  })
  return num.length
}
console.log(numSchoolM())

var racePer = function(e){
  var fit = temp.filter(function(n){
    return n.asian_per > 20 && n.hispanic_per > 20 && n.white_per > 20 && n.black_per > 20
  })
  return fit.length / temp.length * 100
}
console.log(racePer())

var asianNum = document.getElementById("asian")
asianNum.innerHTML = asian()
var numSchool = document.getElementById("male")
numSchool.innerHTML = numSchoolM()
var ethnicity = document.getElementById("ethnic")
ethnicity.innerHTML = racePer()
