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

console.log(arreglo);
arreglo.push(11,12,13,14,15);//añadir al final
console.log(arreglo);
arreglo.pop();//eliminar un elemento al final
console.log(arreglo);
arreglo.unshift(5);//añadir al principio del arreglo
console.log(arreglo);
arreglo.splice(0,2);//eliminar desde, tantos
console.log(arreglo);

//agregar en el índice 0, 4
arreglo.splice(0, 0, 4);
//splice(indice, numero de elementos eliminados,...items a agregar...)
console.log(arreglo);
//borrar desde el 9, 2 elementos
const indiceNueve = arreglo.indexOf(9);
arreglo.splice(indiceNueve, 2,1112);
console.log(arreglo);


