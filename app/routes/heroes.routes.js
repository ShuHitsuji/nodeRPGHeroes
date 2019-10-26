module.exports = (app) => {
	const heroes = require('../controllers/heroController.js');

	app.post('/heroes', heroes.create);

	app.get('/heroes/list', heroes.getAll);

	app.get('/heroes/:heroId', heroes.get);

	app.put('/heroes/:heroId', heroes.update);

	app.delete('/heroes/:heroId', heroes.delete);