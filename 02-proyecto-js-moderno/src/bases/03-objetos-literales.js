// Objetos Literales

const persona = {
    nombre: "Benja",
    edad: 21,
    salario: 12000,
    direccion: {
        ciudad: "New York",
        codigo: 2324,
        pais: "USA"
    }
};

//Remplazar valor de una propiedad

persona.nombre = "Bengi";

// Copiar valor de un objeto

const personaDos = {...persona};

personaDos.nombre = "Benja";

console.table(persona);
console.table(personaDos);