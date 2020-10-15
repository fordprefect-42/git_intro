//pass function as an argument 
//in js we can do so
function greet(name){
    console.log('hello',name)
}
function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name)
    }
    return greet
}
function getname(){
    return document.getElementById('namebox').value
}

let g1 = createGreeter('good Morning')
let g2 = createGreeter('Good Evening')
console.log(greet('akshay'))
console.log(g1('akshay'))
console.log(g2('akshay'))
let g3= greet('akshay')
console.log(typeof g3)
console.log(typeof g1)