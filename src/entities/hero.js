
class Hero {
  constructor ({ type, name }) {
    this.name = name
    this.health = type.health
    this.attack = type.attack
    this.defense = type.defense
    this.exp = 0
    this.level = 1
  }
};

module.exports = Hero
