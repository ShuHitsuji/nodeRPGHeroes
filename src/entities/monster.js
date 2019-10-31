const uuid = require('uuid/v1');

class Monster {
    constructor({ type, name, health, attack, exp }) {
        this.id = uuid();
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.exp = exp;
    }
};

module.exports = Hero;