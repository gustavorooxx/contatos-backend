const {Telefone, sequelize} = require('../database/models')

Telefone.create(
    {numero: "11 9 9999 - 6667", contatos_id:2}).then(
        tel => {
            console.log(tel.toJSON());
            sequelize.close()
        }
    )