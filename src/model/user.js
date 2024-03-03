const { mongoose } = require("../config/db");

const userSchema = new mongoose.Schema({
    firstName:{ type:String,required:true},
    lastName: {type: String , required:true},
    email : {type:String,required:true,unique:true},
    username :{type:String,required:true},
    Password:{type:String},
    role : String
},
{
    timestamps:true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
})

module.exports ={userSchema};