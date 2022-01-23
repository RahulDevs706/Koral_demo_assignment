const Message = require('../models/messageModel');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncError = require('../Middleware/catchAsyncError');

exports.sendMessage= catchAsyncError(async (req, res)=>{

    const {name, email, subject, service, message} = req.body;

    await Message.create({
        name, 
        email, 
        subject,
        service,
        message
    });

    res.status(201).json({
        success:true,
        message:"Email sent successfuly"
    })
})
