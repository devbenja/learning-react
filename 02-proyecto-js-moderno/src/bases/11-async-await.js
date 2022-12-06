// Async Await

/*
const getImagePromesa = () => {
    return new Promise((resolve, reject) =>{
        resolve('https://asdaqrqrqqrq.com');
    }) 
}

getImagePromesa().then(console.log);
*/ 


const getImage = async() => {
    try{
        const apiKey = '9M2Sm6598qlQf2OejTyL8uSAjr5S0srE';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    }catch(error){
        console.error("No se encontro la imagen");
    }
}

getImage();

/*
// Fet API

const apiKey = '9M2Sm6598qlQf2OejTyL8uSAjr5S0srE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)

*/