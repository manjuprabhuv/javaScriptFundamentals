const myIntArray = [1, 2, 3];
const myStrArray = ['a', 'b', 'c'];
Array.prototype.mymap = function(callback){
    const result = [];
    for(let index = 0; index<this.length; index++){
        result.push(callback(this[index], index, this))
    }
    return result;
};

Array.prototype.myForEach = function(callback){
    for(let index = 0; index<this.length; index++){
        callback(this[index], index, this)
    }
};
Array.prototype.myReduce = function(callback){
    let collector;
    for(let index = 0; index<this.length; index++){
        if(index === 0){
            collector = this[index]
        }
        if(index === this.length-1){
            break;
        }        
        collector = callback(collector,this[index+1], this)
    }
    return collector
};
console.log(myIntArray.mymap((element)=>{
    return element+1
}));
myIntArray.myForEach((element) => {
    console.log(`The value is ${element}`)
});
console.log(myIntArray.myReduce((a,b)=>{
    return a+b
}));

console.log(myStrArray.mymap((element)=>{
    return element+'a'
}));
myStrArray.myForEach((element) => {
    console.log(`The value is ${element}`)
});
console.log(myStrArray.myReduce((a,b)=>{
    return a+b
}));