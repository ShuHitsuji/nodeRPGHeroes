const monsters = require('../controllers/monsterController.js');

module.exports = (router) => {

	router.post('/monsters', monsters.create);

	router.get('/monsters', monsters.getAll);

	router.get('/monsters/:monsterId', monsters.get);

	router.put('/monsters/:monsterId', monsters.update);

	router.delete('/monsters/:monsterId', monsters.delete);
};
