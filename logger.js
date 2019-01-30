// Importar clase para manejo de eventos
const emisorEventos = require('events')   // La consante es una clase

var url = 'https://holamundo.co';

Class Logger extends emisorEventos {}
    log(message) // Una funcion dentro de una clase no es function, se llama metodo y no dice nada
    {
        console.log(message)
    }
}

// Exportar la funcion log y la variable url, PERO con los nombres funcion y variable respectivamente
//module.exports.funcion = log;
//module.exports.variable = url;


// Emitir eventos
emisor.emit('Mensaje recibido', 'otro', 'yotro'); // Puedo enviar varios mesajes, llegan como argumentos
emisor.emit('Mensaje recibido', {id:1, type: 'http'}); // Un json como siguiente parametro