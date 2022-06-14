let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    count++;
    CURRENT_NUMBER.innerHTML = count;
}

function decrement(){
    count--;
    CURRENT_NUMBER.innerHTML = count;

   
}

function reset(){
    count=0;
    CURRENT_NUMBER.innerHTML = count;
}
// function numRed(){
//     if(CURRENT_NUMBER<0){
//         CURRENT_NUMBER.style.color ='red'
//     }
// }


function addEventos(){//substitui o onClick dentro  do Index
    // document.getElementById("CURRENT_NUMBER").addEventListener("click", numRed)
    document.getElementById("adicionar").addEventListener("click", increment )
    document.getElementById("subtrair").addEventListener
    ("click", decrement )
    document.getElementById("resetar").addEventListener
    ("click", reset)
} 
window.addEventListener("load",addEventos)

function test(){
    kdowdpo;
}


