const Hero = require('../entities/hero');
const mongoClient = require('../services/mongoConnection');

class HeroRepository {
    create(attributes) {
        const hero = new Hero(attributes);
        return mongoClient((err, dbo)=>{
            try {
                return dbo.collection("heroes").insertOne(hero);

            } catch (e) {
                console.error(e)
            }
        })
    }

    getAll(){
        return mongoClient((err, dbo)=>{
            try {
                return dbo.collection("heroes").find({}).toArray();

            } catch (e) {
                console.error(e)
            }
        })
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