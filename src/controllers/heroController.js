const HeroRepository = require('../repositories/heroRepository');
const Joi = require('@hapi/joi');

/**
 * Joi validation library schema for Hero creation-validation
 */
const heroCreateSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(24)
    .required(),
  type: Joi.string()
    .alphanum()
    .min(1)
    .valid("ranger", "knight", "mage")
    .required()
})

class HeroController {

/**
 * Create a new Hero object
 * @param {name: String, type: String} req [Your hero's name, your hero's type] 
 * @param {created: boolean, hero: Hero object} res [new Hero creation confirmation, new Hero object]
 */
  async create(req, res) {
    try {

      const value = await heroCreateSchema.validateAsync({ name: req.body.name, type: req.body.type });
      
      const mainAttributes = {
        type: req.body.type,
        name: req.body.name
      };

      const hero = await HeroRepository.create(mainAttributes);
      res.send(JSON.stringify({created: true, hero}))
    } catch (e) {
      //console.error(e);
      res.send({created: false, message: e.details[0].message});       
    }
  }

  /**
   * Get all hero types available
   * @param {*} req [Hero type repository query]
   * @param {types: [HeroType Object]} res [An array with all hero types available]
   */
  async getTypes(req, res) {
    try {
      const data = await HeroRepository.getHeroTypes();
      res.send(JSON.stringify({types: data}))
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  /**
   * Get a specific hero
   * @param {id: String} req [URL params must contain a valid Hero id]
   * @param {hero: Hero object} res [Hero object with the specified id]
   */
  async get(req, res) {
    try {
      const id = req.params.heroId;
      const hero = await HeroRepository.get(id);
      res.send(JSON.stringify(hero))
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  /**
   * Get all heroes available
   * @param {*} req [URL Path]
   * @param {[Hero Object]} res [Array with all heroes currently available in repository]
   */
  async getAll(req, res) {
    const heroes = await HeroRepository.getAll();
    res.send(JSON.stringify(heroes))
  }

  /**
   * Delete a specific hero
   * @param {id: String} req [URL params must contain a valid Hero id]
   * @param {deleted: boolean} res [deleted Hero object confirmation]
   */
  async delete(req, res) {
    try {
      await HeroRepository.delete(req.params.heroId);
      res.send({deleted: true})
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }
}

module.exports = new HeroController();
