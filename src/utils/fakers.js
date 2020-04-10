/* eslint-disable node/no-unsupported-features/es-syntax */
import faker from 'faker'
import times from 'lodash.times'
import random from 'lodash.random'
import db from '../models'
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const seedDummyData = () => {
  db.user.bulkCreate(
    times(10, () => ({
      userName: faker.internet.userName(),
      mobileNumber: faker.phone.phoneNumber(),
      fullName: faker.name.firstName() + faker.name.lastName(),
      password: bcrypt.hashSync(faker.internet.password(), salt)
    }))
  )
  // populate post table with dummy data
  db.post.bulkCreate(
    times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      userId: random(1, 10)
    }))
  )
}

module.exports = {
  seedDummyData
}
