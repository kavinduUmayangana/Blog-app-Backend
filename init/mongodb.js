const mongoose=require('mongoose')
const { connectionURL } = require('../config/kyes')
const connectMongodb=async()=>{
    try{
        await mongoose.connect(connectionURL);
        console.log('Database connection successfully')
    
    }catch(error){
    console.log(error.message)
    };
}


module.exports=connectMongodb;