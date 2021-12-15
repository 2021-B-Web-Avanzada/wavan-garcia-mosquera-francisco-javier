const inquirer = require("inquirer");

async function ingresoDeValoresCancion(listaDeAlbums) {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'titulo',
                    message: 'Ingresa el titulo de la canción',
                },
                {
                    type: 'list',
                    name: 'explicito',
                    message: '¿Esta canción contiene lenguaje explícito?',
                    choices: ['Sí', 'No'],
                },
                {
                    type: 'input',
                    name: 'duracion',
                    message: 'Ingresa la duración de la canción en segundos'
                },
                {
                    type: 'input',
                    name: 'artistaSecundario',
                    message: 'Ingresa el artista secundario si lo hay',
                    default: null
                }
            ]);
        console.log('Respuesta', respuesta);
        return respuesta
    } catch (e) {
        console.error(e)
    }
}

async function ingresoDeValoresAlbum() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'titulo',
                    message: 'Ingresa el titulo del álbum'
                },
                {
                    type: 'input',
                    name: 'artista',
                    message: 'Ingresa el artista'
                },
                {
                    type: 'list',
                    name: 'recopilatorio',
                    message: '¿Es este álbum un recopilatorio del artista?',
                    choices: ['Sí', 'No', 'Se desconoce'],
                },
                {
                    type: 'input',
                    name: 'productor',
                    message: 'Ingresa el productor'
                },
                {
                    type: 'input',
                    name: 'anio',
                    message: 'Ingresa el año de lanzamiento'
                }
            ]);
        console.log('Respuesta', respuesta);
        return respuesta
    } catch (e) {
        console.error(e)
    }
}

async function ingresoDeValoresAlbum() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: '¿Que desea realizar?',
                    choices: ['Sí', 'No', 'Se desconoce'],
                }
            ]);
        console.log('Respuesta', respuesta);
        return respuesta
    } catch (e) {
        console.error(e)
    }
}