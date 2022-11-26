/*1. - . Se le solicita al usuario que
ingrese las notas del parcial de los alumnos de una comisión. Se  desconoce la cantidad de alumnos.
Realice el algoritmo para informar:
a. El porcentaje de alumnos aprobados (nota igual o superior a 4).

b. El porcentaje de alumnos desaprobados (nota inferior a 4).

c. El promedio de las notas.

Tenga en cuenta que solamente las notas pueden ir del 1 al 10.*/

function ej1(){

    let cantAlumnos = parseInt(prompt('Cuantos alumnos tiene en la clase?'));
    let notas = [];
    let aprobados = [];
    let desaprobados = [];

    for(let i = 0; i < cantAlumnos; i++){
        let nota = 0;
        do{
            nota = parseFloat(prompt("Cuanto se sacó el alumno " + (i+1)));
            if(!(nota >= 1 && nota <= 10)){
                alert('tenes que poner un numero del 1 al 10');
            }
        }while(!(nota >= 1 && nota <= 10));
    
    
        if(nota >= 4){
        notas.push(nota);
        aprobados.push(nota);
        }else if(nota < 4){
            notas.push(nota);
            desaprobados.push(nota);
        }
    }
    let total = notas.reduce(
        (suma, item) => suma + item, 0);
    
    var porAp = (aprobados.length * 100) / cantAlumnos;
    var porDes = (desaprobados.length * 100) / cantAlumnos;
    var promedio = (total / cantAlumnos);
    
    
    
    document.write(`La cantidad de alumnos es ${cantAlumnos}<br>
    La cantidad de aprobados es ${aprobados.length} - <strong>${porAp}</strong>%<br>
    La cantidad de desaprobados es ${desaprobados.length} - <strong>${porDes}</strong>%<br>
    El promedio de todas las notas es de <strong>${promedio}</strong><br>
    `);
}






