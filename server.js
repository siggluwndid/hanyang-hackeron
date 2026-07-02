const express = require('express');
const app = express();
// ❌ 기존 코드: const PORT = 3000;
// 🟢 변경할 무적 코드:
const PORT = process.env.PORT || 3000;



app.get("/", (req,res) => {
  `<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>한양대 해커톤 백엔드 허브</title>
      <!-- Pico CSS v2 최신 CDN 로드 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    </head>
    <body>
      <nav class="container">
        <ul>
          <li><strong>🚀 HYU Hackathon Hub</strong></li>
        </ul>
        <ul>
          <li><a href="https://github.com/siggluwndid/hanyang-hackeron" target="_blank" class="secondary">GitHub</a></li>
        </ul>
      </nav>

      <main class="container">
        <div class="hero" style="padding: 2rem 0; text-align: center;">
          <h1>🟢 Backend Server is Running</h1>
          <p>민준이의 Express 서버가 Render 클라우드에서 안전하게 구동 중입니다.</p>
        </div>

        <grid style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <article>
            <header>🔒 Auth API</header>
            <p>유저 회원가입 및 로그인 처리를 담당하는 엔드포인트입니다.</p>
            <code>POST /api/auth/login</code>
          </article>

          <article>
            <header>🤖 AI API</header>
            <p>안티그래비티와 연동하여 프론트의 질문을 분석하는 엔드포인트입니다.</p>
            <code>POST /api/ai/analyze</code>
          </article>
        </grid>

        <footer style="margin-top: 3rem; text-align: center; font-size: 0.9rem; color: #888;">
          <p>© 2026 한양대 해커톤 민준 팀장 프로젝트. All 명령어 완료.</p>
        </footer>
      </main>
    </body>
    </html>
  `
})

// 🚨 [미션 1]: 프론트엔드에서 보낸 JSON 데이터를 백엔드가 읽을 수 있게 변환해주는 
// 미들웨어 설정을 완성하세요. (이거 안 쓰면 req.body가 undefined가 됩니다!)
app.use(express.json());

// 🚨 [미션 2]: 로그인 API의 HTTP 메서드(Method)와 주소를 완성하세요.
// 친구들이 보낸 fetch 요청의 주소는 '/api/auth/login' 이고, 데이터 전송 방식은 POST입니다.
app.post('/api/auth/login', (req, res) => {
  
  // 🚨 [미션 3]: 프론트엔드가 body에 담아서 보낸 데이터(userId, userPw)를 
  // req 객체 안에서 꺼내서 변수에 담으려고 합니다. 빈칸을 채우세요.
  const { userId, userPw } = req.body

  console.log(`\n[📥 로그인 요청 도착] ID: ${userId} | PW: ${userPw}`);

  // 예외 처리: 데이터가 비어있는지 검사
  if (!userId || !userPw) {
    console.log("❌ 결과: 로그인 실패 (데이터 누락)");
    // 🚨 [미션 4]: 값이 비어있을 때 프론트엔드에게 "잘못된 요청"이라는 의미의 
    // HTTP 상태 코드(400)와 함께 에러 메시지를 JSON 형태로 보내려고 합니다. 빈칸을 채우세요.
    return res.status(400).json({ 
      success: false, 
      message: "아이디와 비밀번호를 모두 입력해주세요!" 
    });
  }

  // 로그인 성공 응답
  console.log("✅ 결과: 로그인 성공");
  return res.status(200).json({ 
    success: true, 
    message: `서버 연동 대성공! ID(${userId}) 확인 완료.` 
  });
});

app.listen(PORT, () => {
  console.log("🚀 서버를 성공적으로 실행했습니다!!");
});