const Hero = require('../entities/hero')
const mongoClient = require('../services/mongoConnection')
const mongoDB = require('mongodb')
const HeroType = require('../entities/heroType')

class HeroRepository {
  create (mainAttributes) {
    const typeAttributes = HeroType[mainAttributes.type]

    const hero = new Hero({
      name: mainAttributes.name,
      type: typeAttributes
    })

    return mongoClient(async (err, dbo) => {
      if (err) { throw err }
      await dbo.collection('heroes').insertOne(hero)

      return hero
    })
  }

  getAll () {
    return mongoClient((err, dbo) => {
      if (err) { throw err }

      return dbo.collection('heroes').find({}).toArray()
    })
  }

  get (id) {
    return mongoClient((err, dbo) => {
      if (err) { throw err }

      return dbo.collection('heroes').findOne({ _id: new mongoDB.ObjectID(id) })
    })
  }

  delete (id) {
    return mongoClient((err, dbo) => {
      if (err) { throw err }
      dbo.collection('heroes').deleteOne({ _id: new mongoDB.ObjectID(id) })
    })
  }

  getHeroTypes () {
    return mongoClient((err, dbo) => {
      if (err) { throw err }

      return dbo.collection('heroTypes').find({}).toArray()
    })
  }
}

module.exports = new HeroRepository()
