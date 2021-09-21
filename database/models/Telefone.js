
module.exports = (sequelize, DataType)=>{
    const Telefone = sequelize.define('Telefone',
    {
        numero: DataType.INTEGER,
        contatos_id:DataType.INTEGER
    },
    {
        tableName:'telefones',
        timestamps: false
    }
    );

    return Telefone;

}