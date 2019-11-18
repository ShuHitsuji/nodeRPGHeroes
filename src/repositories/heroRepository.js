const Hero = require('../entities/hero');
const mongoClient = require('../services/mongoConnection');
const mongoDB = require('mongodb');
const toJson = require('../utils/toJson');

class HeroRepository {
  create({name, type}) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }

      const typeAttributes = await dbo.collection('heroTypes').findOne({keyname: type});

      const hero = new Hero({
        name,
        type: typeAttributes
      });

      await dbo.collection('heroes').insertOne(toJson(hero));

      return hero
    })
  }

  getAll() {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('heroes').find({}).toArray()
    })
  }

  get(id) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('heroes').findOne({_id: new mongoDB.ObjectID(id)})
    })
  }

  update(id, data) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('heroes').updateOne( {_id: new mongoDB.ObjectID(id)}, { $set: {...data}})
    })
  }

  delete(id) {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }
      dbo.collection('heroes').deleteOne({_id: new mongoDB.ObjectID(id)})
    })
  }

  getHeroTypes() {
    return mongoClient((err, dbo) => {
      if (err) {
        throw err
      }

      return dbo.collection('heroTypes').find({}).toArray()
    })
  }
}

module.exports = new HeroRepository();
