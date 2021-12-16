const inquirer = require('inquirer')
var funciones = require('./04-funciones')

async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
            ]);
        console.log('Respuesta',respuesta);
    }catch (e){
        console.error(e)
    }
}
let suma=funciones.sumarNumeros(4,5,65,5)
console.log("suma",suma)
main()
