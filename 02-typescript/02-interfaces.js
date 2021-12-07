var user = {
    nombre: "Francisco",
    apellido: "García",
    edad: '12',
    casado: 0,
    estado: 'AC',
    calcularImpuesto: function (impuesto) {
        return impuesto * 0.12;
    },
    estadoActual: function () {
        return 'AF';
    },
    imprimirUsuario: function (mensaje) {
        return "El mensaje es: " + mensaje;
    }
};
