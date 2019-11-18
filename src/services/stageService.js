const MonsterRepository = require('../repositories/monsterRepository');
const HeroRepository = require('../repositories/heroRepository');
const StageRepository = require('../repositories/stageRepository');
const Stage = require('../entities/stage');

class StageService {

  async createStage(heroId, monsterId) {
    try {
      const hero = await HeroRepository.get(heroId);
      const monster = await MonsterRepository.get(monsterId);
      const stage = await StageRepository.create(hero, monster);
      return stage
    } catch (e) {
      throw e
    }

  }

  async getStage(id) {
    try {
      const stage = await StageRepository.get(id);
      return stage;
    } catch (e) {
      throw e
    }
  }

  async combat(id){
    try{
      const stage = await StageRepository.get(id);
      const hero = stage.hero;
      const monster = stage.monster;

      while(hero.health > 0 && monster.health > 0){
        monster.health -= hero.attack;
        if(monster.health > 0)
          hero.health -= monster.attack;
      }
      if(hero.health > 0){
        return this.updateHero(hero._id, monster.exp)
      }
    }catch(e){
      throw e
    }
  }

  async updateHero(id, exp){
    try {
      const hero = await HeroRepository.get(id);
      console.log(hero)
      const newHero = this.gainExp(hero, exp); 
      return await HeroRepository.update(id, newHero)
    } catch (e) {
      throw e
    }
  }

  nextLevel(level){
    return Math.round((4 * (level ^ 3)) / 5)
  }

  gainExp(hero, amout){
    hero.exp += amout;
    if(hero.exp>= this.nextLevel(hero.level)){
      hero = this.lvlUp(hero);
    }
    return hero
  }

  lvlUp(hero){
    hero.level+=1;
    hero.health+=10;
    hero.attack+=10;
    hero.defense+=10;
    return hero;
  }

  async getAll() {
    try {
      const stages = await StageRepository.getAll();
      return stages;
    } catch (e) {
      throw e
    }
  }

  async deleteStage(id) {
    try {
      return await StageRepository.delete(id);
    } catch (e) {
      throw e
    }
  }


}


module.exports = new StageService();