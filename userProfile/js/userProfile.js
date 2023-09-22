/**
 * 
 * Write a program that prompts a user for their data: 
 * username, age, and a list of their favorite movies. 
 * Store the information and then showcase it in the console. 
 * Take note that the output for the films should add a small message like: 
 * 'The film {film} is one of my favorites'.
 * 
 */

let age = prompt("Ingresa tu edad: ");
let username = prompt("Ingresa tu nombre: ");
console.log(username, age);
let numMovies = prompt("Cuantas peliculas quieres ingresar?");
    for (let ini = 0; ini < numMovies; ini++) {
        let film = prompt("Por favor ingresa tu Pelicula: ");
        console.log("The film " + film + ' is one of my favorites');
    }