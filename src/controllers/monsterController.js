const MonsterRepository = require('../repositories/monsterRepository');

class MonsterController {
    create(req, res) {
        const attributes = {
            name: req.body.name,
            health: req.body.health,
            attack: req.body.attack,
            exp: req.body.exp
        };

        const monster = MonsterRepository.create(attributes);
        res.send(JSON.stringify(monster));
    }

    async get(req,res){
        try {
            const id = req.params.id;
            const monster = await MonsterRepository.get(id);
            res.send(JSON.stringify(monster));
        } catch(e) {
            console.error(e)
            res.sendStatus(500)
        }
    }

    async getAll(req, res){
        const monsters = await MonsterRepository.getAll();
        res.send(JSON.stringify(monsters));
    }

    update(req, res){

    }

    delete(req, res){

    };
}

module.exports = new HeroController;