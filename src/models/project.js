module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    projectName: DataTypes.STRING,
    frontTech: DataTypes.STRING,
    backTech: DataTypes.STRING,
    dataBase: DataTypes.STRING,
    repo: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
  )

  Project.associate = (models) => {
    Project.belongsTo(models.basicInfo)
  }

  return Project
}
