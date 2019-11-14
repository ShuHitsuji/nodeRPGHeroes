const MonsterRepository = require('../repositories/monsterRepository')
const HeroRepository = require('../repositories/heroRepository')
const StageRepository = require('../repositories/stageRepository')
const Stage = require('../entities/stage')

class StageService {

    createStage(heroId, monsterId){
        const hero = HeroRepository.get(heroId);
        const monster = MonsterRepository.get(monsterId);
        const stage = await StageRepository.create(hero, monster)
        return stage;
    }

    getStage(stageId){
        const stage = await StageRepository.get(stageId);
        return stage;
    }
}


module.exports = new StageService()