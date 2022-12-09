// Desestructuracion de arreglos

const personajes = ["Goku", "vegetta", "trunks"];

console.log(personajes[0])
console.log(personajes[1])

const [ , , p3 ]  = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 3];
}

const [letras, numero] = retornaArreglo();

console.log(letras, numero);

// Tarea 

const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState("Benja");

console.log(nombre);
setNombre();
