module.exports = (sequelize, type) => {
    return sequelize.define('questiontypes', {
        id: {
            field: 'questiontypeid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typename: {
            type: type.STRING,
            allowNull: true
        }
    }, { timestamps: false })
}