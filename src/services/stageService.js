const MonsterRepository = require('../repositories/monsterRepository')
const HeroRepository = require('../repositories/heroRepository')
const StageRepository = require('../repositories/stageRepository')

class StageService {
  async createStage (heroId, monsterId) {
    try {
      const hero = await HeroRepository.get(heroId)
      const monster = await MonsterRepository.get(monsterId)
      const stage = await StageRepository.create(hero, monster)
      return stage
    } catch (e) {
      throw e
    }
  }

  async getStage (id) {
    try {
      const stage = await StageRepository.get(id)
      return stage
    } catch (e) {
      throw e
    }
  }

  async combat (id) {
    try {
      const stage = await StageRepository.get(id)
      const log = [];
      let hero = stage.hero
      const monster = stage.monster

      while (hero.health > 0 && monster.health > 0) {
        monster.health -= hero.attack
        log.push("The hero deal " + hero.attack + " damage to the monster")
        log.push("Monster current health: " + monster.health)

        if (monster.health > 0) {
           hero.health -= monster.attack;
           log.push("The monster deal " + monster.attack + " damage to the hero") 
           log.push("Hero current health: " + hero.health)
          }
          
      }

      let success = false
      if (hero.health > 0) {
        hero = await this.updateHero(hero._id, monster.exp)
        success = true
      }
      log.push(success ? "VICTORY!!!" : "DEFEAT")

      stage.setHero(hero)

      return { success, stage, log }
    } catch (e) {
      throw e
    }
  }

  async updateHero (id, exp) {
    try {
      const hero = await HeroRepository.get(id)

      const updatedHero = this.gainExp(hero, exp)
      await HeroRepository.update(id, updatedHero)

      return updatedHero
    } catch (e) {
      throw e
    }
  }

  nextLevel (level) {
    return Math.round((4 * (level ^ 3)) / 5)
  }

  gainExp (hero, amout) {
    hero.exp += amout
    while (hero.exp >= this.nextLevel(hero.level)) {
      hero.exp -= this.nextLevel(hero.level)
      hero = this.lvlUp(hero)
    }
    return hero
  }

  lvlUp (hero) {
    hero.level += 1
    hero.health += 10
    hero.attack += 10
    hero.defense += 10
    return hero
  }

  async getAll () {
    try {
      const stages = await StageRepository.getAll()
      return stages
    } catch (e) {
      throw e
    }
  }

  async deleteStage (id) {
    try {
      return await StageRepository.delete(id)
    } catch (e) {
      throw e
    }
  }
}

module.exports = new StageService()
