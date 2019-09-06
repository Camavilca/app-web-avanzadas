var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/semana05')
var imagenes = Schema({
    nombre: String,
    imagen: String,
});
var Img = mongoose.model("Imagen", imagenes);
module.exports.Img = Img;