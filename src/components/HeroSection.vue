<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. 이미지 경로 (public 폴더 기준)
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
  <section class="hero">
    <div class="background-slider">
      <TransitionGroup name="fade">
        <div
          v-for="(img, index) in images"
          v-show="index === currentIndex"
          :key="img"
          class="slide-image"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 340px; /* PC 기준 높이 (이미지 원본 높이 340px에 맞춤) */
  overflow: hidden;
  background-color: #f0f0f0; /* 이미지가 로딩되기 전 배경색 */
}

/* 슬라이더 컨테이너 */
.background-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 개별 슬라이드 이미지 */
.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* 핵심 스타일 수정 */
  background-size: contain; /* 영역을 꽉 채움 */
  background-position: center center; /* 이미지의 정중앙을 보여줌 */
  background-repeat: no-repeat;
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

/* 모바일 대응 (768px 이하) */
@media (max-width: 768px) {
  .hero {
    /* 모바일에서는 높이를 줄여서 이미지가 너무 확대되어 보이는 것을 방지 */
    height: 180px;
  }
}
</style>
