module.exports = (sequelize, type) => {
    return sequelize.define('usertypes', {
        id: {
            field: 'usertypeid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userrole: {
            type: type.STRING,
            allowNull: true
        }
    }, { timestamps: false })
}