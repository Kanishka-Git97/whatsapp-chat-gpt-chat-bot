# Whats App Chat Bot (gpt-3.5-turbo)


![N|Solid](https://www.newsbricks.com/root_upld/general-news/2023/02/80177/org_38719202302221502.jpg)


I am working on integrating a chatbot into the WhatsApp messaging platform. The chatbot is powered by the GPT-3.5 Turbo language model, which is a cutting-edge artificial intelligence system capable of generating natural-sounding text. I am using the Node.js programming language to develop the integration, which involves setting up a server to receive incoming messages from WhatsApp, processing them with the chatbot, and sending the chatbot's responses back to the user. To ensure security and protect sensitive credentials, I am excluding the .env file from version control using a .gitignore file. Additionally, I am excluding the node_modules directory from version control to avoid cluttering the repository with unnecessary files.

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- whatsapp-web.js - To intergrate Whatsapp-Platform
- [OpenAI] - to intergrate chat-gpt API

## Installation
Install the dependencies and devDependencies and start the server.
Create .env file and add Chat-GPT API KEY as  SECRET_KEY

```sh
npm i
node index.js
```
Scan the QR Code with your Whats App Account and see the Magic 

## License

MIT
