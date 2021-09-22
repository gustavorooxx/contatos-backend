const {Usuario} = require('../database/models');

module.exports = {
    registrar: async (req, res)=>{
      let UsuarioCriado = await Usuario.create(
           {
            
           }
       )
    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}