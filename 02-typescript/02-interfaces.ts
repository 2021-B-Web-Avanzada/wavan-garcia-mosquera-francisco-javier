interface Usuario {
    nombre: string;
    apellido: string;
    edad?: string;//opcional
    sueldo?: number;//opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

let user:Usuario={
    nombre: "Francisco",
    apellido: "García",
    edad:'12',
    casado: 0,
    estado: 'AC',
    calcularImpuesto(impuesto: number): number {
        return impuesto*0.12;
    },
    estadoActual(): "AP" | "AF" | "AT" {
        return 'AF';
    },
    imprimirUsuario(mensaje: string): string | "BN" {
        return "El mensaje es: "+mensaje;
    }
}


