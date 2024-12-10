const tap = document.getElementById('span');

const drop = document.getElementById('down');

tap.addEventListener('click', function(e){
    e.preventDefault();
    // alert("New workings")
    drop.classList.toggle("show");
    tap.classList.toggle("menu")
})

window.addEventListener('load',function(){
    setTimeout(()=>{
        document.getElementById('loader').style.display= 'none';
        
    },3000)
})