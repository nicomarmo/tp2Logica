/*9.  imprima la suma de todos los números impares entre 1 y 100 */
let suma = 0;
for(let i = 1; i <= 100; i+=2){
    suma = suma + i
    console.log(i)
}

document.write(`La suma de todos los numeros impares entre 1 y 100 es: <strong>${suma}<strong>`)