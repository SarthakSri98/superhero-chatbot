const getSuperPowersFromKnown = async (df,parameters) =>{
    let responseJson = {};
    // console.log(req.body);
     console.log('Parameters:'+JSON.stringify(parameters));

     let superhero = "";
     let item = df.context.get('awaiting_superhero');
     console.log('Item Params:'+JSON.stringify(item));
     if(item && !superhero){
         superhero = item.parameters.superhero;
     }
     let powers = 'unknown';
     switch(superhero){
         case 'Superman':{
             powers = "super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor";
             break;
         }
         case 'Batman':{
             powers = "exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology.";
             break;
         }
         case 'Spiderman':{
             powers = "wall-crawling, enhanced strength, speed, reflexes, durability, stamina, healing, and agility";
             break;
         }
         case 'Hulk':{
             powers = "incredible superhuman strength, durability, and healing factor";
             break;
         }
         case 'Flash':{
             powers = "super speed, intangibility, superhuman agility";
             break;
         }
         default:{
             powers = 'unknown';
         }
     }
     responseJson.displayText = "The powers of "+superhero+" : "+ powers;
     console.log('Response:'+JSON.stringify(responseJson));
     df.setResponseText(JSON.stringify(responseJson.displayText));};

module.exports = getSuperPowersFromKnown;