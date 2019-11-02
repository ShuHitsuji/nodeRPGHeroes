const Hero = require('../entities/hero');
const mongoClient = require('../services/mongoConnection');

class HeroRepository {
    constructor() {
        this.heroes = {}
    }

    create(attributes) {
        const hero = new Hero(attributes.type, attributes.name);
        this.heroes[hero.id] = hero;
        return hero;
    }

    get(id){
        return this.heroes[id];
    }

    async getHeroTypes() {
        return mongoClient( (err, dbo) => {
            try {
                return dbo.collection("heroTypes").find({}).toArray();
            } catch (e) {
                console.error(e)
            }
        })
    }
}

module.exports = new HeroRepository;