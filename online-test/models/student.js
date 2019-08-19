module.exports = (sequelize, type) => {
    return sequelize.define('students', {
        id: {
            field: 'IdStudent',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        FullName: {
            type: type.STRING,
            allowNull: false
        },
        CMND: {
            type: type.STRING,
            allowNull: false
        },
        School: {
            type: type.STRING,
            allowNull: false

        },
        Phone: {
            type: type.STRING,
            allowNull: false
        },
        Code: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}