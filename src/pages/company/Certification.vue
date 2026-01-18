<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

// 페이지 타이틀
const pageTitle = "산업재산권";

// 페이지 로드 시 페이드인 효과
const isVisible = ref(false);

// 인증서 데이터
const certifications = [
  { id: 1, name: '특허증', image: '/images/company/certification/1.png' },
  { id: 2, name: '실용신안등록증', image: '/images/company/certification/2.jpg' },
  { id: 3, name: '디자인등록증', image: '/images/company/certification/3.jpg' },
  { id: 4, name: 'ISO 9001', image: '/images/company/certification/4.jpg' },
  { id: 5, name: '여성기업확인서', image: '/images/company/certification/5.jpg' },
  { id: 6, name: '상표등록증', image: '/images/company/certification/6.jpg' },
  { id: 7, name: '상표등록증', image: '/images/company/certification/7.jpg' },
  { id: 8, name: '상표등록증', image: '/images/company/certification/8.jpg' },
  { id: 9, name: '상표등록증', image: '/images/company/certification/9.jpg' },
  { id: 10, name: '상표등록증', image: '/images/company/certification/10.png' },
  { id: 11, name: '상표등록증', image: '/images/company/certification/11.png' },
  { id: 12, name: '상표등록증', image: '/images/company/certification/12.png' },
  { id: 13, name: '상표등록증', image: '/images/company/certification/13.png' },
  { id: 14, name: '상표등록증', image: '/images/company/certification/14.png' },
];

// --- 모달 및 네비게이션 로직 ---
const isModalOpen = ref(false);
const currentIndex = ref(0); // 현재 선택된 이미지의 인덱스

// 현재 인덱스에 해당하는 데이터 계산
const selectedCert = computed(() => {
  if (!isModalOpen.value) return null;
  return certifications[currentIndex.value];
});

// 모달 열기 (인덱스로 받음)
const openModal = (index) => {
  currentIndex.value = index;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

// 모달 닫기
const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

// 이전 이미지 보기
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = certifications.length - 1; // 처음이면 마지막으로 루프
  }
};

// 다음 이미지 보기
const nextImage = () => {
  if (currentIndex.value < certifications.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // 마지막이면 처음으로 루프
  }
};

// 키보드 이벤트 핸들러
const handleKeydown = (e) => {
  if (!isModalOpen.value) return; // 모달이 닫혀있으면 동작 안함

  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'Escape') closeModal();
};

// 라이프사이클 훅: 키보드 이벤트 리스너 등록/해제
onMounted(() => {
  setTimeout(() => { isVisible.value = true; }, 100);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
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
            v-for="(item, index) in certifications"
            :key="item.id"
            class="cert-item image-only"
            @click="openModal(index)"
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

          <button class="nav-btn prev" @click.stop="prevImage">
            &#10094; </button>

          <img v-if="selectedCert" :src="selectedCert.image" :alt="selectedCert.name" class="modal-image" />

          <button class="nav-btn next" @click.stop="nextImage">
            &#10095; </button>

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

/* --- 인증서 그리드 스타일 (기존 동일) --- */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.cert-item.image-only {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.cert-item.image-only:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.cert-image-box {
  width: 100%;
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
  object-fit: contain;
  padding: 20px;
  transition: transform 0.4s;
}

.hover-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.6);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.view-icon {
  color: #fff; border: 1px solid #fff; padding: 10px 24px;
  border-radius: 30px; font-size: 1rem; font-weight: 500; letter-spacing: 1px;
}
.cert-item.image-only:hover .hover-overlay { opacity: 1; }
.cert-item.image-only:hover img { transform: scale(1.05); }


/* --- [수정] 모달 및 네비게이션 스타일 --- */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
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
  /* 모달 컨텐츠에 화살표 공간 확보를 위해 너비를 약간 넓게 잡거나 패딩을 줄 수 있음 */
}

.modal-image {
  max-width: 100%;
  max-height: 85vh; /* 화살표 등과 겹치지 않게 높이 조정 */
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  background-color: #fff;
}

/* 닫기 버튼 */
.close-btn {
  position: absolute; top: -45px; right: 0;
  background: none; border: none; font-size: 2.5rem; cursor: pointer; color: #fff; z-index: 20;
  transition: color 0.3s;
}
.close-btn:hover { color: #e74c3c; }

/* [추가] 네비게이션 버튼 (화살표) 스타일 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3); /* 반투명 배경 */
  color: #fff;
  border: none;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10;
  user-select: none; /* 드래그 방지 */
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-btn.prev {
  left: -70px; /* 이미지 밖으로 배치 */
}

.nav-btn.next {
  right: -70px; /* 이미지 밖으로 배치 */
}

/* 모달 트랜지션 */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* --- 반응형 --- */
@media (max-width: 768px) {
  .page-header { padding: 2rem 0; margin-bottom: 2rem; }
  .slogan-bar { text-align: center; font-size: 0.9rem; margin-top: 10px; }
  .headline { font-size: 1.6rem; margin-bottom: 20px; }
  .mobile-break { display: block; }

  /* 그리드 */
  .cert-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .cert-image-box { height: 250px; }

  /* 모바일에서 네비게이션 버튼 위치 조정 */
  .nav-btn {
    width: 40px; height: 40px; font-size: 1.5rem;
    background-color: rgba(0,0,0,0.5); /* 모바일은 좀 더 진하게 */
  }
  .nav-btn.prev { left: 10px; } /* 화면 안쪽으로 배치 */
  .nav-btn.next { right: 10px; } /* 화면 안쪽으로 배치 */

  .close-btn { top: -40px; right: 10px; font-size: 2rem; }
}

@media (max-width: 480px) {
  .cert-grid { grid-template-columns: 1fr; }
  .cert-image-box { height: 300px; }
}
</style>
