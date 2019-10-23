const uuid = require('uuid/v1');

class Hero {
    constructor({ type, name, health, attack, defense }) {
        this.id = uuid();
        this.name = name;
        this.health = health;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.exp = 0;
        this.level = 1;
    }
};

module.exports = Hero;