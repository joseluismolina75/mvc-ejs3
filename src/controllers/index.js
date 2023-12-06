const listaPlatos = require('../data/platos')

const controller = {
    index: (req, res) => res.render('index',{listaPlatos}),
}

module.exports = controller 