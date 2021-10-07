const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    registrar: async (req, res)=>{
      let {nome, email, senha} = req.body;

      try {
        let novoUsuario = await Usuario.create({nome: nome, email: email, senha: bcrypt.hashSync(senha, 10)});
        return res.status(201).json(novoUsuario); //201 - ok e criou algo 200 - ok
    } catch (error) {
        return res.status(409).json({error: 1, msg:"Usuário já cadastrado com este email."})
    }
    

    },
    
    login: async (req, res) => {
        // As info virão no req.body
        // {"email":"___@_____", "senha":"XXXXXXX"}

        // Capturar as info do body
        let {email, senha} = req.body;

        // Pesquisar no BD um usuário com o email dado
        const usuario = await Usuario.findOne({where:{email:email}})

        // Se não existir usuário, retornar erro.
        if(!usuario){
            return res.status(403).json({erro:1, msg:"Acesso negado"});
        }

        // Existindo o usuário, validar a senha dele (bcrypt) primeiro parametro(senha sem criptografar) segundo(senha criptografada)
        if(!bcrypt.compareSync(senha, usuario.senha)){
            // Se a senha for inválida, retornar erro.
            return res.status(403).json({erro:1, msg:"Acesso negado"})
        }

        //removendo informação sensível do usuário
        usuario.senha = undefined;

        //Gerando token com os dados do usuário e com uma senha
        let token = jwt.sign(usuario.toJSON(),"jacarenosecoanda")
        
        // Se a senha for ok, retornar msg sucesso (por enquanto...)
        res.status(200).json({msg:"Ok!", token})
    
    }
}