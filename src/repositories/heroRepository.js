const Hero = require('../entities/hero');
const mongoClient = require('../services/mongoConnection');
const mongodb = require('mongodb');

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

    get(id){
        return mongoClient((err, dbo)=>{
            try {
                return dbo.collection("heroes").find({id}).toArray();

            } catch (e) {
                console.error(e)
            }
        })
    }

    delete(id){
      return mongoClient((err,dbo)=>{
        try{
          dbo.collection("heroes").deleteOne({_id: new mongodb.ObjectID(id)});
        }catch(e){
          console.error(e);
        }
      })
    }

    getHeroTypes() {
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