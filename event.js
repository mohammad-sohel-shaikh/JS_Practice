// let objevent=document.getElementById('eventid');
// objevent.addEventListener('click',func1);
// objevent.addEventListener('dbclick',func2);
// function func1(e)
// {
//     console.log("clicked on button",e)
//     e.preventDefault();
// }

// function func2(e)
// {
//     console.log("duble click on button",e);
//     e.preventDefault();
// }
// console.log(objevent);
// wi
// window.addEventListener('keydown',func1)    
// function func1(e)
// {
//     console.log(e);
// }
// window.addEventListener('scroll',funct2);
// function funct2()
// {   
//     if(window.pageOffset>'50')
//     {
//         document.body.style.backgroundColor='red';
//     }
//     else {
//         document.body.style.backgroundColor='white';

//     }
//     console.log("scrolling.....")

// function funct2(e) {
//     if(e.<0){
//         console.log("scollin up..");
//     }
//     else if(e.deltaY>0){
//         console.log('scolling down');

//     }

// }
// document.querySelector('.container').addEventListener('mouseover',function()
// {
//     console.log("mouce over ");
// });
// document.querySelector('.container').addEventListener('mouseleave',function()
// {
//     console.log('mouse leave');
// });
document.querySelector('.container').addEventListener('mousemove',function(e)
{
    // console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(
    ${e.offsetX},${e.offsetX},${e.offsetY})`;
});
