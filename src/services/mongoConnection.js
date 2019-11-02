const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

const client = new MongoClient(dbConfig.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = function(callback) {

  return new Promise((resolve, reject) => {

    client.connect((err, client) => {
      if(err) {
        reject(err)
      }

      const db = client.db(dbConfig.name);
      resolve(callback(err, db))

      client.close()
    })
  })
};

module.exports = connection