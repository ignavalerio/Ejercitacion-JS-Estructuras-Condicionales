// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.
const prompt = require('prompt-sync')({sigint: true});

// Solicitar al usuario que ingrese los valores de a y b (enteros positivos)
let a = parseInt(prompt('Ingrese el valor de a (entero positivo): '));
let b = parseInt(prompt('Ingrese el valor de b (entero positivo): '));

// Verificar que a y b sean enteros positivos
if (a < 0 || b < 0 || Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Debe ingresar valores enteros positivos.');
} else {
    let cociente = 0;
    while (a >= b) {
        a -= b;
        cociente++;
    }
    console.log(`División entera de ${a} entre ${b}:`);
    console.log(`Cociente: ${cociente}`);
    console.log(`Resto: ${a}`);
}
