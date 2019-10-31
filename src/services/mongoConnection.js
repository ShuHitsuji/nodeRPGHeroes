const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

const client = new MongoClient(dbConfig.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = function(callback) {

  return client.connect((err, client) => {
    if(err)
      throw err

    const db = client.db(dbConfig.name);

    callback(err, db)

    client.close()
  })
};

module.exports = connection