const students=[
    {Name :"sohel",subject:"pyh"},
    {Name:"sakib",subject :"maths"}
]
function enrollstu(student,callback1){
    setTimeout(() => {
        console.log("student has been enroll");
        students.push(student)
        callback1();
        
    }, 3000);
}
function getstu(){
    setTimeout(() => {
        
        let str="";
        students.forEach(element=>{
            str += `<li> ${element.Name}</li>`
            
        });
        document.getElementById('students').innerHTML=str;
        console.log("student have been fetch")
    }, 1000);
}

let newStudent={Name:'zaid',subject:'science'}
enrollstu(newStudent,getstu);
