const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt')

module.exports = {
    registrar: async (req, res)=>{
      let {nome, email, senha} = req.body;

      try {
        let novoUsuario = await Usuario.create({nome: nome, email: email, senha: bcrypt.hashSync(senha, 10)});
        return res.status(201).json(novoUsuario);
    } catch (error) {
        return res.status(409).json({error: 1, msg:"Usuário já cadastrado com este email."})
    }
    

    },
    
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}