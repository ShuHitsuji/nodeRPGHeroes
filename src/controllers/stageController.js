const StageService = require('../services/stageService')

class StageController {

  create (req, res) {
    try{
      const heroId = req.body.heroId;
      const heroId = req.body.monsterId;
      const stage = StageService.createStage(heroId, monsterId)
      res.send(JSON.stringify(stage))
    }catch(e){
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

  async get (req, res) {
    try {
      const stage = StageService.getStage(req.stageId)
      res.send(JSON.stringify(stage))
    } catch (e) {
      console.error(e)
      res.send({ message: 'Error' })
    }
  }

};

module.exports = new StageController()