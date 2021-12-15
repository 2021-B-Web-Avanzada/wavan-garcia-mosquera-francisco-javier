const fs = require('fs');
module.exports = {
    create: function (path, datosAAppend) {
        fs.appendFile(
            path,
            datosAAppend,
            function (errorInterno) {
                if (errorInterno)
                    console.error({mensaje: 'error creando contenido', error: errorInterno});
                else
                    console.log('Append');
            });
    },
    read: function (path) {
        let contenido
        fs.readFile(
            path,
            'utf-8',
            (errorInterno, contenidoL) => {
                if (errorInterno)
                    console.error({mensaje: 'error leyendo contenido', error: errorInterno});
                else {
                    contenido = contenidoL
                }
            }
        )
        return contenido;
    },
    update: function (path, nuevoContenido) {
        fs.writeFile(
            path,
            nuevoContenido,
            'utf-8',
            (error) => {
                if (error)
                    console.error({mensaje: 'error escribiendo contenido', error: error});
            }
        )
    }
}
