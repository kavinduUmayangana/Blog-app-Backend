const express=require('express');
const bodyParser =require('body-parser');
const dotenv=require('dotenv');
const morgan=require('morgan')
const connectMongodb=require('./init/mongodb');
const {authRoute}=require("./routes")


dotenv.config();

const app= express();
connectMongodb();

app.use(express.json({limit:'500mb'}));
app.use(bodyParser.urlencoded({limit:'500mb',extended:true}));
app.use(morgan("dev"));
app.use('/api/v1/auth',authRoute)
module.exports=app;