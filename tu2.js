let element1=document.createElement('li');
let ele=document.createElement('h5');
ele.innerHTML='<b> hello hi byy</b>';
ele.className='ele1';
ele.id='ele1';
// ele.setAttribute('')
element1.appendChild(ele);
console.log(element1);
// let ul=document.querySelector('ul.this');
// ul.appendChild(element1);

let element2=document.createElement('li')
console.log(element2);
element2.innerHTML='<b> <i> hello good morning</i> </b>';
element2.className='ele2';
element2.id='ele2'; 
element1.replaceWith(element2);
let so=document.getElementById('sohe');
so.replaceChild(element1,document.getElementById('soh'));
// --------------------------------------------------
// let container=document.querySelector('.container');
// container.removeChild(document.getElementById('sohel1'))
// console.log(container.children[0].children[0].children);