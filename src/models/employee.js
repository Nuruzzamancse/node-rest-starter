module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employeeNmae: { type: DataTypes.STRING },
    employeeIdNumber: { type: DataTypes.STRING },
    employeeDepartment: { type: DataTypes.STRING },
    haveSymptomsOfFeverlastThreedays: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    testedPositive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    testDate: { type: DataTypes.DATE },
    beenTestedWaiting: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    beenExposedToSomone: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    beenExposedToSomoneDate: { type: DataTypes.DATE },
    traveledHotspotCountry: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    traveledHotspotCountryDate: { type: DataTypes.DATE },
    canReportTowrk: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
  },
  {
    freezeTableName: true
  }
  )

  Employee.associate = (models) => {
    Employee.belongsTo(models.company)
  }

  return Employee
}
