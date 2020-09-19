const logger = require("../../logger");

const getSuperHeroIntro = async (df,parameters) =>{
    let responseJson = {};
    // console.log(req.body);
    logger.log("info", `${(parameters)}`, null);
    let superhero = parameters['superhero'];
    let intro = 'unknown';
    switch(superhero){
        case 'Superman':{
            intro = "Superman is the last son of Krypton, sent as the dying planet's last hope to Earth, where he grew to become its protector";
            break;
        }
        case 'Batman':{
            intro = "Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.";
            break;
        }
        case 'Spiderman':{
            intro = "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.";
            break;
        }
        case 'Hulk':{
            intro = "A massive dose of gamma radiation transformed the brilliant but meek scientist Bruce Banner's DNA, awakening the hidden, adrenaline-fed hero in his genes... HULK!";
            break;
        }
        case 'Flash':{
            intro = "The Flash is the fastest man alive. He is the protector of Central City and Keystone City, fighting against evil using his super-speed and a dedicated sense of heroism.";
            break;
        }
        default:{
            intro = 'unknown';
        }
    }
    responseJson.displayText = intro;
    console.log('Response:'+JSON.stringify(responseJson));
    df.setResponseText(JSON.stringify(responseJson.displayText));
};

module.exports = getSuperHeroIntro;