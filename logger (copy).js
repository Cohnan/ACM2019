var url = 'https://holamundo.co';

// Crear modulo
function log(message)
{
    console.log(message)
}

// Exportar la funcion log y la variable url, PERO con los nombres funcion y variable respectivamente
module.exports.funcion = log;
module.exports.variable = url;