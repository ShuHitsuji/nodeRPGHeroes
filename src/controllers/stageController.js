const StageService = require('../services/stageService');
const Joi = require('@hapi/joi');

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

  async getAll(req, res) {
    try {
      const stages = await StageService.getAll();
      res.send(JSON.stringify(stages))
    } catch (e) {
      //console.error(e);
      res.send({message: 'Error'})
    }
  }

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
