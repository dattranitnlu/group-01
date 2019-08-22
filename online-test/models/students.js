module.exports = (sequelize, type) => {
    return sequelize.define('students', {
        id: {
            field: 'IdStudent',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: type.STRING,
            allowNull: false
        },
        cmnd: {
            type: type.STRING,
            allowNull: false
        },
        school: {
            type: type.STRING,
            allowNull: false

        },
        phone: {
            type: type.STRING,
            allowNull: false
        },
        code: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}