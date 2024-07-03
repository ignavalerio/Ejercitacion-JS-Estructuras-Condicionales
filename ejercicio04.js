// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000


const prompt = require('prompt-sync')({sigint: true});

//números impares desde 1 hasta 999
console.log("Números impares del 1 al 999:");
for (let i = 1; i <= 999; i += 2) {
    console.log(i);
}

// Imprime números pares desde 2 hasta 1000
console.log("\nNúmeros pares del 2 al 1000:");
for (let i = 2; i <= 1000; i += 2) {
    console.log(i);
}