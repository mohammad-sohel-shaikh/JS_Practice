function fucn2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = false;
            if (!error) {
                console.log("error resolve:")
                resolve();
            }
            else {
                console.log("error reject")
                reject("somethig wrong");
            }


        }, 2000);

    })
}
const students = [
    { Name: "sohel", subject: "pyh" },
    { Name: "sakib", subject: "maths" }
]
function enrollstu(student, callback1) {
    setTimeout(() => {
        console.log("student has been enroll");
        students.push(student)
        callback1();

    }, 3000);
}
function getstu() {
    setTimeout(() => {

        let str = "";
        students.forEach(element => {
            str += `<li> ${element.Name}</li>`

        });
        document.getElementById('students').innerHTML = str;
        console.log("student have been fetch")
    }, 1000);
}

fucn2().then(() => {
    let newStudent = { Name: 'zaid', subject: 'science' }
    enrollstu(newStudent, getstu);


}).catch((err) => {
    console.log("something unaccepted occur",+err)

}); 