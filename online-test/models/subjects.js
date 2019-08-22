module.exports = (sequelize, type) => {
    return sequelize.define('subjects', {
        id: {
            field: 'subjectid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectname: {
            type: type.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}