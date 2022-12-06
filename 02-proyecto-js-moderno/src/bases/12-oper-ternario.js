// Operador Ternario y  Condicional Ternario

const activo = true;

/*
let mensaje = " ";

if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
*/

const mensaje = (activo) ? 'Activo' : 'Inactivo';

// Se ejecuta solo el if 
const mensajeDos = activo && 'Enable';

console.log(mensaje); 