// LocalStorage

localStorage.setItem("Name","sohel");
localStorage.setItem("Name2","Sakib");

let sabji=['aaalu','tamata','fullgobi'];
localStorage.setItem('Sabji',JSON.stringify(sabji))
let name=JSON.parse(localStorage.getItem('Sabji'));

console.log(name);

// SessionStorage 


sessionStorage.setItem("Name","sohel");
sessionStorage.setItem("Name2","Sakib");