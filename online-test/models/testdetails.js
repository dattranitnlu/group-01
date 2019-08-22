module.exports = (sequelize, type) => {
    return sequelize.define('testdetails', {
        order: {
            type : type.INTEGER,
            allowNull: false
        }
    }, { timestamps: false })
}