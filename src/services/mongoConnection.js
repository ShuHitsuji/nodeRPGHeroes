const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config').db;

const client = new MongoClient(dbConfig.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = function (callback) {
  return new Promise((resolve, reject) => {
    client.connect((err, client) => {
      if (err) {
        reject(err)
      }

      const db = client.db(dbConfig.name);

      const response = callback(err, db);
      if (response instanceof Promise) {
        response
            .then((res) => {
              client.close();
              resolve(res)
            }).catch(reject)
      } else {
        client.close();
        resolve(callback);
      }
    })
  })
};

module.exports = connection;
