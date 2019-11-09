const MonsterRepository = require('../repositories/monsterRepository')

class MonsterController {
  create (req, res) {
    try {
      const attributes = {
        name: req.body.name,
        health: req.body.health,
        attack: req.body.attack,
        exp: req.body.exp
      }

      const monster = MonsterRepository.create(attributes)
      res.send(JSON.stringify(monster))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async get (req, res) {
    try {
      const id = req.params.monsterId
      const monster = await MonsterRepository.get(id)
      res.send(JSON.stringify(monster))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async getAll (req, res) {
    const monsters = await MonsterRepository.getAll()
    res.send(JSON.stringify(monsters))
  }

  async update (req, res) {

  }

  async delete (req, res) {
    try {
      await MonsterRepository.delete(req.params.monsterId)
      res.send({ deleted: true })
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  };
}

module.exports = new MonsterController()
