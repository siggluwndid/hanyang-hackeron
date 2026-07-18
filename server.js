const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // .env 환경변수 로드

const app = express();
const PORT = process.env.PORT || 3000;

// 1. 필수 미들웨어 설정
app.use(cors()); // 🚀 다른 도메인(Render <-> Vercel) 간 통신을 위한 CORS 허용
app.use(express.json()); // 🚀 프론트엔드가 보낸 JSON(req.body) 파싱을 위해 필수!
app.use(express.urlencoded({ extended: true }));

// 2. 정적 파일 제공 (public 폴더 내의 html, css, js 파일들을 브라우저가 읽을 수 있게 함)
app.use(express.static(path.join(__dirname, 'public')));

// 3. 몽고DB(MongoDB Atlas) 연결
const MONGO_URI = "mongodb+srv://유저네임:비밀번호@cluster.mongodb.net/myDatabase";
if (!MONGO_URI) {
    console.error("❌ MongooseError: .env 파일에 MONGO_URI가 정의되지 않았습니다.");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('🟢 몽고DB 연결 성공! 데이터베이스 준비 완료.'))
    .catch((err) => {
        console.error('❌ 몽고DB 연결 실패:', err.message);
    });

// 4. 라우터 연결 (민준님 폴더 구조 매칭)
const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');

// 각각의 경로에 맞게 라우터 미들웨어 장착
app.use('/', mainRouter);      // 메인페이지 및 페이지 이동 관련 경로 처리
app.use('/login', loginRouter); // /login 엔드포인트로 들어오는 POST 요청 처리

// 5. 서버 가동
app.listen(PORT, () => {
    console.log(`🚀 서버가 포트 ${PORT}에서 정상 작동 중입니다!`);
});