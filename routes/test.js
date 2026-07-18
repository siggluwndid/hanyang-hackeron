const express = require('express');
const router = express.Router();
const path = require('path');

// 1. 메인 페이지 경로
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 2. 로그인 경로 
// 프론트에서 fetch("http://54.180.119.212:3000/login") 찌르면 여기가 실행됩니다.
router.get("/login", (req, res) => {
    res.status(200).send("Okay");
});

module.exports = router;