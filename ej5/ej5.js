/*5.- Determinar en un conjunto de n números naturales:
¿ Cuántos son menores que 15 ?
¿ Cuántos son mayores que 50 ?
¿ Cuántos están en el rango entre 25 y 45 ?
todos los valores deben ser ingresados */

let numero;
let opcion;
let numeros = [];
let men15 = [];
let may50 = [];
let rango = [];
do{
    numero = parseInt(prompt("dame un numero"));
    opcion = confirm("queres agregar otro numero?");
    numeros.push(numero);

    if(numero < 15){
        men15.push(numero);
    }else if(numero > 50){
        may50.push(numero);
    }
    
    if(numero > 25 && numero < 45){
        rango.push(numero);
    }

}while(opcion == true)

document.write(`menores de 15: ${men15} (${men15.length})<br>
mayores de 50: ${may50} (${may50.length}) <br>
rango entre 25 y 45: ${rango} (${rango.length})`);