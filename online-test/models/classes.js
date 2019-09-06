module.exports = (sequelize, type) => {
    return sequelize.define('classes', {
        id: {
            field: 'classid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        classname: {
            type: type.STRING,
            allowNull: false
        },
        userid: {
            type: type.INTEGER,
            allowNull: false
        },
    }, { timestamps: false })
}