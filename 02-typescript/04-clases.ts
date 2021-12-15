class Persona {
    public nombre: string;
    public apellido: string
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''//Duck typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string) {
        this.nombre = nombreParametro
        this.apellido = apellidoParametro
        this.nombre = nombreParametro + ' ' + apellidoParametro
    }

    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,//Modificador de accedo -> propiedad de la clase
        public estadoCivil:string
    ) {
        super(nombreParametro,apellidoParametro);
    }
}

const francisco = new Usuario('Francisco','García','1717','viudo')
francisco.nombre
francisco.apellido
francisco.cedula
francisco.estadoCivil

