const express = require('express');
const app = express();
const path = require( "path")
const cors = require("cors");
const errorMiddleWare = require('./Middleware/Error')

const bodyParser = require('body-parser');

const corsOptions ={
    AccessControlAllowMethod:'post',
    AccessControlAllowOrigin:"*",
    AccessControlAllowCredentials: true,
    origin:'*', 
    credentials:true,    
    optionSuccessStatus:200
}

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsOptions));


// route import

const message = require('./routes/messageRoute');

app.use("/api/v1", message);

app.use(errorMiddleWare);




module.exports = app