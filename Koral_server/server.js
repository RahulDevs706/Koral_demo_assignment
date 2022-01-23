// config
const dotenv = require("dotenv")
dotenv.config({path:"config/config.env"});


const app = require("./app");

const port = process.env.PORT || 4000;

// handling uncaught exception
process.on("uncaughtException", err=>{
    console.log(`Error: ${err}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1)
})

// connecting to databse
const connectToDatabse = require('./config/database')
connectToDatabse();


const server =app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`);
})

// handling unhandled promise rejection
process.on('unhandledRejection', err=>{
    console.log(`Error: ${err}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(()=>{
        process.exit(1)
    })
})