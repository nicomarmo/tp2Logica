/*8.- realizar un ejercicio en el cual se visualicen los números primos del 1 al 20. */

function ej8(){
    for(let j = 1; j <= 20; j++){
        console.log(j)
        
        var cont = 0;
        for(let i = 0; i <= j; i++){
            if(j % i == 0){
                cont++
            }
        }
    
        if(cont == 2){
            document.write(j + ' el numero es primo <br>')
        }
    }
}
