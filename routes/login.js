const express = require('express');
const router = express.Router();
const path = require('path');

// 메인 경로
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});



module.exports = router;