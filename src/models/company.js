module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: { type: DataTypes.STRING },
    companyAddress: { type: DataTypes.STRING },
    companySector: {
      type: DataTypes.ENUM,
      values: [
        'Academic',
        'Associations-Professional Services',
        'Critical Infrastructure',
        'Entertainment',
        'Faith-based',
        'Finance',
        'Government',
        'Healthcare',
        'Hospitality',
        'Information Technology',
        'Manufacturing',
        'Nonprofits',
        'Retail Commodities',
        'Transportation'
      ]
    },
    companyDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    numberofEmpoyees: { type: DataTypes.INTEGER },
    numberOfLocation: { type: DataTypes.INTEGER },
    pointOfContactName: { type: DataTypes.STRING },
    pointOfContactEmailAddress: { type: DataTypes.STRING },
    pointOfContactPhoneNumber: { type: DataTypes.STRING }
  },
  {
    freezeTableName: true
  }
  )

  Company.associate = (models) => {
    Company.hasMany(models.employee)
  }

  return Company
}
