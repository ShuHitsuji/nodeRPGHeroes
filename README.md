# Heroes RPG

## Setup

You need to create a `.env` file. Easiest way is to copy and rename the provided `.env_template` file.

Then, you must config the variables. Like:

`DB_CONNECTION_STRING=mongodb+srv://something`

If you don't configure a remote DB, by default *mongoDB* client will try to connect to _localhost_ (so, you should have a proper local DB).

## How to run

`npm install`

`npm start`