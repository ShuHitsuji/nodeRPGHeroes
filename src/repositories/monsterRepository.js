const Monster = require('../entities/monster')
const mongoClient = require('../services/mongoConnection')

class MonsterRepository {
  create (attributes) {
    const monster = new Monster(attributes)
    return mongoClient((err, dbo) => {
      try {
        return dbo.collection('monsters').insertOne(monster)
      } catch (e) {
        console.error(e)
      }
    })
  }

  getAll () {
    return mongoClient((err, dbo) => {
      try {
        return dbo.collection('monsters').find({}).toArray()
      } catch (e) {
        console.error(e)
      }
    })
  }

  get (id) {
    return mongoClient((err, dbo) => {
      try {
        return dbo.collection('monsters').find({ id }).toArray()
      } catch (e) {
        console.error(e)
      }
    })
  }
}

module.exports = new MonsterRepository()
