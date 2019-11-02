const heroes = require('../controllers/heroController.js');

module.exports = (app) => {
	
	app.post('/heroes', heroes.create);

	app.get('/heroes/types', heroes.getTypes);

	app.get('/heroes', heroes.getAll);

	app.get('/heroes/:heroId', heroes.get);

	app.put('/heroes/:heroId', heroes.update);

	app.delete('/heroes/:heroId', heroes.delete);
};	