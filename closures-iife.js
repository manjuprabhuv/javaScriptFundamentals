//Verbose implementation
function counter(){
  let count = 0;
  function increment(){
    count +=1;
  }
  function get(){
    return count
  }
  return {
    increment,
    get
  };
}
const simpleCounter = counter()
console.log(`Simple count ${simpleCounter.get()}`)
simpleCounter.increment()
console.log(`Simple count ${simpleCounter.get()}`)
simpleCounter.increment()
console.log(`Simple count ${simpleCounter.get()}`)

// With an iife- Immediately invoked function execution
const count = function (){    
    let count = 0;  
    return {
      increment : function () {count +=1},
      get : function () { return count}
    }
}()
console.log(`counter ${count.get()}`)
count.increment()
console.log(`counter ${count.get()}`)
count.increment()
console.log(`counter ${count.get()}`) 
