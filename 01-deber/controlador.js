const crud = require('./crud')
const inquirer = require("inquirer");

let album = {
    titulo: "",
    artista: "",
    recopilatorio: undefined,//boolean/undefined
    productor: "",
    anio: null,//number,
    cancion: []
};



//canciones
//retorna cadena
function mostrarListaDeCanciones() {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)

    //Indices de este arreglo nos dicen cual álbum es
    let listaDeCancionesDeCadaAlbum = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            listaDeCancionesDeCadaAlbum.push(valorActual.canciones)

        }
    );

    //lista de las canciones
    let listaDeCanciones = []
    listaDeCancionesDeCadaAlbum.forEach(function (valorActual, indiceActual) {
            Object.values(valorActual).forEach(function (valor, indice) {
                    listaDeCanciones.push(valor)
                }
            )
        }
    );

    //iterando solo nombres
    let nombreListaDeCanciones = []
    listaDeCanciones.forEach(function (valorActual, indiceActual) {
            nombreListaDeCanciones.push(valorActual.titulo)
        }
    );
    return nombreListaDeCanciones;
}

//indice desde 0
//retorna cadena
function mostrarCancion(indiceDeCancion) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)

    //Indices de este arreglo nos dicen cual álbum es
    let listaDeCancionesDeCadaAlbum = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            listaDeCancionesDeCadaAlbum.push(valorActual.canciones)
        }
    );

    //lista de las canciones
    let cancion = []
    let indiceAcumulador = 0
    listaDeCancionesDeCadaAlbum.forEach(function (valorActual, indiceActual) {
            Object.values(valorActual).forEach(function (valor, indice) {
                    if (indiceAcumulador == indiceDeCancion)
                        cancion.push(valor)
                    indiceAcumulador += 1
                }
            )
            indiceAcumulador += 1
        }
    );
    return cancion[0]

}

//objeto canción y el índice del álbum donde tengo que pushear
function crearCancion(cancionCreada, indiceDeAlbum) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)

    //Indices de este arreglo nos dicen cual álbum es
    let listaDeCancionesDeCadaAlbum = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            if (indiceDeAlbum == indiceActual) {
                let aux = Object.values(valorActual.canciones)
                aux.push(cancionCreada)
                listaDeAlbums.at(indiceActual).canciones = aux
                const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
                //console.log(objetoJSONNuevo)
                crud.update("/01-deber/album.json", objetoJSONNuevo)
            }
        }
    );
}

//objeto canción y el índice de la canción que tengo que reemplazar
function actualizarCancion(cancion, indiceDeCancion) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)

    //Indices de este arreglo nos dicen cual álbum es
    let listaDeCancionesDeCadaAlbum = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            listaDeCancionesDeCadaAlbum.push(valorActual.canciones)
        }
    );

    let indiceAcumulador = 0
    listaDeCancionesDeCadaAlbum.forEach(function (valorActual, indiceActual) {
            Object.values(valorActual).forEach(function (valor, indice) {
                    if (indiceAcumulador == indiceDeCancion) {
                        let aux = Object.values(valorActual)
                        aux.splice(indice, 1, cancion)
                        listaDeAlbums.at(indiceActual).canciones = aux
                        const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
                        //console.log(objetoJSONNuevo)
                        crud.update("/01-deber/album.json", objetoJSONNuevo)
                    }
                    indiceAcumulador += 1
                }
            )
        }
    );
}

//indice de la cancion a eliminar
function eliminarCancion(indiceDeCancion) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    let listaDeAlbums = Object.values(objetoArchivoJSON)
    //Indices de este arreglo nos dicen cual álbum es
    let listaDeCancionesDeCadaAlbum = []
    let indiceAcumulador = 0
    listaDeAlbums.forEach(function (valorActualAlbum, indiceActualAlbum) {//lista de albums
            Object.values(valorActualAlbum.canciones).forEach(function (valorActual, indiceActual) {//lista de canciones
                    if (indiceAcumulador == indiceDeCancion) {
                        indiceAcumulador += 1
                        let aux = Object.values(valorActualAlbum.canciones)
                        aux.splice(indiceActual, 1)
                        listaDeAlbums.at(indiceActualAlbum).canciones = aux
                        const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
                        crud.update("/01-deber/album.json", objetoJSONNuevo)
                    }
                    indiceAcumulador += 1
                }
            );
        }
    );

}

//álbums
function mostrarListaDeAlbums() {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)

    let nombreListaDeAlbums = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            nombreListaDeAlbums.push(valorActual.titulo + " - " + valorActual.artista)
        }
    );
    return nombreListaDeAlbums;
}

//indice de album a mostrar
//retorna string con el album
function mostrarAlbum(indiceAlbum) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)
    let nombreListaDeAlbums = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            if (indiceActual == indiceAlbum)
                nombreListaDeAlbums.push(JSON.stringify(valorActual, null, '\t'))
        }
    );
    return nombreListaDeAlbums[0];
}

function crearAlbum(datosDeAlbum) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)
    let albumAux = album
    albumAux.titulo = datosDeAlbum.titulo
    albumAux.artista = datosDeAlbum.artista
    albumAux.recopilatorio = datosDeAlbum.recopilatorio
    albumAux.productor = datosDeAlbum.productor
    albumAux.anio = datosDeAlbum.anio

    listaDeAlbums.push(albumAux)
    const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
    //console.log(objetoJSONNuevo)
    crud.update("/01-deber/album.json", objetoJSONNuevo)
}

//no se podrá actualizar las canciones desde aquí
function actualizarAlbum(datosDeAlbum, indiceDeAlbum) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)


    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            if (indiceActual == indiceDeAlbum) {
                valorActual.titulo = datosDeAlbum.titulo
                valorActual.artista = datosDeAlbum.artista
                valorActual.recopilatorio = datosDeAlbum.recopilatorio
                valorActual.productor = datosDeAlbum.productor
                valorActual.anio = datosDeAlbum.anio
                listaDeAlbums.splice(indiceActual, 1, valorActual)
                const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
                //console.log(objetoJSONNuevo)
                crud.update("/01-deber/album.json", objetoJSONNuevo)
            }

        }
    );
}

function eliminarAlbum(indiceDeAlbum) {
    const contenidoArchivoJSON = crud.read("/01-deber/album.json")
    const objetoArchivoJSON = JSON.parse(contenidoArchivoJSON)
    const listaDeAlbums = Object.values(objetoArchivoJSON)
    let nombreListaDeAlbums = []
    listaDeAlbums.forEach(function (valorActual, indiceActual) {
            if (indiceActual == indiceDeAlbum) {
                listaDeAlbums.splice(indiceActual, 1)
                const objetoJSONNuevo = JSON.stringify(listaDeAlbums, null, "\t")
                //console.log(objetoJSONNuevo)
                crud.update("/01-deber/album.json", objetoJSONNuevo)
            }

        }
    );
}


module.exports = {mostrarCancion,actualizarAlbum,actualizarCancion,
    eliminarAlbum,eliminarCancion,mostrarListaDeAlbums,
    mostrarListaDeCanciones,mostrarAlbum,crearAlbum,crearCancion};