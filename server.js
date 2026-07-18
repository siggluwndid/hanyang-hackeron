const express = require('express');
const dbconnect = require("./config/db")
const app = express();
const PORT = 3000

dbconnect()

app.get("/", async(req,res) => {
})

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 서버가 성공적으로 실행되었습니다!!`);
  console.log(`🚀 현재 오픈된 포트: ${PORT}`);
  console.log(`====================================================`);
}); 