const mongoClient = require('../services/mongoConnection');
const toJson = require('../utils/toJson');

class UseRepository {
  create(user) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }

      await dbo.collection('users').insertOne(toJson(user));

      return user
    })
  }

  get(email) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('users').findOne({email})
    })
  }
}

module.exports = new UseRepository();