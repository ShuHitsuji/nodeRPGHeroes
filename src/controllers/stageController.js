import Stage from "..\entities\stage.js"
import Hero from "..\entities\hero.js"
import Monster from "..\entities\monster.js"

class StageController{
    create(req, res){
        const stage = new Stage(Hero, Monster); 
    }
};