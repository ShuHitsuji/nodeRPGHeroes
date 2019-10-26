const mongoose= require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const dbconfig = require('../src/config.js');

myFunction();



function getHeroTypes() {
    MongoClient.connect(dbconfig, function (err, db){
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



