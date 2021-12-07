const fs = require('fs');

function promesaLeerArchivo(path){
    const promesaLeer = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (errorInterno, contenido) => {
                    if (errorInterno) {
                        reject('Error leyendo contenido');
                        console.error({mensaje: 'error leyendo contenido', error: errorInterno});
                    }
                    else
                        resolve (contenido)
                }
            )
        }
    )
    return promesaLeer
}

function promesaEscribirArchivo(path, contenidoActual, contenidoNuevo){
    const promesaEscribir = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + '\n' + contenidoNuevo,
                'utf-8',
                (error) => {
                    if (error) {
                        reject('Error escribiendo contenido');
                        console.error({mensaje: 'error escribiendo contenido', error: error});
                    }
                    else
                        resolve(true)
                }
            )
        }
    )
    return promesaEscribir
}


function escribirArchivo(path, contenidoNuevo) {
    promesaLeerArchivo(path)
        .then((datosPromesa) => promesaEscribirArchivo(path, datosPromesa, contenidoNuevo))
        .then(() => promesaLeerArchivo(path))
        .then((datosPromesa) => console.log(datosPromesa))
        .catch((error) => {
            console.log(error);
        })
        .finally()
}

escribirArchivo('01-javascript/06-ejemplo.txt', 'Buenas Medianoches 3');
