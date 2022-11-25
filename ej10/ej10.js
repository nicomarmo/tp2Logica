/*10.-  Reciba un número ingresado por el usuario en la página y determine si el número es un número primo.
Número primo: Un número que solo puede ser divisible por 1 y él mismo.
1 no es un número primo ni un número compuesto. 
Un número primo debe ser un número natural mayor que 1. */

numero = parseInt(prompt('Ingresa un numero'));

    
    var cont = 0;
    for(let i = 0; i <= numero; i++){
        if(numero % i == 0){
            cont++
        }
    }

    if(cont == 2){
        document.write(numero + ' el numero es primo <br>')
    }else{document.write(numero + ' el numero NO es primo <br>')}
