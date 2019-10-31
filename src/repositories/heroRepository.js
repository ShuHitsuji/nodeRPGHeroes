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
        return new Promise((resolve, reject) => {
            mongoClient(async (err, dbo) => {
                try {
                    const types = await dbo.collection("heroTypes").find({}).toArray();
                    resolve(types)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

module.exports = new HeroRepository;