/*3.- Se le solicita al usuario que ingrese una cantidad desconocida
de números. Realice el algoritmo  para calcular e informar:
a. La sumatoria de los valores impares ingresados.
b. El menor valor ingresado.
c. El mayor valor ingresado.
Todos los valores deben ser validados.*/

let opcion;
let numeros = [];
let impares = 0;
do{

    let numero = parseFloat(prompt("Ingrese un numero"));
    
    numeros.push(numero);

    opcion = confirm("Queres ingresar otro numero?");

} while(opcion == true)

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 != 0){
        impares = impares + numeros[i];
    }
}

let numMin = 0; 
for(let i = 0; i < numeros.length; i++){
    if(i == 0){
        numMin = numeros[i];
    }else if(i > 0){
        if(numMin > numeros[i]){
            numMin = numeros[i]
        }
    }
}

let numMax = 0; 
for(let i = 0; i < numeros.length; i++){
    if(i == 0){
        numMax = numeros[i];
    }else if(i > 0){
        if(numMax < numeros[i]){
            numMax = numeros[i]
        }
    }
}


document.write(`numeros: ${numeros}<br>
total: ${impares}<br>
numero minimo: ${numMin}<br>
numero maximo: ${numMax}<br>`);
