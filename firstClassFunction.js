function sayHello(msg){
    console.log(`called from ${msg}`)
}
//Functions can be assigned to a variable, array values or object
const helloFunction = sayHello;
helloFunction('variable')
const arr = [helloFunction]
arr[0]('array')
const obj  = {
    helloFunction
}
obj.helloFunction('object')

// Function can be passed as an argument
function helloFunctionInvoker(hello){
    hello('function args')
}
helloFunctionInvoker(sayHello)

// Function can be returned
returnHelloFunction = function returnHelloFunction(){
    return sayHello
}
returnHelloFunction('return function')