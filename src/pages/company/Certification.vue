<script setup>
import { onMounted, ref } from 'vue';

// 페이지 로드 시 페이드인 효과
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// 인증서 데이터
const certifications = [
  { id: 1, name: '목차1', desc: '특허 등록 List', image: '/images/company/certification/list1.jpg' },
  { id: 2, name: '목차2', desc: '특허 등록 List', image: '/images/company/certification/list2.jpg' },
  { id: 3, name: '디자인등록증', desc: '산업용 폴 베이스', image: 'https://via.placeholder.com/300x400?text=Design+1' },
  { id: 4, name: 'ISO 9001', desc: '품질경영시스템 인증', image: 'https://via.placeholder.com/300x400?text=ISO+9001' },
  { id: 5, name: '여성기업확인서', desc: '중소벤처기업부', image: 'https://via.placeholder.com/300x400?text=Women+Biz' },
  { id: 6, name: '상표등록증', desc: 'CS 브랜드 상표', image: 'https://via.placeholder.com/300x400?text=Brand' },
];

/* --- [추가] 모달(이미지 확대) 관련 로직 --- */
const selectedCert = ref(null); // 현재 선택된 인증서 데이터

// 모달 열기
const openModal = (item) => {
  selectedCert.value = item;
  // 모달 열릴 때 백그라운드 스크롤 방지
  document.body.style.overflow = 'hidden';
};

// 모달 닫기
const closeModal = () => {
  selectedCert.value = null;
  // 스크롤 방지 해제
  document.body.style.overflow = '';
};
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
            <div class="cert-image-box" @click="openModal(item)">
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

    <Transition name="fade">
      <div v-if="selectedCert" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>
          <img :src="selectedCert.image" :alt="selectedCert.name" />
          <div class="modal-caption">
            <h3>{{ selectedCert.name }}</h3>
            <p>{{ selectedCert.desc }}</p>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- 공통 레이아웃 (기존과 동일) --- */
.certification-view {
  width: 100%;
  padding-bottom: 8rem;
  background-color: #fff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.content-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.content-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.visual-full-area {
  width: 100%;
  margin-bottom: 3rem;
}

.image-frame-full {
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.image-frame-full img {
  width: 100%;
  height: auto;
  display: block;
}

.content-wrapper {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

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
  grid-template-columns: repeat(3, 1fr);
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
  height: 320px;
  background-color: #f9f9f9;
  position: relative;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* 클릭 가능 표시 */
}

.cert-image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: transform 0.3s;
}

.hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
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

/* --- [추가] 모달(팝업) 스타일 --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* 짙은 반투명 검정 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 최상단 노출 */
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 900px;
  max-height: 90%;
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-content img {
  max-width: 100%;
  max-height: 80vh; /* 화면 높이의 80%까지만 */
  object-fit: contain;
  box-shadow: 0 5px 30px rgba(0,0,0,0.5);
  background-color: #fff; /* 투명 이미지일 경우를 대비해 흰 배경 */
}

.modal-caption {
  margin-top: 15px;
  color: #fff;
}
.modal-caption h3 { font-size: 1.2rem; margin-bottom: 5px; }
.modal-caption p { font-size: 0.9rem; color: #ccc; }

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
}
.close-btn:hover { color: #e74c3c; }

/* 모달 등장 애니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* --- 모바일 반응형 --- */
@media (max-width: 768px) {
  .headline { font-size: 1.6rem; margin-bottom: 1.5rem; }
  .mobile-break { display: block; }
  .slogan-bar { flex-direction: column; gap: 5px; font-size: 0.85rem; }
  .slogan-bar .divider { display: none; }
  
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .cert-image-box { height: 220px; }
  .cert-info { padding: 15px 10px; }
  .cert-info h3 { font-size: 1rem; }
  
  /* 모바일에서 모달 닫기 버튼 위치 조정 */
  .close-btn { top: -35px; right: 0; font-size: 2rem; }
}

@media (max-width: 480px) {
  .cert-grid { grid-template-columns: 1fr; }
}
</style>