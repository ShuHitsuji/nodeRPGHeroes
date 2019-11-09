const HeroRepository = require('../repositories/heroRepository')

class HeroController {
  async create (req, res) {
    try {
      const mainAttributes = {
        type: req.body.type,
        name: req.body.name
      }

      const hero = await HeroRepository.create(mainAttributes)

      res.send(JSON.stringify({ created: true, hero }))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async getTypes (req, res) {
    try {
      const data = await HeroRepository.getHeroTypes()
      res.send(JSON.stringify({ types: data }))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async get (req, res) {
    try {
      const id = req.params.heroId
      const hero = await HeroRepository.get(id)
      res.send(JSON.stringify(hero))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async getAll (req, res) {
    const heroes = await HeroRepository.getAll()
    res.send(JSON.stringify(heroes))
  }

  async delete (req, res) {
    try {
      await HeroRepository.delete(req.params.heroId)
      res.send({ deleted: true })
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  };
}

module.exports = new HeroController()
