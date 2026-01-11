<template>
  <footer class="footer">
    <div class="footer-inner">

      <div class="footer-top">

        <div class="brand-area">
          <h2 class="brand-title">CS</h2>
          <span class="brand-slogan">Coin Shower</span>
        </div>

        <div class="info-area">
          <h3 class="info-header">연락처 정보</h3>
          <ul class="info-list">

            <li>
              <span class="bullet"></span>
              <div class="text-wrapper">
                <span class="info-item">Address: 경기도 광주시 도척면 도척윗로 328-25 나동</span>
                <span class="divider-dot">.</span> <span class="info-item">사업자등록번호: 208-08-68309</span>
                <span class="divider-dot">.</span>
                <span class="info-item">대표자: 이명숙</span>
              </div>
            </li>

            <li>
              <span class="bullet"></span>
              <div class="text-wrapper">
                <span class="info-item">Tel: 031-766-5616</span>
                <span class="divider-bar">|</span>
                <span class="info-item">Fax: (031)766-5696</span>
                <span class="divider-bar">|</span>
                <span class="info-item email-box">
                  E-mail: <span class="highlight">hopesook123@naver.com</span>
                </span>
              </div>
            </li>

          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          &copy; Copyright 2026 by <span class="company-name">씨에스(CS)</span>. All Rights Reserved.
        </div>

        <div class="social-icons">
          <a href="#" class="icon-box" aria-label="Youtube">Y</a>
          <a href="#" class="icon-box" aria-label="Google Plus">G+</a>
          <a href="#" class="icon-box" aria-label="Twitter">T</a>
          <a href="#" class="icon-box" aria-label="Facebook">F</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* === PC (기본) 스타일 === */

.footer {
  background-color: #1a1b1e;
  color: #b0b0b0;
  padding: 20px 0;
  font-family: 'Malgun Gothic', 'Dotum', sans-serif;
  font-size: 13px;
  width: 100%;
  border-bottom: 1px solid #000;
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  /* padding: 0 20px; 좌우 여백 */
}

/* 상단 영역 */
.footer-top {
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  /* justify-content: center; [추가] 전체 내용을 중앙으로 모음 */
  gap: 60px;
  border-bottom: 1px solid #333;
  margin-bottom: 15px;
  padding: 0 20px 20px;
}

/* 브랜드(로고) */
.brand-area {
  text-align: center;
  min-width: 150px; /* 로고 영역 최소 너비 확보 */
}

.brand-title {
  font-size: 48px;
  font-weight: 800;
  color: #888;
  line-height: 1;
  margin: 0;
}

.brand-slogan {
  font-size: 24px;
  font-weight: 700;
  color: #ddd;
  display: block;
  margin-top: 5px;
}

/* 정보 영역 */
.info-area {
  text-align: left;
}

.info-header {
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;
  line-height: 1.5;
  color: #ccc;
}

/* 텍스트 래퍼 (flex 사용하여 가로 배치) */
.text-wrapper {
  display: flex;
  flex-wrap: wrap; /* 필요시 줄바꿈 */
  align-items: center;
}

/* 개별 정보 아이템 */
.info-item {
  letter-spacing: -0.5px;
}

/* 구분자 스타일 */
.divider-dot, .divider-bar {
  margin: 0 8px;
  color: #555;
}

.bullet {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #e74c3c;
  margin-right: 10px;
  margin-top: 8px; /* 텍스트 라인 높이에 맞춤 */
  flex-shrink: 0;
}

.highlight {
  color: #fff;
  font-weight: bold;
}

/* 하단 영역 */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
}

.copyright {
  font-size: 12px;
  color: #666;
}

.company-name {
  color: #3498db;
}

.social-icons {
  display: flex;
  gap: 5px;
}

.icon-box {
  width: 24px;
  height: 24px;
  border: 1px solid #444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  text-decoration: none;
  font-size: 11px;
  transition: all 0.3s ease;
}

.icon-box:hover {
  border-color: #fff;
  color: #fff;
}


/* === 모바일 (반응형) 스타일 === */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column; /* 세로 배치 */
    gap: 30px;
    padding: 0 0 20px;
    text-align: center;
  }

  .brand-area {
    margin-bottom: 10px;
  }

  .info-area {
    width: 100%;
    text-align: center; /* 텍스트 중앙 정렬 */
  }

  .info-header {
    display: inline-block;
    border-bottom: 1px solid #444; /* 모바일에서는 제목 구분을 위해 밑줄 살짝 추가 */
    padding-bottom: 5px;
    margin-bottom: 15px;
  }

  .info-list li {
    justify-content: center; /* 리스트 중앙 정렬 */
    margin-bottom: 15px; /* 그룹 간 간격 넓힘 */
  }

  /* 모바일에서 불릿(빨간 점) 숨김 -> 중앙 정렬 시 어색함 방지 */
  .bullet {
    display: none;
  }

  /* 텍스트 래퍼를 블록처럼 처리 */
  .text-wrapper {
    display: block; /* Flex 해제하고 Block으로 변경 */
    width: 100%;
  }

  /* 개별 정보 아이템을 블록으로 만들어 줄바꿈 처리 */
  .info-item {
    display: block; /* 한 줄에 하나씩 */
    margin-bottom: 4px;
    color: #b0b0b0;
    font-size: 13px; /* 가독성 위해 폰트 유지 */
  }

  /* 이메일 박스는 약간의 여백 추가 */
  .email-box {
    margin-top: 8px;
  }

  /* PC용 구분자(. |) 모두 숨김 */
  .divider-dot, .divider-bar {
    display: none;
  }

  /* 하단 영역 세로 배치 */
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .copyright {
    line-height: 1.4;
  }
}
</style>
