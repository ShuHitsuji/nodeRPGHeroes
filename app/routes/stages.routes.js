const stages = require('../controllers/stageController.js');

module.exports = (app) => {
	
	app.post('/stages', stages.create);

	app.get('/stages/list', stages.getAll);

	app.get('/stages/:stageId', stages.get);

	app.put('/stages/:stageId', stages.update);

	app.delete('/stages/:stageId', stages.delete);

	app.post('/stages/:stageId/combat', stages.combat)
};	