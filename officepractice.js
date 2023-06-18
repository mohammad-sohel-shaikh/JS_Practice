let isGreater = 4 > 1;

// alert( isGreater );

let name= "sohel";
// alert(`hello hi ${1}`);

// let age = prompt('How old are you?', 100);
// if(age==18) alert(`You are ${age} years old!`);
// else alert("you are not ele");

// let name=prompt("enter your name");
// alert(`hi ${name}`);

let b=[1,2,3,4,6]
let n=b.indexOf(6);
// alert(n);
let username=prompt('enter name');
function clickhandle(){

    
    let array=[
        {name:'sohel',id:1},
    {name:'zishan',id:2},
    {name:'altsmas',id:3}
]
let str = JSON.stringify(array);

console.log(str);

console.log(username);
// let userid=prompt('enter id');

let con = str.includes(JSON.stringify({name:username , id:1}));

console.log(JSON.stringify({name:username}));
// toString(array)
console.log(con);
alert(con);
}



// let n=a.indexOf();
// alert(n);
// if(a.indexOf(name))
// {
    //     alert("");
    // }
    // else{
        //     alert("not found");
        // }
        
        

 
