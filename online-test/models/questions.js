module.exports = (sequelize, type) => {
    return sequelize.define('questions', {
        id: {
            field: 'questionid',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: type.TEXT,
            allowNull: false
        },
        isShuffle: {
            type: type.BOOLEAN,
            allowNull: false
        },
        partid: {
            type: type.INTEGER,
            allowNull: false
        },
        questiontypeid: {
            type: type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}