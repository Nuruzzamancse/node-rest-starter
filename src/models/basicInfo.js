module.exports = (sequelize, DataTypes) => {
  const BasicInfo = sequelize.define('basicInfo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
  )

  BasicInfo.associate = (models) => {
    BasicInfo.hasMany(models.experience)
    BasicInfo.hasMany(models.project)
  }

  return BasicInfo
}
