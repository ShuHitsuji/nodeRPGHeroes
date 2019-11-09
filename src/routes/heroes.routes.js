const heroes = require('../controllers/heroController.js')

module.exports = (router) => {
  router.post('/heroes', heroes.create)

  router.get('/heroes/types', heroes.getTypes)

  router.get('/heroes', heroes.getAll)

  router.get('/heroes/:heroId', heroes.get)

  router.delete('/heroes/:heroId', heroes.delete)
}
