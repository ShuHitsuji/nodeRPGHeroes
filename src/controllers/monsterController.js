const MonsterRepository = require('../repositories/monsterRepository');
const Joi = require('@hapi/joi');

/**
 * Joi validation library schema for Monster creation-validation
 */
const monsterCreateSchema = Joi.object({
  name: Joi.string()
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

  /**
   * Create a new Monster object
   * @param {name: String, health: Integer, attack: Integer, exp: Integer} req [Your monster's name, health, attack, and exp values]
   * @param {created: boolean, monster: Monster object} res [new Monster creation confirmation, new Monster object]
   */
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

  /**
    * Get a specific monster
    * @param {id: String} req [URL params must contain a valid Monster id]
    * @param {monster: Monster object} res [Monster object with the specified id]
  */
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

  /**
   * Get all monsters available
   * @param {*} req [URL Path]
   * @param {[Monster Object]} res [Array with all monsters currently available in repository]
   */
  async getAll(req, res) {
    const monsters = await MonsterRepository.getAll();
    res.send(JSON.stringify(monsters))
  }

  /**
   * Update a specific monster
   * @param {monster: Monster object} req [your new Monster object, URL params must contain a valid Monster id]
   * @param {updated: boolean, monster: Monster object} res [updated Monster confirmation, updated Monster object]
   */
  async update(req, res) {
    try {
      const id = req.params.monsterId;
      const monster = await MonsterRepository.get(id)
      const nuMonster = req.body;
      await MonsterRepository.update(id, nuMonster);
      res.send(JSON.stringify({updated: true, nuMonster}));
    } catch (e) {
      res.send({message: 'Error'})
    }
  }

  /**
   * Delete a specific monster
   * @param {id: String} req [URL params must contain a valid Monster id]
   * @param {deleted: boolean} res [deleted Monster object confirmation]
   */
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
