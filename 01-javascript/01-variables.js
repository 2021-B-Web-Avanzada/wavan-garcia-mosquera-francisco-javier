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
    nombre:"FRANCISCO JAVIER",//clave:valor
    apellido:"GARCIA MOSQUERA",
    edad:12,
    hijos:"brah",
    zapatos:"GUCCI",
    casado:undefined,
    ropa:{
        color:"magenta",
        talla:"XX",
    },
    mascotas:['cachetes','tokio','lola'],
};

//acceder a propiedades del objeto

francisco.nombre;//FRANCISCO JAVIER
francisco.apellido;//GARCIA MOSQUERA
francisco["nombre"];//FRANCISCO JAVIER
console.log(francisco);
francisco.nombre="Francisco";
console.log(francisco);
francisco["nombre"]="francisco";
console.log(francisco);
francisco.sueldo;//undefined
console.log(francisco.sueldo);

//añadir propiedades
francisco.sueldo=1.2;
console.log(francisco.sueldo);
francisco["gastos"]=0.8;
console.log(francisco.gastos);
francisco.nombre=undefined;
console.log(francisco);
console.log(Object.keys(francisco));
console.log(Object.values(francisco));

//eliminar llave "nombre"
delete francisco.nombre;
console.log(francisco);

//Variables por valor o referencia?
//Variable por valor en JS son las primitivas (numbre, string, boolean, undefined, null)

let edadFrancisco=12;
let edadJavier=edadFrancisco;//si guardamos una primitiva en otra variable,
                                // se guardarán por valor
console.log(edadFrancisco);
console.log(edadJavier);
edadFrancisco=edadFrancisco+1;
console.log(edadFrancisco);
console.log(edadJavier);

//variables por referencia: object ({},[])
// let rafael={
//     nombre:"rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre="Lenin";
// console.log(rafael);
// console.log(lenin);
// //eliminamos el valor nombre
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

let rafael={
    nombre:"rafael"
};
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre="Lenin";
console.log(rafael);
console.log(lenin);
//eliminamos el valor nombre
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
//en un vector
let arregloNumeros=[1,2,3,4,5,6]
let arregloClonado = Object.assign([],arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0]=123;
arregloClonado[0]=321;
console.log(arregloNumeros);
console.log(arregloClonado);

