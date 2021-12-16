const express = require('express');
const app = express();
const morgan = require('morgan');
const inquirer = require("inquirer");
const controlador = require('./controlador')

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//http://localhost:3000/album/1
app.get('/album/:id', (req, res) => {
    let album = req.params.id;
    try {
        res.json(JSON.parse(controlador.mostrarAlbum(album)));
    } catch (e) {
        res.json(
            {
                "error": "Error al mostrar album"
            }
        );
    }
})

//http://localhost:3000/cancion/1
app.get('/cancion/:id', (req, res) => {
    let cancion = req.params.id;
    try {
        res.json(controlador.mostrarCancion(cancion));
    } catch (e) {
        res.json(
            {
                "error": "Error al mostrar canción"
            }
        );
    }
})

//http://localhost:3000/album/NEU!&Pink Floyd&false&Rubin&1975
app.post('/album/:titulo&:artista&:recopilatorio&:productor&:anio', (req, res) => {
    let titulo = req.params.titulo
    let artista = req.params.artista
    let recopilatorio = Boolean(req.params.recopilatorio)
    let productor = req.params.productor
    let anio = Number(req.params.anio)

    try {
        let datosAlbum={
            titulo: titulo,
            artista: artista,
            recopilatorio: recopilatorio,
            productor: productor,
            anio: anio
        }
        controlador.crearAlbum(datosAlbum)
        res.json(controlador.mostrarListaDeAlbums());
    } catch (e) {
        res.json(
            {
                "error": "Error al crear albums"
            }
        );
    }
})

//http://localhost:3000/cancion/MySweetLord&456&false&false&1
app.post('/cancion/:titulo&:duracion&:explicito&:artistaSecundario&:indiceAlbum', (req, res) => {
    let titulo = req.params.titulo
    let duracion = Number(req.params.duracion)
    let explicito = Boolean(req.params.explicito)
    let artistaSecundario = req.params.artistaSecundario
    let indiceAlbum = Number(req.params.indiceAlbum)

    try {
        let datosCancion={
            titulo: titulo,
            duracion: duracion,
            explicito: explicito,//boolean/undefined
            artistaSecundario: artistaSecundario
        }
        controlador.crearCancion(datosCancion,indiceAlbum)
        res.json(controlador.mostrarListaDeCanciones());
    } catch (e) {
        res.json(
            {
                "error": "Error al crear albums"
            }
        );
    }
})
app.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if (title && director && year && rating) {
        _.each(data, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(data);
    } else {
        res.status(500).json({"error": "There was an error."});
    }
});

//http://localhost:3000/cancion/1
app.delete('/cancion/:id', (req, res) => {
    let cancionAEliminar = req.params.id;
    try {
        controlador.eliminarCancion(cancionAEliminar);
        res.json(
            {
                "response": "cancionEliminada"
            }
        );
    } catch (e) {
        res.json(
            {
                "error": "Error al eliminar autor"
            }
        );
    }
})

//http://localhost:3000/album/1
app.delete('/album/:id', (req, res) => {
    let albumAEliminar = req.params.id;
    try {
        controlador.eliminarCancion(albumAEliminar);
        res.json(
            {
                "response": "album eliminado"
            }
        );
    } catch (e) {
        res.json(
            {
                "error": "Error al eliminar album"
            }
        );
    }
})

//Iniciando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});