let nombre: string = 'Francisco';
nombre = 'Javier';
//nombre = 2;

let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
edad = 5;
//Ducktyping
let apellido = 'García';//string ->
apellido = 'Francisco';//igual a otros string
apellido.toUpperCase();//metodos string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;



