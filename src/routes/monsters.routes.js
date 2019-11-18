const monsters = require('../controllers/monsterController.js');

module.exports = (router) => {
  router.post('/monsters', monsters.create);

  router.get('/monsters/:monsterId', monsters.get);

  router.get('/monsters', monsters.getAll);

  router.put('/monsters/:monsterId', monsters.update);

  router.delete('/monsters/:monsterId', monsters.delete)
};
