<script setup>
import { onMounted, ref } from 'vue';

// 페이지 로드 시 부드럽게 나타나는 애니메이션 효과용 상태
const isVisible = ref(false);
const title = "CEO 인사말"; // 페이지 타이틀 정의

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
          <img src="/images/company/greeting-top.png" alt="CEO 인사말" onError="this.src='https://via.placeholder.com/1200x500?text=Greeting+Visual'" />
        </div>
        <div class="slogan-bar">
          <span class="en">Create Value for Customers</span>
          <span class="divider-bar">|</span>
          <span class="ko">고객을 위한 가치 창조</span>
        </div>
      </div>

      <div class="text-content-area">
        <h2 class="headline">
          "스마트한 물 관리와 완벽한 책임 경영,<br />
          <span class="highlight">씨에스(CS)</span>가 앞장서겠습니다."
        </h2>

        <div class="divider-center"></div>

        <div class="body-text">
          <p>
            반갑습니다. <strong>씨에스(CS)</strong> 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사드립니다.
          </p>
          <p>
            기후 위기와 에너지 비용 상승의 시대에 있어 ‘물’은 더 이상 무한한 자원이 아닙니다.
            저희 씨에스는 어떻게 하면 물 자원을 더 가치 있게 사용하고,
            운영자의 관리 부담을 획기적으로 줄일 수 있을지 끊임없이 고민해 왔습니다.
          </p>
          <p>
            씨에스는 단순한 유통사가 아닙니다. 저희는 코인 샤워기
            <strong>제품의 기획과 생산, 정밀한 조립, 현장 설치, 그리고 사후 관리(A/S)</strong>에 이르기까지
            모든 과정을 직접 수행하는 ‘원스톱 토탈 솔루션(One-Stop Total Solution)’ 체계를 구축하고 있습니다.
          </p>

          <p class="list-intro">이러한 수직 계열화된 시스템은 고객님께 세 가지 확실한 가치를 약속합니다.</p>

          <ul class="value-list">
            <li>
              <strong>압도적인 에너지 절약</strong>
              <span>정밀한 제어 기술을 통해 불필요한 물과 에너지 낭비를 막아 운영비 절감을 실현합니다.</span>
            </li>
            <li>
              <strong>맞춤형 최적 설치</strong>
              <span>외주가 아닌 본사 전문가가 직접 현장을 책임지기에, 어떤 환경에서도 가장 효율적인 설치가 가능합니다.</span>
            </li>
            <li>
              <strong>끝까지 책임지는 A/S</strong>
              <span>제품에 대한 깊은 이해를 바탕으로, 문제가 발생할 경우 신속하고 정확하게 대응하여 고객님의 사업 운영에 차질이 없도록 관리합니다.</span>
            </li>
          </ul>

          <p class="closing-phrase">
            "처음부터 끝까지, 씨에스가 만들면 다릅니다."
          </p>

          <p>
            저희 씨에스는 한 번의 설치로 인연을 끝내지 않고, 고객님의 성공적인 비즈니스를 돕는 가장 든든한 파트너가 되겠습니다.
            지속 가능한 환경과 스마트한 관리를 위해 끊임없이 혁신하겠습니다.
          </p>
          <p>
            감사합니다.
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
  padding: 0 20px; /* 모바일 좌우 여백 확보 */
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
  flex-direction: column;
  gap: 50px;
}

.greeting-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* 1. 상단 이미지 */
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
  height: auto;
  display: block;
}

.slogan-bar {
  margin-top: 15px;
  text-align: right;
  color: #0056b3;
}

.slogan-bar .en { font-weight: bold; letter-spacing: 0.5px; }
.slogan-bar .divider-bar { margin: 0 10px; color: #ccc; }
.slogan-bar .ko { font-weight: 700; color: #333; }

/* 2. 하단 텍스트 영역 */
.text-content-area {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

.headline {
  font-size: 2.4rem;
  line-height: 1.4;
  color: #222;
  font-weight: 300;
  margin-bottom: 30px;
  word-break: keep-all;
}

.headline .highlight {
  font-weight: 700;
  color: #0056b3;
}

.divider-center {
  width: 60px;
  height: 3px;
  background-color: #0056b3;
  margin: 0 auto 40px auto;
}

.body-text {
  text-align: justify; /* 양쪽 정렬 */
}

.body-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
  word-break: keep-all;
}

/* 강조 텍스트 스타일 */
.body-text strong {
  color: #222;
  font-weight: 700;
}

/* 리스트 스타일 추가 */
.list-intro {
  margin-bottom: 15px !important;
  font-weight: 500;
  color: #222;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.value-list li {
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 1.05rem;
  padding-left: 15px;
  position: relative;
}

.value-list li:last-child {
  margin-bottom: 0;
}

.value-list li::before {
  content: "•";
  color: #0056b3;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.value-list li strong {
  display: block; /* 모바일 가독성을 위해 줄바꿈 가능성 열어둠 */
  font-size: 1.15rem;
  color: #0056b3;
  margin-bottom: 4px;
  display: inline-block;
  margin-right: 5px;
}

/* 강조 문구 (처음부터 끝까지...) */
.closing-phrase {
  font-size: 1.4rem !important;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin: 40px 0 !important;
  letter-spacing: -0.5px;
}

/* 서명 영역 */
.signature-area {
  margin-top: 60px;
  text-align: center;
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

/* --- 모바일 반응형 --- */
@media (max-width: 768px) {
  .page-header { padding: 2rem 0; margin-bottom: 2rem; }
  .greeting-section { gap: 30px; }
  .slogan-bar { text-align: center; font-size: 0.9rem; }
  .headline { font-size: 1.6rem; }

  .body-text p { font-size: 1rem; line-height: 1.7; }
  .value-list li strong { display: block; margin-bottom: 2px; } /* 모바일에서 제목 줄바꿈 */
  .closing-phrase { font-size: 1.2rem !important; margin: 30px 0 !important; }

  .signature-name { font-size: 1.6rem; }
}
</style>
