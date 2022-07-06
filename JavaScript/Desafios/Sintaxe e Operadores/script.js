

let n1= 0
let n2= 0
function comparacao(n1, n2){
    (n1 == n2)? alert(`${n1} e ${n2} são iguais`) : alert(`${n1} e ${n2} são diferentes`)
    
    const result = n1+n2; 

    if(result>10 && result<20){
        alert(`Sua soma é ${result} , que é maior que 10 e menor que 20`)

    }else if (result>20){
        alert(`Sua soma é ${result} , que é maior que 10 e maior que 20`)
    }else{
        alert(`Sua soma é ${result} , que é menor que 10 e menor que 20`)
    }
}
console.log(comparacao(9, 2))