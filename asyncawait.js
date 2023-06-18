 async function asyncawait() {

    console.log("Befor fetch")
    const response= await fetch("https://api.github.com/users");
    console.log("after fetch")
    
    const users=await response.json();
    console.log("after json ")
    return users;
    
}

const a=asyncawait()
console.log(a);
a.then((data)=>{
    console.log(data)
})