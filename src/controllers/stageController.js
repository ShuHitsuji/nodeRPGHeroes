const StageService = require('../services/stageService')

class StageController {

  async create(req, res) {
    try {
      const heroId = req.body.heroId;
      const monsterId = req.body.monsterId;
      const stage = await StageService.createStage(heroId, monsterId)
      res.send(JSON.stringify(stage));
    } catch (e) {
      console.error(e)
      res.send({message: 'Error'})
    }
  }

  async get(req, res) {
    try {
      const id = req.params.stageId;
      console.log(id)
      const stage = await StageService.getStage(id)
      res.send(JSON.stringify(stage));
    } catch (e) {
      console.error(e)
      res.send({message: 'Error'})
    }
  }

  async getAll(req, res) {
    try {
      const stages = await StageService.getAll()
      res.send(JSON.stringify(stages))
    } catch (e) {
      console.error(e)
      res.send({message: 'Error'})
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.stageId;
      await StageService.deleteStage(id)
      res.send({deleted: true})
    } catch (e) {
      console.error(e)
      res.send({message: 'Error'})
    }
  }


};

module.exports = new StageController()