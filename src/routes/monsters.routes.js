const monsters = require('../controllers/monsterController.js');

module.exports = (router) => {
  //MONSTER-CREATION ROUTE
  router.post('/monsters', monsters.create);
  
  //MONSTER-FETCHING ROUTE
  router.get('/monsters/:monsterId', monsters.get);

  //MONSTER-COLLECTION FETCHING ROUTE
  router.get('/monsters', monsters.getAll);

  //MONSTER-UPDATE ROUTE
  router.put('/monsters/:monsterId', monsters.update);

  //MONSTER-DELETION ROUTE
  router.delete('/monsters/:monsterId', monsters.delete)
};
