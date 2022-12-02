//Templates Strings

function getSaludo(name){
    return "Hola Bro " + name;
}

const nombre = "Benjamin";
const apellido = "Carias";

// Concatenando con Templates Strings
const nombreCompleto = `Hola, ${nombre} ${apellido} ${getSaludo("Messi")}`;

console.log(nombreCompleto);