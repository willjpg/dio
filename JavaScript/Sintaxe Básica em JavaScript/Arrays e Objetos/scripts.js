// o que são Vetores e arrays

// //declarando array
// let array =['string', 1, true];
// console.log(array);

//pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['oi']];
// console.log(array[4]);

// forEach() – itera um array;
// • push() – add item no final do array;
// • pop() – remove item no final do array;
// • shift() – remove item no início do array;
// • unshift() – add item no início do array;
// • indexOf() – retorna o índice de um valor;
// • splice() – remove ou substitui um item pelo índice;
// • slice() – retorna uma parte de um array existente;

// array.forEach(function(item, index){console.log(item, index)});


// array.push('novo item');
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift('primeiro item');
// console.log(array);

// console.log(array.indexOf(true));


// //apara entre o indice 0 e 2
// array.splice(0, 2);
// console.log(array);


// // pega os indices 0 a 2 e e retorna no novoArray
// let novoArray = array.slice(0, 2);
// console.log(novoArray);



// Objetos

let obj = { string: 'String', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objectInterno' }};
console.log(obj);

var string = obj.string;
console.log(string);

var arrayInterno = obj.array;
console.log(arrayInterno);

var { string, number, boolean} = obj
console.log( string, number, boolean);

