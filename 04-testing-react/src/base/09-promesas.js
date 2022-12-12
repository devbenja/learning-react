// Promesas
import {getHeroeById} from './bases/08-imp-exp.js';

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //Tarea 
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject("No se encontro el heroe");
    }, 2000);
});

promesa.then((heroe) => {
    console.log(heroe)
}).catch(error => console.warn(error))
*/

// Se ejecuta cuando la promesa es correcta


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject("No se encontro el heroe");
            }
        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then(heroe => console.log('Heroe encontrado: ', heroe))
    .catch(error => console.warn(error));