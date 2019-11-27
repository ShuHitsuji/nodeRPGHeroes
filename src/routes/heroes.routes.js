const heroes = require('../controllers/heroController.js');

module.exports = (router) => {
  /** HERO-CREATION ROUTE */
  router.post('/heroes', heroes.create);

  /** HERO TYPE-COLLECTION FETCHING ROUTE */
  router.get('/heroes/types', heroes.getTypes);

  /** HERO-FETCHING ROUTE */
  router.get('/heroes/:heroId', heroes.get);

  /** HERO-COLLECTION FETCHING ROUTE */
  router.get('/heroes', heroes.getAll);

  /** HERO-DELETION ROUTE */
  router.delete('/heroes/:heroId', heroes.delete)
};
