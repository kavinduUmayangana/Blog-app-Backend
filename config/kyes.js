require('dotenv').config();
const {PORT,CONNECTION_URL,JWT_SECRET}=process.env;
module.exports={
    port:PORT,
    connectionURL:CONNECTION_URL,
    jwtSecret:JWT_SECRET
};