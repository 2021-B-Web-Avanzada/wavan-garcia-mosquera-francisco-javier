//destructuración de objetos
const adrian = {
    nombre: "Francisco"
};
const pablo = {
    nombre: "Pablo",
    apellido: "García",
};
const adrianPablo = {
    ...pablo,
    ...adrian
};
console.log(adrianPablo)

//destructuración de arreglos
const arregloUno = [1,2,3,4,5]
const arregloDos = [6,7,8,9,10]
const superArreglo = [
    ...arregloDos,
    ...arregloUno,
];
console.log(superArreglo)

console.log(...superArreglo)



