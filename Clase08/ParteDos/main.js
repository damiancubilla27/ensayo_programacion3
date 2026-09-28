// Arrays

// Array con constructor
let productos = new Array(
    {codigo:123, nombre:"monitor",categoria:"Periferico", precio: 130},
    {codigo:124, nombre:"teclado",categoria:"Periferico", precio: 30},
    {codigo:125, nombre:"tryzen 7 8000",categoria:"Componente", precio: 400},
    {codigo:126, nombre:"Asrock 8550",categoria:"Componente", precio: 200});

// Corchetes literales
let num = [4, 23, 45, 657, 234];
num[0] = "banana";
num[1] = "manzana";
console.log(num);

console.log(productos.length); // saber la longitud

console.log(num.push("Mandarina")); // Ingresa un nuevo elemento
console.log(num);

console.log(num.pop()); // Quita el ultimo elemento
console.log(num);

num.splice(0,2); // Extrae elementos segun los parametros
console.log(num);

console.log(num.sort()); // Muestra que para los numeros no sirve sort

let palabras = ["Leo", "Horacio", "Martin", "Alberto"];
console.log(palabras);
console.log(palabras.sort()); // Ahora si funciona y acomoda alfabeticamente
console.log(palabras);

console.log("-----------------------------------------");

console.log(num);
console.log(num.sort((num1, num2) => {
    if(num1 > num2){
        return 1;
    }else if(num1 < num2){
        return -1;
    }else{
        return 0;
    }
}));

console.log(num.reverse());

num.sort((num1, num2) => num1 - num2);
console.log(num);

console.log("-----------------------------------------");
// Map
let copiaPalabras = palabras.map((nombre, indice, palabras) => {
    console.log(indice);
    
    return nombre.length;
});

console.log(copiaPalabras);
console.log(copiaPalabras.sort());

console.log("-----------------------------------------");
// Filter
// Los elementos que son componentes
let componentes = productos.filter((producto, indice) => {
    return producto.categoria == "Componente";
});

console.log(componentes);

// producto mas barato
console.log(productos.filter((productos) => {
    return productos.precio < 100;
}));

console.log("-----------------------------------------");
// Reduce
const totalValor = productos.reduce((valorActual, elemActual, indice) => {
    console.log(`Valor Actual = ${valorActual}`);
    console.log(`${indice + 1} Valor elemento = ${elemActual.nombre}`);
    return valorActual + elemActual.precio;
}, 0);
console.log(totalValor);

let cantPorCategoria = productos.reduce((acumulado, elemento) =>{
    if(!acumulado[elemento.categoria]){
        acumulado[elemento.categoria] = 0;
    }
        acumulado[elemento.categoria] += 1;

    return acumulado;
}, {});

console.log(cantPorCategoria);
