let dates = [
    { name: "sohel", id: 1 },
    { name: "abc", id: 2 },
    { name: "xyz", id: 3 }
]

function fetchData() {

    setTimeout(() => {

        let result = '';
        dates.forEach((data, index) => {

            result += `<li>${data.name}</li>`;

        })

        document.body.innerHTML = result;

    }, 1000);
}
// fetchData();

function pushDatad(data) {
    dates.push(data);

    setTimeout(() => {

    }, 2000);


}

// function pushDatad(data,callback){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             dates.push(data);
//             let  error=false;
//             if(!error)
//             {
//                 resolve();
//             }
//             else{

//                 reject("something wrong");
//             }
//         } ,2000);

//     })
// }


// pushDatad({ name: "ziad", id: 1 }).then(fetchData).catch((err)=> console.log(err));

async function asy() {

    await pushDatad({ name: "ziad", id: 4})
    fetchData()

}
// asy();

let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30
