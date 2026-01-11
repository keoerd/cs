<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. 이미지 경로
const images = [
  '/images/banner/main-banner1.jpg',
  '/images/banner/main-banner2.jpg',
];

const currentIndex = ref(0);
let intervalId = null;

// 2. 자동 롤링 로직
const startSlide = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 4000); // 4초 간격
};

onMounted(() => {
  startSlide();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <section class="hero-wrapper">

    <div class="hero-container">
      <div class="background-slider">
        <TransitionGroup name="fade">
          <img
            v-for="(img, index) in images"
            v-show="index === currentIndex"
            :key="img"
            :src="img"
            alt="메인 배너"
            class="slide-image"
          />
        </TransitionGroup>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* 1. 전체 래퍼 */
.hero-wrapper {
  width: 100%;
  /* 배경색 제거 (투명) */
  background-color: transparent;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  padding: 20px 0; /* 상하 약간의 여백 */
}

/* 2. 실제 배너 컨테이너 */
.hero-container {
  width: 100%;
  max-width: 1400px; /* 최대 너비 제한 */

  /* 핵심: 비율 유지 (원본 비율 1890 / 340 ≈ 5.5588) */
  aspect-ratio: 1890 / 340;

  position: relative;
  overflow: hidden;
  /* 이미지가 로드되기 전 영역 확보용 배경색 (필요 없으면 삭제) */
  /* background-color: #f5f5f5; */
}

/* 슬라이더 내부 */
.background-slider {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 3. 개별 슬라이드 이미지 (<img> 태그) */
.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* 핵심: 이미지 전체를 비율 유지하며 보여줌 */
  object-fit: contain;
}

/* Vue Transition: Fade 효과 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 모바일 대응: aspect-ratio가 알아서 높이를 조절하므로 별도 height 설정 필요 없음 */
@media (max-width: 768px) {
  .hero-wrapper {
    padding: 10px 0; /* 모바일 여백 조정 */
  }
}
</style>
