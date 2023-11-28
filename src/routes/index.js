const express = require('express')
const { index } = require('../controllers/') //uso Destructuring para extraer datos del objeto controller
//puede pasar que use solo una propiedad definida en el objeto controller o use todas las
//propiedades de controller.
//para usar todas las propiedades, uso
//const index = require('../controllers/index') 
//Si yo solo necesito la propiedad index, porque en el index.js de controllers, solo uso index,
//como se ve abajo, uso destructing ({index})
//const controller = {
//    index: (req, res) => res.render('index')

const router = express.Router()

//Cuando escribo index, me muestra el objeto index en un menú contextual
//y haciendo clic en él, me genera la línea de arriba:
//const { index } = require('../controllers')
//haciendo clic nuevamente, me lleva al objeto que se encuentra en el archivo index.js de controllers
//si no te lleva, es poque algo anda mal
router.get('/',index)

module.exports = router;