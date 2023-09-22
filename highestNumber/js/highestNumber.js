/**
 * Write a program that asks for 10 numbers. 
 * Using logical operators and any other javascript functions/structures 
 * you've seen before, determine and output the highest of those numbers.
 * 
 */

let numeros = [];

for(let i = 0; i < 10; i++){
    let nuevoNumero = prompt("Ingresa un numero");
    nuevoNumero = numeros.push(nuevoNumero);
    numeros.push(parseFloat(nuevoNumero)); // convierte los valores ingresados a numero
}
const numeroMayor = Math.max(...numeros);
console.log(`El numero mayor es: ${numeroMayor}`);
