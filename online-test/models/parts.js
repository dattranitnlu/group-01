module.exports = (sequelize, type) => {
    return sequelize.define('parts', {
        id: {
            field: 'partid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        partname: {
            type: type.STRING,
            allowNull: false
        },
        subjectid: {
            type: type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}