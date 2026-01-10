<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Swiper 관련 모듈을 가져옵니다.
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = ref([
  { name: 'Partner 1', imgSrc: '/images/partner01.png', url: '#' },
  { name: 'Partner 2', imgSrc: '/images/partner02.png', url: '#' },
  { name: 'Partner 3', imgSrc: '/images/partner03.png', url: '#' },
  { name: 'Partner 4', imgSrc: '/images/partner04.png', url: '#' },
  { name: 'Partner 5', imgSrc: '/images/partner05.png', url: '#' },
  { name: 'Partner 6', imgSrc: '/images/partner06.png', url: '#' },
  { name: 'Partner 7', imgSrc: '/images/partner07.png', url: '#' },
]);

const modules = [Autoplay];

// Swiper 인스턴스를 저장하여 마우스 호버 시 제어
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};
const stopAutoplay = () => swiperInstance.value?.autoplay.stop();
const startAutoplay = () => swiperInstance.value?.autoplay.start();

// 화면 크기에 따라 한번에 보이는 슬라이드 개수를 동적으로 변경
const slidesPerView = ref(5);
const updateSlidesPerView = () => {
  if (window.innerWidth <= 1024) {
    slidesPerView.value = 1;
  } else {
    slidesPerView.value = 5;
  }
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
  <div id="partners_section">
    <div class="section_title" data-aos="fade-up">
      <h4>Partners</h4>
      <h1>관련 단체</h1>
    </div>
    <swiper
      class="logo_container"
      data-aos="fade-up"
      @swiper="onSwiper"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="0"
      :speed="4000"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="(partner, index) in partners"
        :key="index"
        class="logo_item"
      >
        <a :href="partner.url" target="_blank">
          <img :src="partner.imgSrc" :alt="partner.name" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
/* 💡 핵심 수정: 끊김 없는 효과를 위한 linear transition */
#partners_section :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
  gap: 20px
}

#partners_section {
  margin: var(--section-margin) auto 0;
  box-sizing: border-box;

  .section_title {
    text-align: center;
    margin-bottom: 60px;

  }

  .logo_container {

    .logo_item {
      height: 120px;
      border-radius: 20px;
      padding: 30px;
      box-sizing: border-box;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;

      // a {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   width: 100%;
      //   height: 100%;
      // }

      // img {
      //   max-width: 80%;
      //   max-height: 60%;
      //   filter: grayscale(100%);
      //   opacity: 0.7;
      //   transition: filter 0.3s ease, opacity 0.3s ease;
      // }

      // Swiper에서는 a 태그에 호버를 직접 주는 것이 더 안정적입니다.
      a:hover img {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  }
}

// --- 💻 미디어 쿼리 📱 ---
@media (max-width: 768px) {
  #partners_section .logo_container .logo_item {
    height: 140px;
  }
}
</style>
