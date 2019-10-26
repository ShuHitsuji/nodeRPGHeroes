const Hero = require('../entities/hero');
const dbConfig = require('../config').db;

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

    getHeroTypes() {
        MongoClient.connect(dbConfig.host, function (err, db){
        if(err){
            throw err;
        }else{
            console.log("connected");
    
            var dbo = db.db(dbConfig.name);
            dbo.collection("heroTypes").find({}).toArray(function(err, result){
                console.log(result)
                db.close();
            });
        }
    })
    }
}

module.exports = new HeroRepository;