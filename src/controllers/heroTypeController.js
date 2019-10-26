const HeroRepository = require('../repositories/heroRepository');

class HeroTypeController {
     async getAll(req,res){
        try {
            const data =  await HeroRepository.getHeroTypes()
            res.send(JSON.stringify({types: data}));
        } catch(e) {
            console.error("El error: ", e)
            res.send({message: "Error"})
        }
    }
}

module.exports = new HeroTypeController;