const stages = require('../controllers/stageController.js');

module.exports = (router) => {
  //STAGE-CREATION ROUTE
  router.post('/stages', stages.create);

  //STAGE-COLLECTION FETCHING ROUTE
  router.get('/stages', stages.getAll);

  //STAGE-FETCHING ROUTE
  router.get('/stages/:stageId', stages.get);

  //router.put('/stages/:stageId', stages.update)

  //STAGE-DELETION ROUTE
  router.delete('/stages/:stageId', stages.delete)

  //STAGE-COMBAT DEDICATED ROUTE
  router.post('/stages/:stageId/combat', stages.combat)
};
