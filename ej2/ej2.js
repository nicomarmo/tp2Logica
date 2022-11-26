/*Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /).
Realice el algoritmo  para calcular e informar cada operación deseada entre los dos números.
Ese proceso se puede  repetir mientras lo desee el usuario. Todos los valores deben ser validados.*/

function ej2(){
    do{
        let num1 = parseFloat(prompt("Ingrese numero 1"));
        let operador = prompt("Ingrese la operación que quieras realizar (+, -, *, /)");
        let num2 = parseFloat(prompt("Ingrese numero 2"));
    
        if(operador == "+"){
            var resu = num1 + num2;
        }else if(operador == "-"){
            var resu = num1 - num2;
        }else if(operador == "/"){
            var resu = num1 / num2;
        }else if(operador == "*"){
            var resu = num1 * num2;
        }
        
        document.write(`La cuenta da ${resu} <br>`)
        var opcion = confirm("Queres hacer otra cuenta?");
    }while(opcion != false);
}