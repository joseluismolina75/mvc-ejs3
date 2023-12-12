const listaPlatos = require('../data/platos')

const controller = {
    detail: (req, res) => {
        const id = req.params.id;   //accedo al id a través de la propiedad params de request.
        //const { id } = req.params;  las 2 formas son equivalentes, en la segunda uso destructuring y solo me devuelve el id
        const getProduct = listaPlatos.find(product => product.id == id); //tengo que saber que producto corresponde a dicho id
        if (getProduct) {
            return res.render('detalleMenu', {getProduct});
        }
        res.send('El producto no existe');
    }
};

module.exports = controller