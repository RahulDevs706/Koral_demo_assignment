const express = require('express');
const { sendMessage } = require('../controller/messageController');
const router = express.Router();

router.route('/send').post(sendMessage);

module.exports = router;
