const tap = document.getElementById('btn');
const drop = document.getElementById('drop');


tap.addEventListener('click', function(e){
    e.preventDefault();
    // alert("new")
    drop.classList.toggle("slide");
    tap.classList.toggle("rotate")
})

const boot = document.getElementById('boot')
const up = document.getElementById('up')

boot.addEventListener('click', function(e){
    e.preventDefault();
    // alert("new")
    up.classList.toggle("sliding")
    boot.classList.toggle('cross')
})

// if(window.scrollY > 20){
    // document.getElementById("logo").textContent = ""
// }

const text = document.getElementById("mytest")
let counter = 0;
let mytext = "developer.";

function textDisplay(){
    
    if(counter<mytext.length){
        text.textContent+=mytext[counter];
        counter++;

    }else if(counter>=mytext.length){
        text.textContent="";
        counter = 0;
    }
    
    setTimeout(textDisplay, 300)
}
textDisplay();

