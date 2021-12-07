//03 operadores
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//funciones como parámetros
//find
//enviamos una expresion truthy falsy y nos devuelve el primero que cumpla esta condición
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian";//Expresion = = =
        }
    );
console.log('respuestaFind',respuestaFind);//undefined si no existe respuesta

//findindex
//enviamos una expresion tuthy o falsy y devuelve el primero que cumpla esa condición
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex);//al no encontrar es -1
//el mas seguro para usar con objetos

//for each
//itera el arreglo
const respuestaFor = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
        }
    );
console.log('respuestaFor', respuestaFor);

//map
//modificar el arreglo y devuelve un nuevo arreglo
//enviamos datos del nuevo arreglo
//retorna el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                //id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('arreglo', arreglo);
console.log('respuestaMap', respuestaMap);

//filter
//enviamos expresion truthy falsy
//devuelve los elementos que cumplen con esa condición
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('arreglo', arreglo);
console.log('respuestaFilter', respuestaFilter);

//some -> expresion
//devuelve booleano
//Existe alguna expresion? SI o NO
//OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//every -> expresion
//devuelve booleano
//Existe expresion en todos? SI o NO
//AND
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//reduce        izq -> der
//reduce right  der -> izq
//100
//100 - arreglo[0] - arreglo[1] - arreglo[2] - arreglo[3] - arreglo[4] - arreglo[5]
//arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] = ...

const respuestaReduce = arreglo.reduce(
    function (valorAcumulado, valorActual, indice, arreglo) {
        return valorAcumulado - valorActual.nota;
    },
    100
);

console.log("respuestaReduce: 100 - arreglo:", respuestaReduce)





