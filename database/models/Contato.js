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

    //Relações:

    //Associoando contato com telefones (um contato tem muitos telefones)
    Contato.associate = (models) => {
        Contato.hasMany(models.Telefone, {as:'telefones', foreignKey:'contatos_id'})
    //Um contato pertence a um usuario. Ao contrario do model Usuario (um usuario tem muitos contatos) 
        Contato.belongsTo(models.Usuario, {as:'usuario', foreignKey:'usuarios_id'})
    }

    return Contato;

}