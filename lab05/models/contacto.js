var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/semana05')
var contacto_schema = Schema({
    nombre: String,
    correo: String,
    telefono: Number,
    nacimiento: String,
    mensaje: String,
});
var Contacto = mongoose.model("Contacto", contacto_schema);
module.exports.Contacto = Contacto;