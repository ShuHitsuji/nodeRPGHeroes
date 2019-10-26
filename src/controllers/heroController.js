const HeroRepository = require('../repositories/heroRepository');

class HeroController {
    create(req, res) {
        const attributes = {
            type: req.body.type,
            name: req.body.name,
            health: req.body.health,
            attack: req.body.attack,
            defense: req.body.defense,
        };

        const hero = HeroRepository.create(attributes);

        res.send(JSON.stringify(hero));
    }

    async getTypes(req,res){
        try {
            const data =  await HeroRepository.getHeroTypes()
            res.send(JSON.stringify({types: data}));
        } catch(e) {
            console.error("El error: ", e)
            res.send({message: "Error"})
        }
    }

    get(req,res){
        const id = req.params.id;
        const hero = HeroRepository.get(id);
        res.send(JSON.stringify(hero));
    }

    getAll(req, res){
        
    }

    update(req, res){

    }

    delete(req, res){

    };
}

module.exports = new HeroController;