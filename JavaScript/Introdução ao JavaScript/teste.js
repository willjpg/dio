// //var preco = 2
// var desconto =0.2
// const preco = 2;


// var total=preco-desconto
// console.log(total);
    // function soma(a,b){ 
    //     return a + b;
    
    // }

    // soma(3,5);

    // console.log("Hello world") //'node teste.js' no console
    
    function returnEvenValues(array){
        let evenNums = [];

        for(let i = 0; i< array.length;i++){
            if(array[i] % 2 === 0){
                evenNums.push(array[i]);   
            }else{
                console.log(`${array[i]} não é par`)
            }          
        }
    console.log('os números pares são: '+ evenNums);
}

let array = [1, 2, 4, 5, 6, 7];

returnEvenValues(array);