const Stage = require('../entities/stage');
const mongoClient = require('../services/mongoConnection');
const mongoDB = require('mongodb');

class StageRepository {
  create(hero, monster) {
    const stage = new Stage(hero, monster);

    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }
      await dbo.collection('stages').insertOne(stage);

      return stage
    })
  }

  getAll() {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('stages').find({}).toArray()
    })
  }

  get(id) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }

      const stage = await dbo.collection('stages').findOne({_id: new mongoDB.ObjectID(id) })

      if (stage) {
        const { hero, monster } = stage
        return new Stage(hero, monster)
      }

      return null
    })
  }

  delete(id) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }
      dbo.collection('stages').deleteOne({_id: new mongoDB.ObjectID(id)})
    })
  }

}

module.exports = new StageRepository();
