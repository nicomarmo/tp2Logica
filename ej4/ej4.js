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
let muj25 = 0; 
let hom18 = 0; 
let mujAge = [];
let mujeres = 0;
let porcenMujAge;
let mh = [];
let edades = [];
let medidas = [];
let homAlt = [];
let hombres = 0;
let edadMin = 0; 
let medidaMax = 0;

do{
    sexo = prompt('Sexo de la persona? (H/M)');
    mh.push(sexo);
    anos = parseInt(prompt('Cuantos años tiene la persona?'));
    edades.push(anos);
    altura = parseFloat(prompt('Cuanto mide?'));
    medidas.push(altura);
    opcion = confirm("Queres ingresar otra persona?");
    total++;
    
    if(sexo == 'm' && anos >= 25){
        muj25++;
    }
    
    if(sexo == 'h' && anos <= 18){
        hom18++;
    }
    
    if(sexo == "m"){
        mujAge.push(anos);
        mujeres++
    }
    let promAgeM = mujAge.reduce(
        (suma, item) => suma + item, 0);
    porcenMujAge = (promAgeM / mujeres);

    if(sexo == "h"){
        homAlt.push(altura);
        hombres++
    }
    let promAltH = homAlt.reduce(
        (suma, item) => suma + item, 0);
    porcenHomAlt = (promAltH / hombres);


for(let i = 0; i < edades.length; i++){
    if(i == 0){
        edadMin = edades[i];
    }else if(i > 0){
        if(edadMin > edades[i]){
            edadMin = edades[i]
        }
    }
}

for(let i = 0; i < medidas.length; i++){
    if(i == 0){
        medidaMax = medidas[i];
    }else if(i > 0){
        if(medidaMax < medidas[i]){
            medidaMax = medidas[i]
        }
    }
}


}while(opcion == true)


let porMay25 = (muj25 * 100) / total;
let porMen18 = (hom18 * 100) / total;


document.write(`total ${total} <br>
A.<br>
cant muj mayores 25: ${muj25}<br>
porcentaje: ${porMay25}%<br>
B.<br>
cant hom menores 18: ${hom18}<br>
porcentaje: ${porMen18}% <br>
C.<br>
promedio edad mujeres: ${porcenMujAge}<br>
D.<br>
promedio altura hombres: ${porcenHomAlt}mts<br>
E.<br>
la edad minima es: ${edadMin}<br>
F.<br>
la mayor altura es: ${medidaMax}`);


//falta validar