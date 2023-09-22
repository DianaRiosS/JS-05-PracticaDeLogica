/**
 * Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */


let numero = prompt("Ingresa el un numero del que deseas calcular su factorial");

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

let resultado = factorial(numero);
alert (`El factorial de ${numero} es ${resultado}`);