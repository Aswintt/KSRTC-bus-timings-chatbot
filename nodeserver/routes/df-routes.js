const chatbot = require('../chatbot/chatbot')
module.exports = app => {

    app.post('/text_query', async(req,res)=>{
        console.log(req)
        const {text, userId} = req.body;
        const resultQuery = await chatbot.textQuery(text, userId) // function in chatbot js
        // console.log(resultQuery)
        const resObj = {
            intentName: resultQuery.intent.displayName,
            userQuery: resultQuery.queryText,
            fulfillmentText: resultQuery.fulfillmentText
        }
        res.send(resObj)
    })

    // app.post('/event_query',(req,res)=>{
    //     console.log(req)
    //     res.send("Text Query")
    // })
}