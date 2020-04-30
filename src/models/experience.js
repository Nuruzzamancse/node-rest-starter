module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('experience', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    company: DataTypes.STRING,
    yearOfExp: DataTypes.STRING,
    technologies: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
  )

  Experience.associate = (models) => {
    Experience.belongsTo(models.basicInfo)
  }

  return Experience
}
