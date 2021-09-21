module.exports = (sequelize, DataType)=>{
    const Contato = sequelize.define('Contato',
    {
        nome: DataType.STRING,
        email: {
            type:DataType.STRING,
            allowNull: false
        },
        usuarios_id: DataType.INTEGER
    },
    {
        tableName:'contatos',
        timestamps: false
    }
    );

    return Contato;

}