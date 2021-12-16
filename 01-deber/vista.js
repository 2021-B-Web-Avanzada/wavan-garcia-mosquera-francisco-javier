const inquirer = require("inquirer");
const controlador = require('./controlador')

let albumSeleccionado = 0
let cancionSeleccionada = 0

let datosAlbum, datosCancion;

let album = {
    titulo: "",
    artista: "",
    recopilatorio: undefined,//boolean/undefined
    productor: "",
    anio: null,//number,
    canciones: []
};

let cancion = {
    titulo: "",
    duracion: "",
    explicito: undefined,//boolean/undefined
    artistaSecundario: ""
};

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
                    message: 'Ingresa el artista secundario si lo hay'
                }
            ]);
        switch (respuesta.explicito) {
            case "Sí":
                respuesta.explicito = true;
                break;
            case "No":
                respuesta.explicito = false;
                break;
        }

        if (respuesta.artistaSecundario == '')
            respuesta.artistaSecundario = null

        respuesta.duracion = Number(respuesta.duracion)

        datosCancion = cancion
        datosCancion = respuesta
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
        switch (respuesta.recopilatorio) {
            case "Sí":
                respuesta.recopilatorio = true;
                break;
            case "No":
                respuesta.recopilatorio = false;
                break;
            case "Se desconoce":
                respuesta.recopilatorio = null;
                break;
        }
        respuesta.anio = Number(respuesta.anio)
        datosAlbum = album
        datosAlbum = respuesta
    } catch (e) {
        console.error(e)
    }
}

async function seleccionarOpcionesAlbum() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'nombre',
                    message: 'Seleccione el album',
                    choices: controlador.mostrarListaDeAlbums(),
                }
            ]);
        albumSeleccionado = controlador.verNumeroDeAlbum(respuesta)
    } catch (e) {
        console.error(e)
    }
}

async function seleccionarOpcionesCancion() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'nombre',
                    message: 'Seleccione la cancion',
                    choices: controlador.mostrarListaDeCanciones(),
                }
            ]);
        cancionSeleccionada = controlador.verNumeroDeCancion(respuesta)
    } catch (e) {
        console.error(e)
    }
}

//0 r 1 u 2 d 3 c
async function opcionesCrudCanciones() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: '¿Que desea realizar?',
                    choices: ['Consultar una canción', 'Actualizar datos de una canción',
                        'Eliminar una canción', 'Crear una canción'],
                }
            ]);
        switch (respuesta.menu) {
            case 'Consultar una canción':
                seleccionarOpcionesCancion().then(
                    () => {
                        console.log(controlador.mostrarCancion(cancionSeleccionada))
                        menuInicial()
                    }
                );
                break;
            case 'Actualizar datos de una canción':
                seleccionarOpcionesCancion().then(
                    () => {
                        ingresoDeValoresCancion().then(
                            () => {
                                controlador.actualizarCancion(datosCancion, cancionSeleccionada)
                                console.log(controlador.mostrarCancion(cancionSeleccionada))
                                menuInicial()
                            }
                        );
                    }
                );
                break;
            case 'Eliminar una canción':
                seleccionarOpcionesCancion().then(
                    () => {
                        controlador.eliminarCancion(cancionSeleccionada)
                        console.log(controlador.mostrarListaDeCanciones())
                        menuInicial()
                    }
                );
                break;
            case 'Crear una canción':
                console.log("Ingrese el álbum donde irá la canción")
                seleccionarOpcionesAlbum().then(
                    () => {
                        ingresoDeValoresCancion().then(
                            () => {
                                controlador.crearCancion(datosCancion, albumSeleccionado)
                                console.log(controlador.mostrarListaDeCanciones())
                                menuInicial()
                            }
                        );
                    }
                );
                break;
        }
        //console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e)
    }
}

//0 r 1 u 2 d 3 c
async function opcionesCrudAlbums() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'opcion',
                    message: '¿Que desea realizar?',
                    choices: ['Consultar un album', 'Actualizar datos de un álbum',
                        'Eliminar un álbum', 'Crear un álbum'],
                }
            ]);
        switch (respuesta.opcion) {
            case 'Consultar un album':
                seleccionarOpcionesAlbum().then(
                    () => {
                        console.log(controlador.mostrarAlbum(albumSeleccionado))
                        menuInicial()
                    }
                );
                break;
            case 'Actualizar datos de un álbum':
                seleccionarOpcionesAlbum().then(
                    () => {
                        ingresoDeValoresAlbum().then(
                            () => {
                                controlador.actualizarAlbum(datosAlbum, albumSeleccionado)
                                console.log(controlador.mostrarAlbum(albumSeleccionado))
                                menuInicial()
                            }
                        );
                    }
                );
                break;
            case 'Eliminar un álbum':
                seleccionarOpcionesAlbum().then(
                    () => {
                        controlador.eliminarAlbum(albumSeleccionado)
                        console.log(controlador.mostrarListaDeAlbums())
                        menuInicial()
                    }
                );
                break;
            case 'Crear un álbum':
                ingresoDeValoresAlbum().then(
                    () => {
                        controlador.crearAlbum(datosAlbum)
                        console.log(controlador.mostrarListaDeAlbums())
                        menuInicial()
                    }
                );
                break;
        }
        //console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e)
    }
}

async function menuInicial() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: '¿Que datos desea editar?',
                    choices: ['Álbum', 'Canciones'],
                }
            ]);
        if (respuesta.menu == "Canciones")
            opcionesCrudCanciones()
        else
            opcionesCrudAlbums()
        //console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e)
    }
}

console.log("Bienvenido")
console.log(controlador.mostrarListaDeAlbums())
menuInicial()

