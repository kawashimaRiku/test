var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
res.json({url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'});
})
module.exports = router