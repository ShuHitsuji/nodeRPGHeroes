const monsters = require('../controllers/monsterController.js');

module.exports = (app) => {
	
	app.post('/monsters', monsters.create);

	app.get('/monsters', monsters.getAll);

	app.get('/monsters/:monsterId', monsters.get);

    app.put('/monsters/:monsterId', monsters.updatemonsters);
    
	app.delete('/monsters/:monsterId', monsters.delete);
};