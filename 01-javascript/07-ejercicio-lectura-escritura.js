const fs = require('fs');

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
         path,
        'utf-8',
        (errorInterno, contenido) => {
            if (errorInterno)
                console.error({mensaje: 'error leyendo contenido', error: errorInterno});
            else {
                fs.writeFile(
                    path,
                    contenido + '\n' + contenidoNuevo,
                    'utf-8',
                    (error) => {
                        if (error)
                            console.error({mensaje: 'error escribiendo contenido', error: error});
                    }
                )
            }
        }
    )
}
escribirArchivo('01-javascript/06-ejemplo.txt', 'Buenas Tardes');

