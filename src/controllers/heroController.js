const HeroRepository = require('../repositories/heroRepository');
const HeroType = require('../entities/heroType');

class HeroController {
    create(req, res) {
        const type = HeroType[req.body.type];

        const attributes = {
            type,
            name: req.body.name,
            exp: req.body.exp,
            level: req.body.level,
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