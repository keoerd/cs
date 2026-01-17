<script setup>
import { onMounted, ref } from 'vue';

// 페이지 타이틀
const pageTitle = "산업재산권";

// 페이지 로드 시 페이드인 효과
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// 인증서 데이터
const certifications = [
  { id: 1, name: '특허증', desc: '코인 샤워기 제어 시스템', image: 'https://via.placeholder.com/300x400?text=Patent+1' },
  { id: 2, name: '실용신안등록증', desc: '절수형 샤워 헤드', image: 'https://via.placeholder.com/300x400?text=Patent+2' },
  { id: 3, name: '디자인등록증', desc: '산업용 폴 베이스', image: 'https://via.placeholder.com/300x400?text=Design+1' },
  { id: 4, name: 'ISO 9001', desc: '품질경영시스템 인증', image: 'https://via.placeholder.com/300x400?text=ISO+9001' },
  { id: 5, name: '여성기업확인서', desc: '중소벤처기업부', image: 'https://via.placeholder.com/300x400?text=Women+Biz' },
  { id: 6, name: '상표등록증', desc: 'CS 브랜드 상표', image: 'https://via.placeholder.com/300x400?text=Brand' },
];
</script>

<template>
  <div class="certification-view">

    <div class="page-header">
      <div class="container">
        <h1>{{ pageTitle }}</h1>
        <div class="breadcrumb">홈 > 회사소개 > {{ pageTitle }}</div>
      </div>
    </div>

    <section class="content-section container" :class="{ 'fade-in': isVisible }">

      <div class="visual-full-area">
        <div class="image-frame-full">
          <img src="/images/company/greeting-top.png" alt="산업재산권 비주얼" onError="this.src='https://via.placeholder.com/1200x500?text=Visual+Image'" />
        </div>

        <div class="slogan-bar">
          <span class="en">Create Value for Customers</span>
          <span class="divider-bar">|</span>
          <span class="ko">고객을 위한 가치 창조</span>
        </div>
      </div>

      <div class="content-wrapper">

        <h2 class="headline">
          "끊임없는 기술 개발로<br class="mobile-break" />
          <span class="highlight">최상의 품질</span>을 약속드립니다."
        </h2>

        <div class="decorative-line"></div>

        <div class="intro-text">
          <p>씨에스(CS)가 보유한 특허 및 각종 인증 현황입니다.</p>
        </div>

        <div class="cert-grid">
          <div v-for="item in certifications" :key="item.id" class="cert-item">
            <div class="cert-image-box">
              <img :src="item.image" :alt="item.name" />
              <div class="hover-overlay">
                <span>확대보기 +</span>
              </div>
            </div>
            <div class="cert-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- 기본 레이아웃 --- */
.certification-view {
  width: 100%;
  padding-bottom: 8rem;
  background-color: #fff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 페이드인 애니메이션 */
.content-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.content-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* --- [1] 페이지 헤더 스타일 (Greeting 통일) --- */
.page-header {
  background-color: #f4f7fa;
  padding: 3rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e1e4e8;
}

.page-header h1 {
  font-size: 2rem;
  color: #222;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #666;
}

/* --- [2] 상단 비주얼 & 슬로건 스타일 (Greeting 통일) --- */
.visual-full-area {
  width: 100%;
  margin-bottom: 4rem; /* 간격 확보 */
}

.image-frame-full {
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.image-frame-full img {
  width: 100%;
  height: auto;
  display: block;
}

/* 슬로건 바: 이미지 바로 아래 우측 정렬 */
.slogan-bar {
  margin-top: 15px;
  text-align: right; /* 우측 정렬 핵심 */
  color: #0056b3;
}

.slogan-bar .en { font-weight: bold; letter-spacing: 0.5px; }
.slogan-bar .divider-bar { margin: 0 10px; color: #ccc; }
.slogan-bar .ko { font-weight: 700; color: #333; }

/* --- [3] 헤드라인 & 인트로 텍스트 --- */
.content-wrapper {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

.headline {
  font-size: 2.4rem;
  line-height: 1.4;
  color: #222;
  font-weight: 300; /* 얇은 폰트 */
  margin-bottom: 30px;
  word-break: keep-all;
}

.headline .highlight {
  font-weight: 700;
  color: #0056b3;
}

.decorative-line {
  width: 60px;
  height: 3px;
  background-color: #0056b3;
  margin: 0 auto 40px auto;
}

.intro-text {
  margin-bottom: 60px;
  color: #666;
  font-size: 1.1rem;
}

/* --- [4] 인증서 그리드 스타일 --- */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* PC 3열 */
  gap: 30px;
  text-align: left;
}

.cert-item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cert-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

.cert-image-box {
  width: 100%;
  height: 320px;
  background-color: #f9f9f9;
  position: relative;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cert-image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 30px;
  transition: transform 0.4s;
}

/* 호버 오버레이 */
.hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
}

.hover-overlay span {
  color: #fff;
  font-weight: bold;
  border: 1px solid #fff;
  padding: 8px 20px;
  border-radius: 30px;
}

.cert-image-box:hover .hover-overlay { opacity: 1; }
.cert-image-box:hover img { transform: scale(1.05); }

.cert-info {
  padding: 25px 20px;
  text-align: center;
}

.cert-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.cert-info p {
  font-size: 0.95rem;
  color: #888;
}

/* --- 반응형 --- */
@media (max-width: 768px) {
  .page-header { padding: 2rem 0; margin-bottom: 2rem; }

  .slogan-bar {
    text-align: center; /* 모바일에서는 중앙 정렬 */
    font-size: 0.9rem;
    margin-top: 10px;
  }

  .headline { font-size: 1.6rem; margin-bottom: 20px; }
  .mobile-break { display: block; }

  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .cert-image-box { height: 220px; }
  .cert-info { padding: 15px 10px; }
  .cert-info h3 { font-size: 1rem; }
}

@media (max-width: 480px) {
  .cert-grid { grid-template-columns: 1fr; }
}
</style>
