const HeroRepository = require('../repositories/heroRepository');

class HeroTypeController {
    getAll(req,res){
        const types = HeroRepository.getHeroTypes();
        res.send(JSON.stringify(types));
    }
}

module.exports = new HeroTypeController;