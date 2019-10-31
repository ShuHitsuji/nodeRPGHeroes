const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://hero:heroMonster@heroesrpg-qzzra.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = function(callback) {


  return client.connect((err, client) => {
    if(err)
      throw err

    const db = client.db('heroesRPG');

    callback(err, db)

    client.close()
  })
};

module.exports = connection