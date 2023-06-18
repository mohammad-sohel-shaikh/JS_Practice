let myMap=new Map()
let key1='mystr',key2={},key3=function(){};
myMap.set(key1,"this is a string")
myMap.set(key2,"this is a Empty object")
myMap.set(key3,"this is a Empty fuction")
console.log(myMap);
let a=myMap.get(key1);
// console.log(a);
myMap.forEach((value,key) => {
    console.log("key is " +key);
    console.log("value is " +value);
    
});
