const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();
console.log(`
██ ▄█▀ ▄▄▄       ███▄    █  ██▓  ██████  ██░ ██  ██ ▄█▀ ▄▄▄            ██▓ ▒█████  
██▄█▒ ▒████▄     ██ ▀█   █ ▓██▒▒██    ▒ ▓██░ ██▒ ██▄█▒ ▒████▄         ▓██▒▒██▒  ██▒
▓███▄░ ▒██  ▀█▄  ▓██  ▀█ ██▒▒██▒░ ▓██▄   ▒██▀▀██░▓███▄░ ▒██  ▀█▄       ▒██▒▒██░  ██▒
▓██ █▄ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░██░  ▒   ██▒░▓█ ░██ ▓██ █▄ ░██▄▄▄▄██      ░██░▒██   ██░
▒██▒ █▄ ▓█   ▓██▒▒██░   ▓██░░██░▒██████▒▒░▓█▒░██▓▒██▒ █▄ ▓█   ▓██▒ ██▓ ░██░░ ████▓▒░
▒ ▒▒ ▓▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░▓  ▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒▒ ▒▒ ▓▒ ▒▒   ▓▒█░ ▒▓▒ ░▓  ░ ▒░▒░▒░ 
░ ░▒ ▒░  ▒   ▒▒ ░░ ░░   ░ ▒░ ▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░░ ░▒ ▒░  ▒   ▒▒ ░ ░▒   ▒ ░  ░ ▒ ▒░ 
░ ░░ ░   ░   ▒      ░   ░ ░  ▒ ░░  ░  ░   ░  ░░ ░░ ░░ ░   ░   ▒    ░    ▒ ░░ ░ ░ ▒  
░  ░         ░  ░         ░  ░        ░   ░  ░  ░░  ░         ░  ░  ░   ░      ░ ░  
                                                                   ░               
`);
console.log("Chat-GPT Whats App Chat Bot | V.0.01");

const client = new Client();
let openAPI = false;
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 
const configuration = new Configuration({
    apiKey: process.env.SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

async function runOpenAPI(msg){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: msg}],
      });
      
    console.log(completion.data.choices[0].message.content);
    return completion.data.choices[0].message.content;
}

function animateLoading() {
    const frames = ['-', '\\', '|', '/'];
    let i = 0;
  
    const interval = setInterval(() => {
      process.stdout.write(`\rLoading ${frames[i++]} `);
  
      if (i === frames.length) {
        i = 0;
      }
    }, 200);
  
    return interval;
}


client.on('message', message => {
    
	console.log(message.body);
    if(!openAPI){
        setTimeout(() => {
            console.log("Chat-GPT Engaged with your Whats App");
            openAPI = true;
        }, 5000);
    }
    if(openAPI){
        runOpenAPI(message.body).then(result=>client.sendMessage(message.from, result)); 
    }
    console.log(openAPI);
});    
        
 
 

