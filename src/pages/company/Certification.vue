<script setup>
import { onMounted, ref } from 'vue';

// 페이지 로드 시 페이드인 효과
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// 인증서 데이터 (실제 이미지 파일명으로 교체 필요)
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

    <section class="content-section container" :class="{ 'fade-in': isVisible }">

      <div class="visual-full-area">
        <div class="image-frame-full">
          <img src="/images/company/greeting-top.png" alt="산업재산권" onError="this.src='https://via.placeholder.com/1200x400?text=Certification+Visual'" />
        </div>
      </div>

      <div class="content-wrapper">

        <div class="slogan-bar">
          <span class="en">Create Value for Customers</span>
          <span class="divider">|</span>
          <span class="ko">고객을 위한 가치 창조</span>
        </div>

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
/* --- 공통 레이아웃 (Greeting 페이지와 통일) --- */
.certification-view {
  width: 100%;
  padding-bottom: 8rem;
  background-color: #fff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  padding-top: 3rem;
}

.content-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* 상단 이미지 영역 */
.visual-full-area {
  width: 100%;
  margin-bottom: 3rem;
}

.image-frame-full {
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.image-frame-full img {
  width: 100%;
  height: auto;
  display: block;
}

/* 컨텐츠 래퍼 */
.content-wrapper {
  max-width: 100%; /* 그리드 형식이므로 폭을 넓게 사용 */
  margin: 0 auto;
  text-align: center;
}

/* 슬로건 & 헤드라인 스타일 */
.slogan-bar {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.slogan-bar .en { color: #0056b3; font-weight: 600; text-transform: uppercase; }
.slogan-bar .divider { color: #ddd; font-size: 0.8rem; }
.slogan-bar .ko { font-weight: 500; color: #444; }

.headline {
  font-size: 2.2rem;
  line-height: 1.4;
  color: #111;
  font-weight: 400;
  margin-bottom: 2rem;
  word-break: keep-all;
}
.headline .highlight { font-weight: 700; color: #0056b3; }

.decorative-line {
  width: 40px;
  height: 2px;
  background-color: #0056b3;
  margin: 0 auto 3rem auto;
}

.intro-text {
  margin-bottom: 50px;
  color: #666;
  font-size: 1.1rem;
}

/* --- 인증서 그리드 스타일 --- */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* PC: 3열 */
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
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.cert-image-box {
  width: 100%;
  height: 320px; /* 세로형 상장 비율 */
  background-color: #f9f9f9;
  position: relative;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지 */
  padding: 20px;
  transition: transform 0.3s;
}

/* 호버 오버레이 */
.hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
}
.hover-overlay span {
  color: #fff; font-weight: bold; border: 1px solid #fff; padding: 8px 16px; border-radius: 20px;
}
.cert-image-box:hover .hover-overlay { opacity: 1; }

.cert-info {
  padding: 20px;
  text-align: center;
}

.cert-info h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.cert-info p {
  font-size: 0.9rem;
  color: #888;
}

/* --- 모바일 반응형 --- */
@media (max-width: 768px) {
  .headline { font-size: 1.6rem; margin-bottom: 1.5rem; }
  .mobile-break { display: block; }

  .slogan-bar { flex-direction: column; gap: 5px; font-size: 0.85rem; }
  .slogan-bar .divider { display: none; }

  /* 모바일: 2열 그리드 */
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .cert-image-box { height: 220px; }
  .cert-info { padding: 15px 10px; }
  .cert-info h3 { font-size: 1rem; }
}

@media (max-width: 480px) {
  /* 화면이 아주 작으면 1열로 변경 */
  .cert-grid { grid-template-columns: 1fr; }
}
</style>
