const {Telefone} = require('../database/models')

Telefone.findAll().then(
    telefones => console.log(telefones.map(u => u.toJSON()))
)