const getSuperHeroRealName = async (df,parameters) =>{
    let responseJson = {};
    console.log(req.body);
    //console.log('Parameters:'+JSON.stringify(parameters));
    console.log('Input Contexts:'+JSON.stringify(inputContexts));
    console.log('Output Contexts:'+JSON.stringify(outputContexts));

    let superhero = parameters['superhero'];
    let realName = 'unknown';
    switch(superhero){
        case 'Superman':{
            realName = 'Clark Kent';
            break;
        }
        case 'Batman':{
            realName = 'Bruce Wayne';
            break;
        }
        case 'Spiderman':{
            realName = 'Peter Parker';
            break;
        }
        case 'Hulk':{
            realName = 'Bruce Banner';
            break;
        }
        case 'Flash':{
            realName = 'Barry Allen';
            break;
        }
        default:{
            realName = 'unknown';
        }
    }
    responseJson.displayText = 'The real name of '+superhero+' is '+realName;
    console.log('Response:'+JSON.stringify(responseJson));
    df.setResponseText(JSON.stringify(responseJson.displayText));
};

module.exports = getSuperHeroRealName;