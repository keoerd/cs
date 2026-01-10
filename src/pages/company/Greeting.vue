<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  title: String
});

// 페이지 로드 시 부드럽게 나타나는 애니메이션 효과용 상태
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="company-view">
    <div class="page-header" v-if="title">
      <div class="container">
        <h1>{{ title }}</h1>
        <div class="breadcrumb">홈 > 회사소개 > {{ title }}</div>
      </div>
    </div>

    <section class="greeting-section container" :class="{ 'fade-in': isVisible }">

      <div class="visual-full-area">
        <div class="image-frame-full">
          <img src="/images/company/greeting-top.png" alt="CEO 인사말" />
        </div>
        <div class="slogan-bar">
          <span class="en">Create Value for Customers</span>
          <span class="divider-bar">|</span>
          <span class="ko">고객을 위한 가치 창조</span>
        </div>
      </div>

      <div class="text-content-area">
        <h2 class="headline">
          "고객의 성공이<br />
          곧 <span class="highlight">씨에스(CS)의 성공</span>입니다."
        </h2>

        <div class="divider-center"></div>

        <div class="body-text">
          <p>
            안녕하십니까? <strong>씨에스(CS)</strong> 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
          </p>
          <p>
            저희 씨에스는 21세기 정보화 시대를 맞이하여 급변하는 환경 속에서도
            오직 <strong>최고의 품질과 기술력</strong>을 바탕으로 고객 여러분의 신뢰를 쌓아왔습니다.
            코인 샤워기 및 산업용 시설물 분야에서 축적된 노하우를 통해
            편리하고 쾌적한 생활 환경을 만드는 데 앞장서고 있습니다.
          </p>
          <p>
            단순히 제품을 만드는 것을 넘어, 고객 여러분의 삶의 질을 높이고
            비즈니스에 실질적인 도움이 되는 파트너가 되기 위해 끊임없이 연구하고 노력하겠습니다.
          </p>
          <p>
            앞으로도 변함없는 관심과 성원을 부탁드리며, 여러분의 가정과 사업에
            행복이 가득하시기를 기원합니다. 감사합니다.
          </p>
        </div>

        <div class="signature-area">
          <p>씨에스(CS) 대표이사</p>
          <div class="signature-name">이 명 숙</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- 공통 레이아웃 --- */
.company-view {
  width: 100%;
  padding-bottom: 6rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 상단 타이틀 바 */
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

/* --- 인사말 섹션 스타일 --- */
.greeting-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  display: flex;
  flex-direction: column; /* 세로 배치로 변경 */
  gap: 50px;
}

.greeting-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* 1. 상단 이미지 (Full Width) */
.visual-full-area {
  width: 100%;
}

.image-frame-full {
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.image-frame-full img {
  width: 100%;
  height: auto; /* 비율 유지하며 꽉 차게 */
  display: block;
}

/* 이미지 아래 슬로건 바 */
.slogan-bar {
  margin-top: 15px;
  text-align: right;
  color: #0056b3;
}

.slogan-bar .en {
  font-weight: bold;
  letter-spacing: 0.5px;
}

.slogan-bar .divider-bar {
  margin: 0 10px;
  color: #ccc;
}

.slogan-bar .ko {
  font-weight: 700;
  color: #333;
}

/* 2. 하단 텍스트 영역 */
.text-content-area {
  max-width: 860px; /* 글줄이 너무 길어지지 않게 중앙 배치 */
  margin: 0 auto; /* 가로 중앙 정렬 */
  text-align: center; /* 기본 텍스트 중앙 정렬 */
}

.headline {
  font-size: 2.4rem;
  line-height: 1.4;
  color: #222;
  font-weight: 300;
  margin-bottom: 30px;
  word-break: keep-all;
}

.headline strong, .headline .highlight {
  font-weight: 700;
  color: #0056b3;
}

.divider-center {
  width: 60px;
  height: 3px;
  background-color: #0056b3;
  margin: 0 auto 40px auto; /* 중앙 정렬 */
}

.body-text {
  text-align: justify; /* 본문은 양쪽 정렬로 깔끔하게 */
}

.body-text p {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #444;
  margin-bottom: 24px;
  word-break: keep-all;
}

/* 서명 영역 */
.signature-area {
  margin-top: 60px;
  text-align: center; /* 중앙 정렬 */
}

.signature-area p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 15px;
}

.signature-name {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  font-family: serif;
}

/* --- 모바일 반응형 (768px 이하) --- */
@media (max-width: 768px) {
  .page-header {
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  .greeting-section {
    gap: 30px;
  }

  .slogan-bar {
    text-align: center; /* 모바일에서는 슬로건 중앙 정렬 */
    font-size: 0.9rem;
  }

  .headline {
    font-size: 1.6rem;
  }

  .body-text p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .signature-name {
    font-size: 1.6rem;
  }
}
</style>
