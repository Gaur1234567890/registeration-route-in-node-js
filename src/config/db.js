const { mongoose } = require("mongoose");
const env = require('dotenv')
env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(d=>{console.log('database successfully connected')}).catch(e=>{console.log('not connect to database')});

module.exports={mongoose};
