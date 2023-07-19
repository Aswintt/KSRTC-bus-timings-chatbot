//connect df it server
//text query
//event query

const dialogflow = require('dialogflow');
const config = require('../config/devkey');

const projectId = config.googleProjectId;
const sessionId = config.dialogFlowSessionID;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient({projectId,credentials});
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const textQuery = async(userText, userId)=>{
    //connect wit df api -create df client
    // detect the intent
    // filter out
    //send res 
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: userText,
            // The language used by the client (en-US)
            languageCode: config.dialogFlowSessionLanguageCode,
          }
        }
      }

      try {
        const response = await sessionClient.detectIntent(request)
        return response[0].queryResult
      } catch (err) {
        console.log(err)
        return err
      }
}

module.exports = {
    textQuery
}