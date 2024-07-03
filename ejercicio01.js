// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota negativa, utilizar las tres estructuras repetitivas.
const prompt = require('prompt-sync')({sigint: true});

let nota;
let sumar = 0;
let contador = 0;

nota = parseFloat(prompt("Ingrese una nota (negativa para finalizar):"));
while (nota >= 0) {
    sumar += nota;
    contador++;
    nota = parseFloat(prompt("Ingrese una nota (negativa para finalizar):"));
}

if (contador > 0) {
    let promedio = sumar / contador;
    console.log("El promedio es: " + promedio);
} else {
    console.log("No se ingresaron notas válidas.");
}

