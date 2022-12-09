// Import, Export y Funciones comunes

// Multiples exportaciones
import {heroes, zapatos, nombres} from '../data/heroes.js';

// Exportaciones individuales
import comidas from '../data/heroes.js';



// Find nos devuelve la primer coincidencia
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// Filter nos devuelve todas las coincidencias
const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}


export {getHeroeById, getHeroeByOwner};