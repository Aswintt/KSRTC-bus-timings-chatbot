const express = require('express');
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();

app.use(cors())

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.get('/df/server',(req,res)=>{
    res.send("i from server");
});

require('./routes/df-routes')(app)

app.listen(port, ()=>{
    console.log("Server is running...")
});