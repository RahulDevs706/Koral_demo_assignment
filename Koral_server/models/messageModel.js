const mongoose = require("mongoose");
const validator = require('validator');


const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter your name'],
        maxlength:[30, 'Name cannot exceed 30 characters'],
        minlength:[4, 'Name should have more than 5 characters']
    },
    email:{
        type:String,
        required:[true, 'Please enter your email'],
        unique:true,
        validate:[validator.isEmail, 'Please enter a valid email address']
    },
    subject:{
        type:String,
        required:[true, 'Please enter a subject'],
        minlength:[4, 'Subject should have more than 5 characters']
    },
    service:{
        type:String,
        required:[true, 'Please select a service you want to enquire about']
    },
    message:{
        type:String,
    }
});

module.exports = mongoose.model("Message", messageSchema);