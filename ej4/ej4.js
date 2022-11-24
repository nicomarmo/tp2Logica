/*4.-  Como resultado de una encuesta se recogen los siguientes
datos: sexo (H: Hombre, M: Mujer),  edad (en años) y altura
(en centímetros). Realice el algoritmo para calcular einformar: 
a. El porcentaje de mujeres mayores a 25 años.
b. El porcentaje de hombres menores de 18 años.
c. El promedio de edad de las mujeres.
d. El promedio de altura de los hombres.
e. La menor edad ingresada.
f. La mayor altura ingresada.
Todos los valores deben ser validados.*/

let sexo;
let anos;
let altura;
let opcion;
let total = 0;

let mh = [];
let edades = [];
let medidas = [];
do{
    sexo = prompt('Sexo de la persona? (H/M)');
    mh.push(sexo);
    anos = parseInt(prompt('Cuantos años tiene la persona?'));
    edades.push(anos);
    altura = parseFloat(prompt('Cuanto mide?'));
    medidas.push(altura);
    opcion = confirm("Queres ingresar otra persona?");
    total++;
}while(opcion == true)


let muj25 = 0; 

for(let i = 0; i < mh.length; i++){
    if(sexo == 'm' && anos >= 25){
        muj25 =+ 1;
    }
}

let porMay25 = (muj25 * 100) / total;

document.write(`total ${total} <br>
cant muj mayores 25: ${muj25}<br>
porcentaje ${porMay25}%`)
