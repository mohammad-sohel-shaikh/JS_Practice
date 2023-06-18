// let userName = 'John';

// function showMessage(userName) {
//    userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // the function will create and use its own userName
// alert( userName ); 
// showMessage(userName);

// alert( userName ); 
// --------------------------------------------------------

// let user = {
//     name: "John"
//   };
  
//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
//   alert( JSON.stringify(descriptor ) );
   
// ----------------------------------------------------------

// let user = {
//     name: "John"
//   };
  
//   Object.defineProperty(user, "name", {
//     writable: false
//   });
  
//   user.name = "Pete"; // Error: Cannot assign to read only property 'name'
// alert(user.name);


// -----------------------
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.type="text/javascript";
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
    alert(`Cool, the script ${script.src} ${script.type} is loaded`);
    alert( _ ); // function declared in the loaded script
  });
  