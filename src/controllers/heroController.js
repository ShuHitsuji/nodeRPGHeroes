const Hero = require('../entities/hero');

class HeroController {
    create(req, res) {
        const attributes = {
            type: req.body.type,
            name: req.body.name,
            health: req.body.health,
            attack: req.body.attack,
            defense: req.body.defense,
        };
        const hero = new Hero(attributes);

        res.send(JSON.stringify(hero));
    }
}

module.exports = new HeroController;