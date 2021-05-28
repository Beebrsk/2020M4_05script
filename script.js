document.getElementById('ok').addEventListener('click',function(e)
{
    alert('ok ')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('mousemove',(event)=>
{
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
document.getElementById('no').addEventListener('click',function(e)
{
    alert('no ')
    console.log(e)
}
)
