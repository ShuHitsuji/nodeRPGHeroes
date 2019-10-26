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

    getHeroTypes() {
        MongoClient.connect('mongodb://localhost:27017', function (err, db){
        if(err){
            throw err;
        }else{
            console.log("connected");
    
            var dbo = db.db("herosRPG");
            dbo.collection("heroTypes").find({}).toArray(function(err, result){
                console.log("B")
                console.log(result)
                db.close();
            });
        }
        console.log("A")
    })
    }
}

module.exports = new HeroRepository;