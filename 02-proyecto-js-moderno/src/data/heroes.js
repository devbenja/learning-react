const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const zapatos = ["NIKE", "ADIDAS", "PUMA"];

const comidas = ["Pizza", "Hamburguesa"];

// Primera forma de exportar
export const nombres = ["Benja", "Juan"];

// Segunda forma de exportar
export default comidas;

// Tercera forma
export {heroes, zapatos};