# Heroes RPG

## Setup

You need to create a `.env` file. Easiest way is to copy and rename the provided `.env_template` file.

Then, you must config the variables. Like:

`DB_CONNECTION_STRING=mongodb+srv://something`

If you don't configure a remote DB, by default *mongoDB* client will try to connect to _localhost_ (so, you should have a proper local DB).

## How to run

`npm install`

`npm start`

## Testing endpoints

#### List all endpoints
```
curl -X GET http://localhost:3000/api \
  -H 'Content-Type: application/json'
```

### Heroes
#### Get hero types
```
curl -X GET \
  http://localhost:3000/api/heroes/types
```
  
#### Create hero
```
curl -X POST \
  http://localhost:3000/api/heroes \
  -H 'Content-Type: application/json' \
  -d '{
        "type": "Mage",
        "name": "Megumin"
  }'
```

Where `type` is a valid hero type

#### List heroes
```
curl -X GET \
  http://localhost:3000/api/heroes \
  -H 'Content-Type: application/json'
```

#### Get hero
```
curl -X GET \
  http://localhost:3000/api/heroes/5dbde96e11d7d922b2867a61 \
  -H 'Content-Type: application/json'
```
  
Where `5dbde96e11d7d922b2867a61` is the hero `id`
  
#### Delete hero
```
curl -X DELETE \
  http://localhost:3000/api/heroes/5dbde96e11d7d922b2867a61 
```

Where `5dbde96e11d7d922b2867a61` is the hero `id`


### Monsters

#### Create monster
```
curl -X POST \
  http://localhost:3000/api/monsters \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Darkness",
        "health": 500,
        "attack": 130,
        "exp": 4
  }'
```

#### List monsters
```
curl -X GET \
  http://localhost:3000/api/monsters \
  -H 'Content-Type: application/json'
```

#### Get monster
```
curl -X GET \
  http://localhost:3000/api/monsters/5dbde96e11d7d922b2867a61 \
  -H 'Content-Type: application/json'
```

Where `5dc721df22e64e70d34bc94b` is the monster `id`

#### Delete monster
```
curl -X DELETE \
  http://localhost:3000/api/monsters/5dc721df22e64e70d34bc94b 
```

Where `5dc721df22e64e70d34bc94b` is the hero `id`
