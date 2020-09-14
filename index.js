const express = require('express');
const app = express();
const diff = require('dialogflow-fulfillment');

app.get('/',(req,res)=>{
    res.send("live hain");
})

app.post('/', express.json() ,(req,res)=>{
    const agent = new diff.WebhookClient({
        request:req,
        response:res
    });

    function demo(agent){
        agent.add("Here is your reply");
    }

    var intentMap = new Map();

    intentMap.set("webHookIntent",demo);
    agent.handleRequest(intentMap);

})

app.listen(8000,()=>{console.log("server is running on 8000")});