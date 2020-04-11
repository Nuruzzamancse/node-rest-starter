/* eslint-disable node/no-unsupported-features/es-syntax */
import faker from 'faker'
import times from 'lodash.times'
import random from 'lodash.random'
import db from '../models'

const seedDummyData = () => {
  const sectorValues = [
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
  db.company.bulkCreate(
    times(10, () => ({
      companyName: faker.name.firstName(),
      companyAddress: faker.address.streetAddress() + ',' + faker.address.country(),
      companySector: faker.random.arrayElement(sectorValues),
      companyDescription: faker.lorem.sentence(),
      numberofEmpoyees: random(1, 10),
      numberOfLocation: random(1, 10),
      pointOfContactName: faker.name.lastName(),
      pointOfContactEmailAddress: faker.internet.email(),
      pointOfContactPhoneNumber: faker.phone.phoneNumber()
    }))
  )
  // populate emplyee table with dummy data
  db.employee.bulkCreate(
    times(10, () => ({
      employeeNmae: faker.name.firstName(),
      employeeIdNumber: faker.random.uuid(),
      employeeDepartment: faker.name.firstName(),
      haveSymptomsOfFeverlastThreedays: faker.random.boolean(),
      testedPositive: faker.random.boolean(),
      testDate: faker.date.past(),
      beenTestedWaiting: faker.random.boolean(),
      beenExposedToSomone: faker.random.boolean(),
      beenExposedToSomoneDate: faker.date.past(),
      traveledHotspotCountry: faker.random.boolean(),
      traveledHotspotCountryDate: faker.date.past(),
      canReportTowrk: faker.random.boolean(),
      companyId: random(1, 10)
    }))
  )
}

module.exports = {
  seedDummyData
}
