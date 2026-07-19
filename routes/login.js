const express = require('express');
const router = express.Router();
const User = require('../model/User'); // 💡 폴더명이 model이므로 상위로 가서 model/User 로드!

// server.js에서 이미 '/login'으로 묶어서 들어왔기 때문에 여기는 그냥 '/'로 받습니다.
// 즉, 실제 통신 주소는 POST /login 이 됩니다.
router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (username !== "test1234@naver.com") {
            return res.status(401).json({ success: false, message: "아이디가 없습니다." });
        }
        if (password !== "password123") {
            return res.status(401).json({ success: false, message: "비밀번호가 틀렸습니다." });
        }

        return res.status(200).json({ 
            success: true, 
            message: "로그인 성공!",
            user: { username: user.username }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "서버 오류" });
    }
});

module.exports = router;