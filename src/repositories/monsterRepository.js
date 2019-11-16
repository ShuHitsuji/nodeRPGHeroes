const Monster = require('../entities/monster');
const mongoClient = require('../services/mongoConnection');
const mongoDB = require('mongodb');

class MonsterRepository {
  create(attributes) {
    const monster = new Monster(attributes);

    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }
      await dbo.collection('monsters').insertOne(monster);

      return monster
    })
  }

  getAll() {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('monsters').find({}).toArray()
    })
  }

  get(id) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('monsters').findOne({_id: new mongoDB.ObjectID(id)})
    })
  }

  delete(id) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }
      dbo.collection('monsters').deleteOne({_id: new mongoDB.ObjectID(id)})
    })
  }
}

module.exports = new MonsterRepository();
