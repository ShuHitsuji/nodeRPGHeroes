const MonsterRepository = require('../repositories/monsterRepository')
const HeroRepository = require('../repositories/heroRepository')
const StageRepository = require('../repositories/stageRepository')
const Stage = require('../entities/stage')

class StageService {

    async createStage(heroId, monsterId){
        try{
            const hero = await HeroRepository.get(heroId);
            const monster = await MonsterRepository.get(monsterId);
            const stage = await StageRepository.create(hero, monster)
            return stage
        }catch(e){
            throw e
        }
        
    }

    async getStage(id){
        try {
            const stage = await StageRepository.get(id);
            return stage;
        }catch(e) {
            throw e
        }
    }
}


module.exports = new StageService()