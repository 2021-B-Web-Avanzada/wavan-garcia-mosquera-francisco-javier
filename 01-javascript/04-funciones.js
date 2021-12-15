
function soloNumeros(a, b, c) {
    return a - b + c;
}

//Permite el uso de funciones sin validación
//soloNumeros('v', true, [1,2,3]);
//soloNumeros();

function soloLetras(a, b, c) {//undefined al no retornar nada
    console.log(a, b, c);
}

function funcionNombrada() {

}

const funcionSinNombre1 = function () {
};
var funcionSinNombre2 = function () {
};
let funcionSinNombre3 = function () {
};
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

var hoy = new Date();
var funcionSinNombre = function () {
    console.log("Segundos", hoy.getSeconds())
};
funcionSinNombre;

const funcionFatArrow1 = () => {
};
var funcionFatArrow2 = () => {
};
let funcionFatArrow3 = () => {
};
[].forEach(() => {
})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

//omitir llaves
const funcionFatArrow5 = (x) => {
    return x + 1;
};
//const funcionFatArrow5 = (x) => x + 1;

//omitir parántesis
const funcionFatArrow7 = x => x + 1;
const funcionFatArrow8 = (x, y, z) => x + y + z;

//Parámetros infinitos

function sumarNumeros(...otrosNumeros) {
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
}
module.exports = 04;

//sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 89);
