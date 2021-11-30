const fs = require('fs');

function promesasEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}

promesasEsPar(6)
.then(//acepta un return de promesas
    (datosPromesa)=>{
        console.log(datosPromesa)
        return promesaElevarAlCuadrado(datosPromesa)
    }
)
    .then(
        (datosElevadosAlCuadrado)=>{
            console.log(datosElevadosAlCuadrado)
            return promesaElevarAlCuadrado(datosElevadosAlCuadrado)
        }

    )
    .then(
        (datosElevadosAlCuadrado)=>{
            console.log(datosElevadosAlCuadrado)
            return promesaElevarAlCuadrado(datosElevadosAlCuadrado)
        }

    )
    .then(
    (datosElevadosAlCuadrado)=>{
        console.log(datosElevadosAlCuadrado)
    }

)
.catch(
    (error)=>{
        console.log(error);
    }
)
.finally()