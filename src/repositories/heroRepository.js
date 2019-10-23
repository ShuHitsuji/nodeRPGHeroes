const Hero = require('../entities/hero');

class HeroRepository {
    constructor() {
        this.heroes = {}
    }    

    create(attributes) {
        const hero = new Hero(attributes);
        this.heroes[hero.id] = hero;
        console.log("heroes", this.heroes)
        return hero;
    }

    get(id){
        return this.heroes[id];
    } 
}

module.exports = new HeroRepository;