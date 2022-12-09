// Desestructuracion de Objetos o
// Asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    //rango: 'soldado'
}

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, rango = "capitan"}) => {
    console.log(nombre, rango);
    console.log("Probando un tema xD");
}

retornaPersona(persona);

// Desestructurando una funcion

const getPersona = ({clave, edad}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12312,
            lng: 321221
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = getPersona(persona);

console.log(nombreClave, lat);
