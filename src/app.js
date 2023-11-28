const express = require('express')
const app = express()
const path = require('path')

const routerIndex = require('./routes/index')   //guardo en una constante el módulo requerido
const routerDetail = require('./routes/productDetail')   //guardo en una constante el módulo requerido


app.set('view engine', 'ejs')   //1. de decimos a express con el método set, que motor de 
//plantillas usamos, en este caso, EJS
app.set('views', path.join(__dirname, 'views')) //2. configuro la carpeta de vistas a través 
//del método set. El 1er parámetro es lo que queremos configurar, en este caso es la carpeta
//de vistas, y el 2do es el valor de la configuración.

app.use(express.static(path.join(__dirname, 'public'))) //3. para poder acceder a los recursos
//estáticos, tenemos que decirle a a Express dónde vamos a almacenar esos recursos.

app.use('/', routerIndex)//me fijo con qué macheo cuando voy a routes
app.use('/detail', routerDetail)//me fijo con qué macheo cuando voy a routes

const port = 3000
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
}) 