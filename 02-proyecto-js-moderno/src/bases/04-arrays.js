// Arreglos

const arreglo = [1, 2, 3];

// Agregar elementos al arreglo
arreglo.push(4);

// Borrar el ultimo elemento del arreglo

arreglo.pop();

// Copiar un array

const arregloDos = [...arreglo, 5];

const arregloTres = arregloDos.map(function(number){
    return number * 2;
});

console.log(arreglo);
console.log(arregloDos);
console.log(arregloTres);