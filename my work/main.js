const tap = document.getElementById('span');

const drop = document.getElementById('down');

tap.addEventListener('click', function(e){
    e.preventDefault();
    // alert("New workings")
    drop.classList.toggle("show");
    tap.classList.toggle("menu")
})