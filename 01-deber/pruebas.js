const crud = require('./crud')
const fs = require("fs");

const cancion = {
    titulo: "I saw her standing there",
    explicito: false,//boolean
    duracion: 173,
    artistaSecundario: null//string/null
}

const cancion1 = {
    titulo: "Boys",
    explicito: false,//boolean
    duracion: 146,
    artistaSecundario: "Star"//string/null
}

const album = {
    titulo: "Comic (2019)",
    artista: "Comic",
    recopilatorio: true,//boolean/undefined
    productor: "George Martin",
    canciones: {cancion, cancion1}
};

const cancion3 = {
    titulo: "Love Me Do",
    explicito: false,//boolean
    duracion: 120,
    artistaSecundario: null//string/null
}

const album1 = {
    titulo: "Please Please ME",
    artista: "Comic",
    recopilatorio: true,//boolean/undefined
    productor: "George Martin",
    canciones: {cancion3}
};
const objetoContenedor = {
    album,
    album1
}
/*
//PRUEBA CREAR ALBUM
fs.writeFile(
    "01-deber/album.json",
    JSON.stringify(objetoContenedor, null, '\t'),
    'utf-8',
    (error) => {
        if (error)
            console.error({mensaje: 'error escribiendo contenido', error: error});
    }
)
*/
console.log(crud.read("01-deber/album.json"))

