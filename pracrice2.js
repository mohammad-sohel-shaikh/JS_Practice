function getdata(){
    URL='https://dummy.restapiexample.com/api/v1/employee/1s';
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })

}
getdata()