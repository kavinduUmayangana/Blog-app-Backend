const express=require('express');
const bodyParser =require('body-parser');
const dotenv=require('dotenv');
const connectMongodb=require('./init/mongodb');


dotenv.config();

const app= express();
connectMongodb();

app.use(express.json({limit:'500mb'}));
app.use(bodyParser.urlencoded({limit:'5000mb',extended:true}));
module.exports=app;