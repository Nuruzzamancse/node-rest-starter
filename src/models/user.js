module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    freezeTableName: true
  }
  )

  User.associate = (models) => {
    User.hasMany(models.post)
  }

  return User
}
