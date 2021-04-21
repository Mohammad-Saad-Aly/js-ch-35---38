function greetUser(){
    var a = 2
    var b = 3
    var c = a+b
    return a+b

}
var r = greetUser()
alert(r)
document.write(greetUser())
greetUser()

function add(a,b){
    document.write(a+b)
}
add(2,2)
add(3,5)



function names(fname = "Saad", lname="Ali"){
    document.write(fname+" "+lname)
}
names("Ali","Hasaan")

function total(a, b, c) {
    var n = a + b + c
    return n
}
var acha = total(2, 2, 2)
document.write(acha)

function perc(tt) {
    var hmm = tt / 300 * 100;
    document.write(hmm)
}
perc(acha)

global
var a = "Saad"

function name(){
    alert(a)
}
name()

function name(){
    var a = "Saad"
    alert(a)
}
document.write(a)
function some() {

    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("time: " + theHr + ":" + theMin);
}
some()