const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // 1. 기본 로그인 정보
    username: {
        type: String,
        required: [true, '아이디는 필수 항목입니다.'],
        unique: true, // 아이디 중복 방지
        trim: true
    },
    password: {
        type: String,
        required: [true, '비밀번호는 필수 항목입니다.']
    },
    
    // 2. 노인 대상 맞춤형 사용자 정보 (필요시 수집)
    name: {
        type: String,
        default: ''
    },
    birthYear: {
        type: Number, // 연령대별 통계나 난이도 조절용
        default: 1950
    },

    // 3. 🚀 해커톤 핵심: 키오스크 교육 진전도 및 통계 데이터
    
    // 어르신들이 어떤 키오스크 단계에서 어려워하는지 추적하기 위함
    progress: {
        currentLevel: {
            type: String, 
            enum: ['패스트푸드', '카페', '기차표', '병원', '완료'], 
            default: '패스트푸드'
        },
        // 각 카테고리별 완료 여부나 점수 기록
        completedStages: {
            type: [String], 
            default: [] // 예: ['패스트푸드', '카페']
        },
        // 미션 도중 실패 횟수나 오답률 기록 (취약점 분석용)
        failCount: {
            type: Number,
            default: 0
        }
    },

    // 4. 생성 및 수정 시간 자동 기록
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 모델 컴파일 후 내보내기
module.exports = mongoose.model('User', UserSchema);