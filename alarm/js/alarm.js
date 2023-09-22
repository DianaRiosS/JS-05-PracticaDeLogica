/**
 * Write a program that asks a user for the amount of seconds needed until an alarm (message) 
 * is executed alongside a text to show once those seconds have passed in real time.
 * 
 */

let segundos = prompt("Cuantos SEGUNDOS quieres esperar?");
let milisegundos = (segundos*1000);
setTimeout(() => alert(`Gracias pos esperar, han transcurrido ${segundos} segundos`),milisegundos);