module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            field: 'userid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
        fullName: {
            type: type.STRING,
            allowNull: true
        },
        identitycard: {
            type: type.STRING,
            allowNull: true
        },
        birthday: {
            type: type.DATEONLY,
            allowNull: true
        },
        sex: {
            type: type.BOOLEAN,
            allowNull: true
        },
        address: {
            type: type.STRING,
            allowNull: true
        },
        status: {
            type: type.BOOLEAN,
            allowNull: false
        },
        usertypeid: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}