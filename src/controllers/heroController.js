const HeroRepository = require('../repositories/heroRepository');
const HeroType = require('../entities/heroType');

class HeroController {
    create(req, res) {
        const type = HeroType[req.body.type];
        const attributes = {
            type,
            name: req.body.name
        };

        const hero = HeroRepository.create(attributes);
        res.send(JSON.stringify(hero));
    }

    async getTypes(req,res){
        try {
            const data =  await HeroRepository.getHeroTypes()
            res.send(JSON.stringify({types: data}));
        } catch(e) {
            console.error(e)
            res.send({message: "Error"})
        }
    }

    async get(req,res){
        try {
            const id = req.params.id;
            const hero = await HeroRepository.get(id);
            res.send(JSON.stringify(hero));
        } catch(e) {
            console.error(e)
            res.send({message: "Error"})
        }
    }

    async getAll(req, res){
        const heroes = await HeroRepository.getAll();
        res.send(JSON.stringify(heroes));
    }

    async delete(req, res){
      try{
        await HeroRepository.delete(req.params.heroId);
        res.sendStatus(200);
      }catch(e){
        console.error(e);
        res.send({message: "Error"})
      }
    };
}

module.exports = new HeroController;