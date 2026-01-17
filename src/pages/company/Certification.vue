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

// 인증서 데이터 (이미지 경로만 정확하면 됩니다)
const certifications = [
  { id: 1, name: '', image: '/images/company/certification/1.png' },
  { id: 2, name: '', image: '/images/company/certification/2.jpg' },
  { id: 3, name: '', image: '/images/company/certification/3.jpg' },
  { id: 4, name: '', image: '/images/company/certification/4.jpg' },
  { id: 5, name: '', image: '/images/company/certification/5.jpg' },
  { id: 6, name: '', image: '/images/company/certification/6.jpg' },
  { id: 7, name: '', image: '/images/company/certification/7.jpg' },
  { id: 8, name: '', image: '/images/company/certification/8.jpg' },
  { id: 9, name: '', image: '/images/company/certification/9.jpg' },
  { id: 10, name: '', image: '/images/company/certification/10.png' },
  { id: 11, name: '', image: '/images/company/certification/11.png' },
  { id: 12, name: '', image: '/images/company/certification/12.png' },
  { id: 13, name: '', image: '/images/company/certification/13.png' },
  { id: 14, name: '', image: '/images/company/certification/14.png' },
];

// --- 모달 관련 로직 ---
const selectedCert = ref(null);
const isModalOpen = ref(false);

const openModal = (item) => {
  selectedCert.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => { selectedCert.value = null; }, 300); // 애니메이션 후 데이터 비움
  document.body.style.overflow = ''; // 스크롤 방지 해제
};
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
          <div
            v-for="item in certifications"
            :key="item.id"
            class="cert-item image-only"
            @click="openModal(item)"
          >
            <div class="cert-image-box">
              <img :src="item.image" :alt="item.name" />
              <div class="hover-overlay">
                <span class="view-icon">확대보기</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Transition name="modal">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content-simple">
          <button class="close-btn" @click="closeModal">&times;</button>
          <img v-if="selectedCert" :src="selectedCert.image" :alt="selectedCert.name" class="modal-image" />
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- 기본 레이아웃 (기존 동일) --- */
.certification-view { width: 100%; padding-bottom: 8rem; background-color: #fff; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
.content-section { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s ease; }
.content-section.fade-in { opacity: 1; transform: translateY(0); }

/* --- 페이지 헤더 & 상단 비주얼 (기존 동일) --- */
.page-header { background-color: #f4f7fa; padding: 3rem 0; margin-bottom: 3rem; border-bottom: 1px solid #e1e4e8; }
.page-header h1 { font-size: 2rem; color: #222; margin-bottom: 0.5rem; font-weight: 700; }
.breadcrumb { font-size: 0.9rem; color: #666; }
.visual-full-area { width: 100%; margin-bottom: 4rem; }
.image-frame-full { width: 100%; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
.image-frame-full img { width: 100%; height: auto; display: block; }
.slogan-bar { margin-top: 15px; text-align: right; color: #0056b3; }
.slogan-bar .en { font-weight: bold; letter-spacing: 0.5px; }
.slogan-bar .divider-bar { margin: 0 10px; color: #ccc; }
.slogan-bar .ko { font-weight: 700; color: #333; }

/* --- 헤드라인 & 인트로 텍스트 (기존 동일) --- */
.content-wrapper { max-width: 100%; margin: 0 auto; text-align: center; }
.headline { font-size: 2.4rem; line-height: 1.4; color: #222; font-weight: 300; margin-bottom: 30px; word-break: keep-all; }
.headline .highlight { font-weight: 700; color: #0056b3; }
.decorative-line { width: 60px; height: 3px; background-color: #0056b3; margin: 0 auto 40px auto; }
.intro-text { margin-bottom: 60px; color: #666; font-size: 1.1rem; }

/* --- [수정] 인증서 그리드 스타일 (이미지 전용) --- */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* PC 3열 */
  gap: 30px;
}

.cert-item.image-only {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer; /* 클릭 가능 표시 */
  /* 하단 텍스트 영역이 없으므로 패딩 불필요 */
}

.cert-item.image-only:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.cert-image-box {
  width: 100%;
  /* 세로로 긴 상장 비율에 맞춤 (필요시 조정: ex. aspect-ratio: 3 / 4;) */
  height: 400px;
  background-color: #f9f9f9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cert-image-box img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지하며 안에 맞춤 */
  padding: 20px; /* 테두리와 간격 */
  transition: transform 0.4s;
}

/* 호버 오버레이 스타일 */
.hover-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.6); /* 반투명 파란 배경 */
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.view-icon {
  color: #fff; border: 1px solid #fff; padding: 10px 24px;
  border-radius: 30px; font-size: 1rem; font-weight: 500; letter-spacing: 1px;
}

.cert-item.image-only:hover .hover-overlay { opacity: 1; }
.cert-item.image-only:hover img { transform: scale(1.05); /* 이미지 살짝 확대 */ }

/* 기존 .cert-info 스타일 제거됨 */


/* --- [신규] 이미지 확대 모달 스타일 --- */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85); /* 짙은 어두운 배경 */
  z-index: 2000;
  display: flex; justify-content: center; align-items: center; padding: 20px;
}

.modal-content-simple {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh; /* 화면 높이를 넘지 않도록 */
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  background-color: #fff; /* 투명 이미지 대비 */
}

.close-btn {
  position: absolute; top: -40px; right: 0;
  background: none; border: none; font-size: 2.5rem; cursor: pointer; color: #fff; z-index: 10;
  transition: color 0.3s;
}
.close-btn:hover { color: #e74c3c; }

/* 모달 트랜지션 */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }


/* --- 반응형 --- */
@media (max-width: 768px) {
  .page-header { padding: 2rem 0; margin-bottom: 2rem; }
  .slogan-bar { text-align: center; font-size: 0.9rem; margin-top: 10px; }
  .headline { font-size: 1.6rem; margin-bottom: 20px; }
  .mobile-break { display: block; }

  /* 모바일 그리드 */
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .cert-image-box { height: 250px; } /* 모바일에서 높이 줄임 */

  /* 모바일 모달 닫기 버튼 */
  .close-btn { top: -35px; right: 0; font-size: 2rem; }
}

@media (max-width: 480px) {
  .cert-grid { grid-template-columns: 1fr; }
  .cert-image-box { height: 300px; } /* 1열일 때 높이 약간 확보 */
}
</style>
