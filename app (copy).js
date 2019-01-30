// Importar modulo logger
const logger = require('./logger')  // La constante es un modulo
const emisorEventos = require('events')   // La consante es una clase

logger.funcion('Importado mi modulo creado! ' + logger.variable);

// Recibir eventos
const emisor =  new emisorEventos();

emisor.on('Mensaje recibido', 
            function(argumentos) {console.log('Llego el mensaje esperado'); console.log(argumentos);} 
            
        );

// Emitir eventos
emisor.emit('Mensaje recibido', 'otro', 'yotro'); // Puedo enviar varios mesajes, llegan como argumentos
emisor.emit('Mensaje recibido', {id:1, type: 'http'}); // Un json como siguiente parametro