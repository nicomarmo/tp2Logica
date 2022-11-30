/*6.- Los padres de una niña le prometieron darle 10 dólares cuando cumpliera 12 años
de edad y duplicar el regalo en cada cumpleaños subsiguiente hasta que el regalo excediera 
1000 dólares. Escriba un programa para determinar qué edad tendrá la niña cuando se le dé la
última cantidad y la cantidad total recibida.
 */
function ej6(){
    let total = 10;
    let cantidadAnos = 0;
    let pagoAnterior = 5;
    do{
        pagoAnterior = pagoAnterior * 2;
        total += pagoAnterior;
        cantidadAnos++
    }while(total <= 1000)
    
    document.write(`La edad que tiene la nena cuando tenga 1000 es ${cantidadAnos + 12} años <br>`);
    document.write(`El total acumulado es ${total}`)
}
