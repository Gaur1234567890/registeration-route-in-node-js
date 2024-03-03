const { mongoose} = require('../config/db')
const { userSchema } = require("../model/user");
const bcrypt = require('bcrypt')

let registerController =(req,res)=>{
   const user =  mongoose.model('student',userSchema);
   let pass = req.body.Password ;

   const saltRounds = 10;
   let encryptedPassword = bcrypt.hashSync(pass,saltRounds);

   req.body.Password =   encryptedPassword;

   const userRegister = new user({
    "firstName":req.body.firstName,
    "lastName": req.body.lastName,
    "email" : req.body.email,
    "username" :req.body.username,
    "Password":req.body.Password,
    "role":req.body.role
   });

userRegister.save().then(d=>{ console.log('successfully data saved');
            res.status(200).json({
                result: 'registration successfullly',
                
            })
           }).catch(e=>{
            console.log('error to save data',e);
            res.status(400).json({
                result: 'not saved data',
                msg:e
            })
           })
   
}

exports.registerController = registerController;