module.exports = (app) => {
	const heroes = require('../controllers/heroController.js');

	app.post('/heroes', heroes.create);

	app.get('/heroes/list', heroes.findAll);

	