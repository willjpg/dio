let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    count++;
    CURRENT_NUMBER.innerHTML = count;
    numRed();
    numTime();
}

function decrement(){
    count--;
    CURRENT_NUMBER.innerHTML = count;
    numRed();
   numTime();
}

function reset(){
    count=0;
    CURRENT_NUMBER.innerHTML = count;
    numRed();
}



function numRed(){ 
if(count<0){
    CURRENT_NUMBER.style.color = 'red'
}else if(count>0){
    CURRENT_NUMBER.style.color = '#ccff33'
}else{
    CURRENT_NUMBER.style.color = 'white'
}
}

function numTime(){
    if(count>=10){
        count=0
    }


}

function addEventos(){//substitui o onClick dentro  do Index
    // document.getElementById("CURRENT_NUMBER")
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


