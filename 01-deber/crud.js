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
        return fs.readFileSync(path,{encoding:'utf8', flag:'r'})
    },
    update: function (path, nuevoContenido) {
        fs.writeFileSync(path,nuevoContenido)
    }
}
