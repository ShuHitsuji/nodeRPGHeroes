const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

const connection = function (callback) {
  const client = new MongoClient(dbConfig.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return new Promise((resolve, reject) => {
    client.connect(async (err, client) => {
      if (err) {
        reject(err)
      }
      const db = client.db(dbConfig.name);

      const response = await callback(err, db);
      client.close();

      resolve(response)
    })
  })
};

module.exports = connection;
