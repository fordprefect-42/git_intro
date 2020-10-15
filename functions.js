console.log(beta())
function alpha(){
    return 'A';

}
function beta(){
    return 'B';
}
let gamma=function(){
    return 'c';
}
function area(height,width){
    
    if(!width)
    {
        return Math.PI*height*height
    }
    return height*width;
}
console.log('area 3 4',area(3,4))
console.log('area 3',area(3))

function hello() {
    console.log("hello world!!" +arguments[0] +arguments[1])
}
hello(1,2)