var express = require('express');
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')
var Contacto = require("../models/contacto").Contacto
var Img = require("../models/imagenes").Img



var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }))
router.use(fileUpload())


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/nosotros', function (req, res, next) {
  res.render('nosotros', { title: 'Nosotros' })
});

router.get('/servicios', function (req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});

router.get('/contacto', function (req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

router.get('/deportes', function (req, res, next) {
  res.render('deportes', { title: 'Deporte' });
});




router.post('/enviar', function (req, res) {
  const con = new Contacto({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono,
    nacimiento: req.body.nacimiento,
    mensaje: req.body.mensaje
  });
  con.save(function (err) {
    res.redirect('/allContactos');
  });
});


router.get('/allContactos', function (req, res) {
  Contacto.find(function (err, data) {
    res.render('allContactos', { datos: data })
    console.log(data);
    console.log(err);
  })
})

router.post('/eliminar/:id/item', function (req, res) {
  console.log(req);
  Contacto.remove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Contacto Eliminado");
      res.redirect("/allContactos");
    }
  })
});

router.post('/editar/:id/item', function (req, res) {
  Contacto.findOne({ _id: req.params.id }, function (err, contacto) {
    console.log(contacto);
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("contactoEdit", { contacto: contacto });
    }
  });
});


router.post('/update/:id/item', function (req, res) {
  Contacto.findByIdAndUpdate({ _id: req.params.id },
    {
      $set:
      {
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        nacimiento: req.body.nacimiento,
        mensaje: req.body.mensaje
      }
    }, { new: true }, function (err) {
      res.redirect("/allContactos");
    })
});

router.post('/upload', function (req, res) {
  let EDfile = req.files.file
  EDfile.mv(`./files/${EDfile.name}`, err => {
    if (err) return res.status(500).send({ message: err })
    return res.status(200).send({ message: 'File upload' })
  })
});

router.post('/imagenes', function (req, res) {
  let EDfile = req.files.imagen
  console.log(EDfile)
  const img = new Img({
    nombre: req.body.nombre,
    imagen: EDfile.name
  });

  img.save(function (err) {
    EDfile.mv(`./files/${EDfile.name}`, err => {
      if (err) return res.status(500).send({ message: err })
      return res.redirect('/allContactos');
    })
  })
});


module.exports = router;
