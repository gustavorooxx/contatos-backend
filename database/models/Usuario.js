//outros scripts do sequelize esperam receber dois parametro da função exportada.
//primeiro parametro é a conexão com o banco de dados, e o segundo são os tipos de dados
module.exports = (sequelize, DataType)=>{
    const Usuario = sequelize.define(
        //nome do model
        'Usuario', 
        //colunas da tabela ao qual o model se refere
        {
        // SE o campo de id estiver como "id" não precisa informar.
        // id:{
        //     type: DataType.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true

        // },
        nome: DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: DataType.STRING
    },
    //opções de configuração
    {
        tableName:'usuarios',
        timestamps: false

    });
    
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Contato, {as: 'contatos', foreignKey:'usuarios_id'})
    }

    return Usuario;
}