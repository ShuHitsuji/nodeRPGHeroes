const dbConnectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';

module.exports = {
  auth: {
    privatekey: "heroesRPG"
  },
  db: {
    host: dbConnectionString,
    name: 'heroesRPG'
  }
};
