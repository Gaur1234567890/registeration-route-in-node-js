const express = require('express')
const app = express();
const env = require('dotenv');
const { registeRoute } = require('./route/registerRoute');
env.config();

app.use(express.json());
app.use('/api',registeRoute);



let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is running on port no ',port);
})
