
var say = console.log

var counternum = 0;

var counter = document.getElementById("counter");

var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");

var rollBtn = document.getElementById("roll")

var result = document.getElementById("result")
increase.onclick = function(){
    counternum ++;
    counter.textContent = counternum;
};
decrease.onclick = function(){
    counternum --;
    counter.textContent = counternum;
};
reset.onclick = function(){
    counternum = 0;
    counter.textContent = counternum;
};

rollBtn.onclick = function(){
    result.textContent = String(RandomNumber(1,6))
}

var RandomNumber = function(min, max){
    var ranNum = Math.floor(Math.random() * (max - min)) + min
    return ranNum
};

console.log(RandomNumber(50,100))

var fullName = "U r dum"

var firstName = fullName.slice(0,fullName.indexOf(" "))
var middleName = fullName.slice(fullName.indexOf(" ")+1,fullName.lastIndexOf(" "))
var lastName = fullName.slice(fullName.lastIndexOf(" ")+1)

say(firstName)
say(middleName)
say(lastName)

