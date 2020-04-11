/* eslint-disable no-undef */
/* eslint-disable jest/no-identical-title */
let UsarDao = require('../api/user/user.controller')

jest.mock('../api/user/user.controller', () => () => {
  const SequelizeMock = require('sequelize-mock')
  const dbMock = new SequelizeMock()
  return dbMock.define('user', {
    userId: 2,
    emailId: 'xyz@abc.com',
    firstName: 'good',
    lastName: 'day',
    creTs: '2019-01-01 13:30:31',
    creUserId: 'dummy'
  })
})

describe('Test Sequelize Mocking', () => {
  it('Should get value from mock', async () => {
    const user = await UsarDao.getOneUser()
    console.log('Under user')
    console.log(user)
    expect(user.firstName).toEqual('good')
  })
})
