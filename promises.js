function fucn2(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            let error=false;
            if(!error) {
                console.log("error resolve:")
                resolve();
            }
            else{
                console.log("error reject")
                reject("somethig wrong");
            }
        
            
        }, 2000);
        
    })
}
fucn2().then(() => {
    console.log("me: resolve error")
}).catch((err) => {
    console.log("me:error not resolve " + err)
}); 