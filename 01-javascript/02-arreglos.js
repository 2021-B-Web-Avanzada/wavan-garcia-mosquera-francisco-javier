let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = {};
arreglo = [true, 1, 1.1, "Fransico", undefined, null, {}];
arreglo = [6, 7, 8, 9];

//for of
for (let numero of arreglo) {//valores
    console.log('numero', numero);
}

//for in
for (let indice in arreglo) {//indices
    arreglo[indice];
    console.log('indice', indice);
}

let objetoPrueba = {a: '1', b: '2', c: '3'};
for (let llave in objetoPrueba) {//indices
    console.log('llave', llave);
}
