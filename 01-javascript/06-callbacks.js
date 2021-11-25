const fs = require('fs');
console.log('PRIMERO');
fs.readFile(
    './01-javascript/01-variables.js',
    'utf-8',
    (error, contenido) => {
        if (error)
            console.error({mensaje: 'error leyendo contenido', error: error});
        else
            console.log(contenido);
        fs.readFile(
            './01-javascript/06-ejemplo.txt',
            'utf-8',
            (error, contenido1) => {
                if (error)
                    console.error({mensaje: 'error leyendo contenido', error: error});
                else
                    console.log(contenido+contenido1);
            }
        )
    }
)
console.log('TERCERO');

