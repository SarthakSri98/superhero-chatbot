const express = require('express');
const app = express();
const diff = require('dialogflow-fulfillment');

app.get('/',(req,res)=>{
    res.send("live hain");
})

app.post('/', express.json() ,(req,res)=>{

    // let action = req.body.result.action; // https://dialogflow.com/docs/actions-and-parameters
       let parameters = req.body.queryResult.parameters; // https://dialogflow.com/docs/actions-and-parameters
    // let inputContexts = req.body.result.contexts; // https://dialogflow.com/docs/contexts

    const agent = new diff.WebhookClient({
        request:req,
        response:res
    });

    function demo(agent){
        agent.add("Here is your reply");
    }

    var intentMap = new Map();

    intentMap.set("webHookIntent",demo);

    function getSuperHeroRealName(){
        let responseJson = {};
        // console.log(req.body);
        console.log('Parameters:'+JSON.stringify(parameters));
        // console.log('Input Contexts:'+JSON.stringify(inputContexts));
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
        agent.add(responseJson.displayText);
    }

    intentMap.set("getRealName",getSuperHeroRealName);

    function getSuperHeroIntro(){
        let responseJson = {};
        // console.log(req.body);
        console.log('Parameters:'+JSON.stringify(parameters));
        // console.log('Input Contexts:'+JSON.stringify(inputContexts));
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
        agent.add(responseJson.displayText);
    }

    intentMap.set("GetSuperheroIntro",getSuperHeroIntro);
    
    agent.handleRequest(intentMap);

})

app.listen(8000,()=>{console.log("server is running on 8000")});