module.exports = (sequelize, type) => {
    return sequelize.define('semesters', {
        id: {
            type: type.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        semestername: {
            type: type.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}