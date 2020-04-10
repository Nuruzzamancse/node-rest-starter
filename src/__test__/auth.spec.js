'use strict'

const bcrypt = require('bcryptjs')
const supertest = require('supertest')
const httpStatus = require('http-status')

const app = require('../index')
const db = require('../models')

const salt = bcrypt.genSaltSync(10)

afterAll((done) => {
  db.User.destroy({
    where: {},
    truncate: true
  })
})

describe('auth specs', () => {
  let user = {
    userName: 'user321',
    mobileNumber: '1234567890',
    password: 'pass123'
  }

  describe('POST /api/auth/login', () => {
    test('should return unauthorized', async (done) => {
      await db.user
        .create({
          userName: user.userName,
          mobileNumber: user.mobileNumber,
          password: bcrypt.hashSync(user.password, salt)
        })
      supertest(app)
        .post('/api/auth/login')
        .send({ mobileNumber: user.mobileNumber, password: 'wrongpass' })
        .expect(httpStatus.UNAUTHORIZED)
        .then(done())
        .catch(done)
    })

    test('should return user with JWT', async (done) => {
      supertest(app)
        .post('/api/auth/login')
        .send({ mobileNumber: user.mobileNumber, password: user.password })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).toHaveProperty('token')
          expect(res.body.token.split('.')).toHaveLength(3)
          expect(res.body.user).toHaveProperty('id')
          expect(res.body.user.userName).toEqual(user.userName)
          expect(res.body.user.mobileNumber).toEqual(user.mobileNumber)
          expect(res.body.user).not.toHaveProperty('password')
          user = res.body
          return done()
        })
        .catch(done)
    })
  })
})
