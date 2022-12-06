// Funciones

function welcome(name){
    return `Welcome, ${name}!!`;
}

console.log(welcome("Benja"));

function goodBye(name){
    console.log(`See you later, ${name}!!`);
}

goodBye("Benja");

// Manera correcta

const suma = function(uno, dos){
    console.log(uno + dos);
}

suma(2, 2);

const saludar = (nombre) => {
    console.log(`Hola, ${nombre}`)
}

// const saludarTres = (nombre) => `Hola, ${nombre}`
saludar("Faker");

// Retornar un objeto usando return
const getUser = () => {
    return{
        id: "ABC123",
        userName: "Bengi0"
    }
}

// o retornar un objeto sin return

const getId = () => ({
    nombreUser: "Lee Sin",
    edad: 12
});

console.log(getUser().id);
console.log(getId());

// Tarea
const getUsuarioActivo = (nombre) => ({
    ID: "ACD13",
    username: nombre
});

const usuarioActivo = getUsuarioActivo("Benja");

console.log(usuarioActivo);