const mongoose= require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

getHeroTypes();

function getHeroTypes() {
    MongoClient.connect(dbConfig.host, function (err, db){
    if(err){
        throw err;
    }else{
        console.log("connected");
        var dbo = db.db(dbConfig.name);
        dbo.collection("heroTypes").find({}).toArray(function(err, result){
            if(err){
                throw err;
            }else{
                console.log(result)
                db.close();
            }
            
        });
    }
})
}



