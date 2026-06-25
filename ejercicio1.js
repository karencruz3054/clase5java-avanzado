/**
 * generar una función que calcule el promedio de 2 notas de 
 * parciales por ejemplo la materia Historia
*/



function calculodepromedio(nota1,nota2){
    promedio= (nota1+nota2)/2;
    return promedio;
}

let notafinalhistoria= calculodepromedio(7,8);
console.log('su nota final es de: '+ notafinalhistoria);