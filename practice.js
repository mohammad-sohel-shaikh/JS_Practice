function func1(){
    return new Promise(function(resolve,reject){
        
        setTimeout(() => {
            const error=false;
            if(!error){
                console.log("function ! your has been resolve")
            }
            else{
                console.log("function ! your has not been resolve")
            }            
        }, 2000);
    })
}
func1().then(function () {
    console.log("sohel thanks bro to solve the problem")
    
}).catch(function(){
    console.log("sohel bad bro you did not complete your work")
})