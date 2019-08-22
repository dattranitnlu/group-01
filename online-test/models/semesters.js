module.exports = (sequelize, type) => {
    return sequelize.define('semesters', {}, { timestamps: false })
}