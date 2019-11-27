const StageService = require('../services/stageService');
const Joi = require('@hapi/joi');

/**
 * Joi validation library schema for Stage creation-validation
 */
const stageCreateSchema = Joi.object({
  heroId: Joi.string()
    .alphanum()
    .min(6)
    .required(),
  monsterId: Joi.string()
    .alphanum()
    .min(6)
    .required()
})

class StageController {

  /**
   * Create a new Stage object
   * @param {heroId: String, monsterId: String} req [Your hero's id, your monster's id] 
   * @param {created: boolean, stage: Stage object} res [new Stage creation confirmation, new Stage object]
   */
  async create(req, res) {
    try {
      const value = await stageCreateSchema.validateAsync({ heroId: req.body.heroId, monsterId: req.body.monsterId });

      const heroId = req.body.heroId;
      const monsterId = req.body.monsterId;
      const stage = await StageService.createStage(heroId, monsterId);
      res.send(JSON.stringify({created: true, stage}));
    } catch (e) {
      //console.error(e);
      res.send({created: false, message: e.details[0].message});
    }
  }

  /**
   * Get a specific stage
   * @param {id: String} req [URL params must contain a valid Stage id]
   * @param {stage: Stage object} res [Stage object with the specified id]
   */
  async get(req, res) {
    try {
      const id = req.params.stageId;
      const stage = await StageService.getStage(id);
      res.send(JSON.stringify(stage));
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  /**
   * Get all stages available
   * @param {*} req [URL Path]
   * @param {[Stage Object]} res [Array with all stages currently available in repository]
   */
  async getAll(req, res) {
    try {
      const stages = await StageService.getAll();
      res.send(JSON.stringify(stages))
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  /**
   * Delete a specific stage
   * @param {id: String} req [URL params must contain a valid Stage id]
   * @param {deleted: boolean} res [deleted Stage object confirmation]
   */
  async delete(req, res) {
    try {
      const id = req.params.stageId;
      await StageService.deleteStage(id);
      res.send({deleted: true})
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

  /**
   * Enable created Stage combat method
   * @param {id: String} req [URL params must contain a valid Stage id]
   * @param {stage: Stage} res [Stage object with the specified id, method will also trigger Stage.combat]
   */
  async combat(req, res){
    try {
      const id = req.params.stageId;
      const stage = await StageService.combat(id);

      res.send(JSON.stringify({
        stage
      }));
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }
}

module.exports = new StageController();
