let s=document.getElementById('heading')
s.addEventListener('click',function(e)
{
    console.log("you click successfully");
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.offsetX);
});