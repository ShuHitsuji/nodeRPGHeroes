const heroes = require('../controllers/heroController.js');

module.exports = (app) => {
	
	app.post('/heroes', heroes.create);

	app.get('/heroes/types', heroes.getTypes);

	app.get('/heroes', heroes.getAll);

	app.get('/heroes/:heroId', heroes.get);

	app.delete('/heroes/:heroId', heroes.delete);
};	