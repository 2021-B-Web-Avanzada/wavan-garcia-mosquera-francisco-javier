//Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos=8;
numeroUno=false;
numeroDos=true;

//Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
//preferimos const>let>nunca var

//tipos de varibales
const numero=1;//number
const sueldo=1.2;//number
const texto = "Adrian";//string
const apellido = "Eguez";//string
const booleano = false;
const hilos = null;
const zapatos = undefined;
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hilos);
console.log(typeof zapatos);
console.log(typeof Number("asd"));//number
console.log(Number("asd"));//NaN


//truty falsy
let stringAEvaluar="";
if(stringAEvaluar)
    console.log("String vacío es verdadero");
else
    console.log("String vacío es falso");//!

let stringAEvaluar2="Lleno";
if(stringAEvaluar2)
    console.log("String lleno es verdadero");//!
else
    console.log("String lleno es falso");


if(-1)
    console.log("Negativo es truthy");//!
else
    console.log("Negativo es falsy");
if(0)
    console.log("Cero es truthy");
else
    console.log("Cero es falsy");//!
if(1)
    console.log("Positivo es truthy");//!
else
    console.log("Positivo es falsy");

if(null)
    console.log("null es truthy");
else
    console.log("null es falsy");//!
if(undefined)
    console.log("undefined es truthy");
else
    console.log("undefined es falsy");//!

//objetos json

const francisco = {
    nombre:"FRANCISCO JAVIER",//lave:valor
    false:"GARCIA MOSQUERA",
    edad:12,
    hijos:"brah",
    zapatos:"GUCCI",
    casado:undefined,
    ropa:{
        color:"magenta",
        talla:XX,
    },
    mascotas{'cachetes','tokio','lola'},
};
