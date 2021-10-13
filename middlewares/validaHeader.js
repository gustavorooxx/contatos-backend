const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    //Verificando se o campo authorization existe nos headers
    if(!req.headers.authorization){
        return res.status(403).json({"Mensagem": "Requisição sem campo de autorização"});
    }

    //Capturar o token
    let token = req.headers.authorization.replace('Bearer ', '');

    //Validar o token estraindo o seu conteúdo
    let usuario;
    try{
        usuario = jwt.verify(token, 'jacarenosecoanda');
    } catch(error) {
        res.status(403).json({"Mensagem" : "Token inválido"})
    }

    // "Pendurar" as info extraídas do token no req
    req.usuario = usuario
   
    //Chamo a next
    next();
}