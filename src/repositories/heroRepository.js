const Hero = require('../entities/hero');
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

class HeroRepository {
    constructor() {
        this.heroes = {}
    }    

    create(attributes) {
        const hero = new Hero(attributes);
        this.heroes[hero.id] = hero;
        return hero;
    }

    get(id){
        return this.heroes[id];
    } 

    async getHeroTypes() {
        const db = await MongoClient.connect(dbConfig.host, { useUnifiedTopology: true });
        const dbo = db.db(dbConfig.name);

        return new Promise((resolve, reject) => {

            dbo.collection("heroTypes").find({}).toArray(function(err, result){
                if(err) {
                    reject(err)
                } else {
                    resolve(result)
                }
                db.close();
            });
        })
    }
}

module.exports = new HeroRepository;