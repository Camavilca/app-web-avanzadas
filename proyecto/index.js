const _ = require('underscore');
const rempla = require('./lib/replace');

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = rempla
    }
    exports.rempla = rempla
}else{
    root.rempla = rempla
}


var objetivo = "%hello% %world%! -- %world% %hello%!"


var idioma = "es"

var remplazados = {
    "en": {
        "hello": "hello",
        "world": "world"
    },
    "es": {
        "hello": "Hola",
        "world": "Mundo"
    }
}


var resultado = rempla.replace(objetivo, remplazados[idioma]);

console.log(resultado);




// var empleados = [
//     {
//         "id": 1,
//         "name": "Soni",
//         "designation": "SE",
//         "salary": 2500
//     },
//     {
//         "id": 2,
//         "name": "Rohit",
//         "designation": "SSE",
//         "salary": 3500
//     },
//     {
//         "id": 3,
//         "name": "Akanksha",
//         "designation": "Manager",
//         "salary": 4500
//     },
//     {
//         "id": 4,
//         "name": "Mohan",
//         "designation": "Accountant",
//         "salary": 3000
//     },
//     {
//         "id": 5,
//         "name": "Gita",
//         "designation": "SSE",
//         "salary": 5500
//     },
// ];
// var cargos = _.map(empleados, (empleado) => {
//     return { nombre: empleado.name, cargo: empleado.designation };
// });

// var em_sse = _.chain(empleados)
//     .filter((empleado) => { return empleado.designation === 'SSE' })
//     .map((empleado) => { return { name: empleado.name, id: empleado.id } })
//     .value();

// console.log(em_sse);
