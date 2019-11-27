const MonsterRepository = require('../repositories/monsterRepository');
const Joi = require('@hapi/joi');

const monsterCreateSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(24)
    .required(),
  health: Joi.number()
    .integer()
    .min(1)
    .max(9999)
    .positive()
    .required(),
  attack: Joi.number()
    .integer()
    .min(0)
    .max(9999)
    .required(),
  exp: Joi.number()
    .integer()
    .min(0)
    .max(9999)
    .required() 
})

class MonsterController {
  async create(req, res) {
    try {
      const value = await monsterCreateSchema.validateAsync({ name: req.body.name, health: req.body.health, attack: req.body.attack, exp: req.body.exp });

      const attributes = {
        name: req.body.name,
        health: req.body.health,
        attack: req.body.attack,
        exp: req.body.exp
      };

      const monster = MonsterRepository.create(attributes);
      res.send(JSON.stringify({created: true, monster}))
    } catch (e) {
      //console.error(e);
      res.send({created: false, message: e.details[0].message});
    }
  }

  async get(req, res) {
    try {
      const id = req.params.monsterId;
      const monster = await MonsterRepository.get(id);
      res.send(JSON.stringify(monster))
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  async getAll(req, res) {
    const monsters = await MonsterRepository.getAll();
    res.send(JSON.stringify(monsters))
  }

  async update(req, res) {

  }

  async delete(req, res) {
    try {
      await MonsterRepository.delete(req.params.monsterId);
      res.send({deleted: true})
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  };
}

module.exports = new MonsterController();
