function fruitIterator(values){
    let netxIndex=0;
    return{
        Next: function(){
            if(netxIndex <values.length){
                return {
                value:values[netxIndex++],
                Done:false
                }
            }
            else{
                return{
                Done:true
                }

            }
        }
    }

}
const myArrary=['Apple','Banana','Watermallon','Mango']
console.log("MyArrary is:",myArrary);

const fruit =new fruitIterator(myArrary);
console.log(fruit.Next().value);
console.log(fruit.Next().value);
console.log(fruit.Next().value);
console.log(fruit.Next().value);
console.log(fruit.Next().value);