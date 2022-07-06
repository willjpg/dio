function substituiPares(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 0){
            console.log("Você é zero!!")
        }else if( arr[i]% 2===0){
            console.log(`Substituindo ${arr[i]} por 0`)
            arr[i]=0;
        }
    }


    return arr;
}

let arr1 = [1, 3, 4, 6, 80, 33, 23, 90]

const meuObjeto = {
    chave: valor
   }
   
   console.log(meuObjeto.chave); 
   console.log(meuObjeto[chave]);