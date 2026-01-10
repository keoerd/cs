<template>
  <div class="perpose_section" data-aos="fade-up">
    <div class="flex_container">
      <div class="section_title">
        <h4>Purpose</h4>
        <h1>목적</h1>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view=slidesPerView
        :space-between="20"
        :speed="1200"
        :loop="true"
        :autoplay="{
          delay: 2300,
          disableOnInteraction: false,
        }"
        class="list_container"
      >
        <swiper-slide v-for="(purpose, index) in purposes" :key="index" class="list_item">
          <h5>{{ purpose.title }}</h5>
          <p>{{ purpose.text }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// 2. Swiper 스타일을 가져옵니다.
import 'swiper/css';

const slidesPerView = ref(3.7);
const purposes = [
  { title: 'BUSINESS GROWTH', text: '국내 중소기업·유럽 한인 경제인의 역량 강화 및 정보 제공' },
  { title: 'GLOBAL ACCESS', text: '한국 기업·지자체의 유럽 진출 및 투자·관광·수출·네트워크 지원' },
  { title: 'STRATEGIC DIALOGUE', text: 'EU 비즈니스 애로사항 전달 및 현지 경제단체와 협력' },
  { title: 'COMMUNITY SUPPORT', text: '한인 경제인의 권익 보호 및 네트워크 구축' },
  // loop 효과를 위해 원본 데이터를 복제해 뒤에 붙여줍니다.
  ...[
    { title: 'BUSINESS GROWTH', text: '국내 중소기업·유럽 한인 경제인의 역량 강화 및 정보 제공' },
    { title: 'GLOBAL ACCESS', text: '한국 기업·지자체의 유럽 진출 및 투자·관광·수출·네트워크 지원' },
    { title: 'STRATEGIC DIALOGUE', text: 'EU 비즈니스 애로사항 전달 및 현지 경제단체와 협력' },
    { title: 'COMMUNITY SUPPORT', text: '한인 경제인의 권익 보호 및 네트워크 구축' },
  ]
];

// 3. 사용할 Swiper 모듈들을 배열로 전달합니다.
const modules = [Autoplay];
onMounted(() => {
  if (window.innerWidth <= 768) {
    slidesPerView.value = 1;
  } else {
    slidesPerView.value = 3.7;
  }
});
</script>
<style lang="scss" scoped>
/* 기존 스타일은 그대로 유지 */
.perpose_section {
  margin: 180px auto 0;
  padding-left: 12%;
  box-sizing: border-box;
  .flex_container {
    display: flex;
    gap: 140px;
    .section_title {
      margin-top: 40px;
      width: 10%;
      h4 {
        font-family: "ELAND_Choice_M", sans-serif;
        color: #dc3839;
        font-size: 1.57vw;
        margin-bottom: 10px;
      }
      h1 {
        font-weight: 600;
        font-size: 2.61vw;
      }
    }
    .list_container {
      width: 90%;
      overflow: hidden;
      padding: 10px;
      box-sizing: border-box;
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
      }
      .swiper-slide {
        height: 280px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.05);
        padding: 40px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
        h5 {
          color: #dc3839;
          font-size: 20px;
          position: relative;
          font-weight: 600;
          &::before {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: #dc3839;
            position: absolute;
            left: -8px;
            top: 0;
          }
        }
        p {
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .perpose_section {
    margin-top: 100px;
    padding-left: 0!important;
    .flex_container {
      flex-direction: column;
      gap: 40px;
      align-items: center;

      .section_title {
        flex-basis: auto;
        width: 100%;
        text-align: center;

        h4 {
          font-size: 1.2rem;
        }
        h1 {
          font-size: 2rem;
        }
      }

      .list_container {
        // width: 100vw;
        // padding: 0 var(--section-padding);
        // box-sizing: border-box;

        .swiper-slide {
          height: auto;
          min-height: 240px;
          padding: 30px;

          h5 {
            font-size: 18px;
          }
          p {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
