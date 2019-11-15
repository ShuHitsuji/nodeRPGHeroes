const stages = require('../controllers/stageController.js')

module.exports = (router) => {
  router.post('/stages', stages.create)

  router.get('/stages', stages.getAll)

  router.get('/stages/:stageId', stages.get)

  //router.put('/stages/:stageId', stages.update)

  //router.delete('/stages/:stageId', stages.delete)

  //router.post('/stages/:stageId/combat', stages.combat)
}
