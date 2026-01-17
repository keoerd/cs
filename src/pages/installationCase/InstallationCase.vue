<script setup>
import { ref, computed } from 'vue';

// --- [탭 상태 관리] ---
const activeMainTab = ref('cases');

// --- [탭 1: 설치사례 데이터] ---
const categories = ['ALL', '대샤워기', '줄샤워기', '폴샤워기'];
const activeCategory = ref('ALL');

const installCases = [
  {
    id: 1,
    category: '대샤워기',
    title: '대샤워기 매립형',
    mainImage: '/images/installation/대샤워기/대샤워기 매립형.png',
  },
  {
    id: 2,
    category: '대샤워기',
    title: '신용카드 대샤워기 덕트',
    mainImage: '/images/installation/대샤워기/신용카드 대샤워기 덕트.jpg',
  },
  {
    id: 3,
    category: '대샤워기',
    title: '일체형 덕트',
    mainImage: '/images/installation/대샤워기/일체형 덕트.jpg',
  },
  {
    id: 4,
    category: '줄샤워기',
    title: '신용카드 줄샤워기',
    mainImage: '/images/installation/줄샤워기/신용카드 줄샤워기.jpg',
  },
  {
    id: 5,
    category: '줄샤워기',
    title: '신용카드 줄샤워기',
    mainImage: '/images/installation/줄샤워기/신용카드 줄샤워기.png',
  },
  {
    id: 6,
    category: '폴샤워기',
    title: '폴 2인용 샤워기',
    mainImage: '/images/installation/폴샤워기/폴 2인용 샤워기.jpg',
  },
  {
    id: 7,
    category: '폴샤워기',
    title: '폴 4인용 샤워기',
    mainImage: '/images/installation/폴샤워기/폴 4인용 샤워기.jpg',
  },
];

const filteredCases = computed(() => {
  if (activeCategory.value === 'ALL') return installCases;
  return installCases.filter(c => c.category === activeCategory.value);
});

// 모달 로직
const selectedCase = ref(null);
const isModalOpen = ref(false);

const openModal = (item) => {
  selectedCase.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => { selectedCase.value = null; }, 300);
  document.body.style.overflow = '';
};

// --- [탭 2: 설치현황 데이터] ---
const statusData = [
  {
    id: '01',
    title: '지방자치단체 야영장',
    content: `경상남도 상족암 군립공원해변야영장 / 속초시 국민여가캠핑장 / 강원도 양양군(동호해변 · 죽도해변) / 강원도 횡성군(선바위야영장 · 병지방야영장) / 천안시 독립기념관 캠핑장 / 경북 청송군(얼음골 캠핑장, 수달 캠핑장) / 여수시 웅천 친수공원야영장 / 제주시 상효원 수목원 캠핑장, 관음사야영장`
  },
  {
    id: '02',
    title: '해수욕장',
    content: `부산시 해운대해변 / 강원도 속초시 속초해변, 양양군(인구해변 · 동산포해변 · 남애3리해변 · 갯마을해변 · 설악해변 · 기사문해변 · 낙산해변 · 동호해변 · 하조대해변 · 물치해변 · 죽도해변), 삼척시 (맹방해변 · 삼척해변) / 경상북도 영덕군(대진해변 · 장사해변), 울진군(구산해변 · 염전해변 · 후정해변 · 기성망양해변) / 경상남도 거제시(구조라해변 · 와현해변 · 흥남해변 · 학동 흑진주몽돌해변 · 함목해변), 사천시 남일대해변, 통영군 (수륙해변), 남해군(송정솔바람해변 · 상주은모래비치 · 설리해변) / 전라북도 부안군 변산해변 / 전라남도 신안군 (자은도 백길해변 · 시목해변)`
  },
  {
    id: '03',
    title: '국립공원관리공단',
    content: `서울 북한산 사기막골야영장 / 강원도 태백산 소도야영장, 설악산 설악동야영장, 치악산(구룡야영장 · 금대야영장) / 오대산 소금강자동차야영장 / 거제시(한려해상 학동자동차야영장 · 학동흑진주몽돌해변 주차장 샤워장 · 학동흑진주몽돌해변 중앙샤워장 · 함목해변 · 덕신야영장) / 전라북도 변산반도(고사포야영장 · 직소천야영장), 지리산(뱀사골야영장 · 덕동야영장 · 학천 야영장 · 달궁야영장 · 달궁힐링야영장 · 내원야영장) / 전라남도 내장산(가인야영장 · 내장야영장 · 내장호야영장), 월출산 천황사야영장, 신안군 다도해(시목해변,시목 야영장-섬), 고흥군 다도해(염포야영장), 무등산 도원야영장 / 경상남도 가야산(삼정야영장 · 치인야영장 · 백운동야영장) / 충청남도 태안(몽산포오토캠핑장 · 학암포오토캠핑장) / 충청북도 소백산 남천야영장 / 제주도 한라산(관음사야영장)`
  }
];
</script>

<template>
  <div class="install-view">

    <div class="page-header">
      <div class="container">
        <h1>설치센터</h1>
        <div class="breadcrumb">홈 > 설치센터 > {{ activeMainTab === 'cases' ? '설치사례' : '설치현황' }}</div>
      </div>
    </div>

    <section class="container content-section">

      <div class="main-tabs">
        <button
          class="tab-btn"
          :class="{ active: activeMainTab === 'cases' }"
          @click="activeMainTab = 'cases'"
        >
          설치사례
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeMainTab === 'status' }"
          @click="activeMainTab = 'status'"
        >
          설치현황
        </button>
      </div>

      <div v-show="activeMainTab === 'cases'" class="tab-content fade-in">

        <div class="category-nav">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="case-grid">
          <article
            v-for="item in filteredCases"
            :key="item.id"
            class="case-card image-only"
            @click="openModal(item)"
          >
            <div class="img-box">
              <img :src="item.mainImage" :alt="item.title" />
              <div class="overlay">
                <span class="view-icon">VIEW MORE</span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredCases.length === 0" class="no-result">
          <p>해당 카테고리의 설치 사례가 없습니다.</p>
        </div>
      </div>

      <div v-show="activeMainTab === 'status'" class="tab-content fade-in">
        <div class="status-list-container">
          <div class="status-header-text">
            <h2>전국 주요 설치 현황</h2>
            <p>씨에스(CS)의 코인 샤워 시스템은 전국의 주요 공공시설 및 관광지에 설치되어 있습니다.</p>
          </div>

          <div class="status-grid">
            <div v-for="status in statusData" :key="status.id" class="status-card">
              <div class="status-number-box">
                <span class="status-num">{{ status.id }}</span>
                <div class="status-deco-line"></div>
              </div>
              <div class="status-content-box">
                <h3>{{ status.title }}</h3>
                <p>{{ status.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <Transition name="modal">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content simple-modal">
          <button class="close-btn" @click="closeModal">&times;</button>

          <div class="modal-body" v-if="selectedCase">
            <div class="simple-header">
              <h2>{{ selectedCase.title }}</h2>
            </div>

            <div class="simple-image-area">
              <img :src="selectedCase.mainImage" alt="확대 이미지" />
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- 기본 레이아웃 --- */
.install-view { width: 100%; padding-bottom: 5rem; background-color: #fff; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.page-header { background-color: #f4f7fa; padding: 3rem 0; margin-bottom: 3rem; border-bottom: 1px solid #e1e4e8; }
.page-header h1 { font-size: 2rem; color: #222; font-weight: 700; margin-bottom: 0.5rem; }
.breadcrumb { font-size: 0.9rem; color: #666; }

/* 탭 스타일 */
.main-tabs { display: flex; justify-content: center; gap: 0; margin-bottom: 50px; border-bottom: 2px solid #eee; }
.tab-btn { flex: 1; max-width: 250px; padding: 15px 0; background: transparent; border: none; font-size: 1.1rem; font-weight: 500; color: #888; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.3s; position: relative; top: 2px; }
.tab-btn:hover { color: #0056b3; }
.tab-btn.active { color: #0056b3; font-weight: 700; border-bottom: 3px solid #0056b3; }
.fade-in { animation: fadeInUp 0.6s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* --- 설치사례 (이미지 중심) --- */
.category-nav { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 40px; justify-content: center; }
.category-nav button { padding: 8px 18px; border: 1px solid #ddd; background: #fff; border-radius: 30px; font-size: 0.9rem; cursor: pointer; transition: all 0.3s; color: #555; }
.category-nav button:hover, .category-nav button.active { background-color: #0056b3; border-color: #0056b3; color: white; }

/* 그리드 수정: 텍스트 없이 이미지만 보여주므로 열 개수 조정 가능 */
.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.case-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  /* 텍스트가 없으므로 그림자나 보더는 최소화하거나 제거 */
}

.img-box {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3; /* 이미지 비율 고정 (가로형) */
  overflow: hidden;
  background-color: #f0f0f0;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

/* 오버레이 효과 */
.overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5); /* 조금 더 진하게 */
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.view-icon {
  color: #fff; border: 1px solid #fff; padding: 8px 20px;
  border-radius: 30px; font-size: 0.9rem; font-weight: 500; letter-spacing: 1px;
}
.case-card:hover .img-box img { transform: scale(1.1); }
.case-card:hover .overlay { opacity: 1; }

.no-result { text-align: center; padding: 50px 0; color: #999; }

/* --- 설치현황 (기존 스타일 유지) --- */
.status-list-container { max-width: 1000px; margin: 0 auto; }
.status-header-text { text-align: center; margin-bottom: 50px; }
.status-header-text h2 { color: #0056b3; font-size: 2rem; font-weight: 800; margin-bottom: 10px; }
.status-header-text p { color: #666; }
.status-grid { display: flex; flex-direction: column; gap: 40px; }
.status-card { display: flex; gap: 30px; padding: 30px; background: #fff; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-left: 5px solid #0056b3; transition: transform 0.3s; }
.status-card:hover { transform: translateX(10px); }
.status-number-box { display: flex; flex-direction: column; align-items: center; min-width: 80px; }
.status-num { font-size: 3rem; font-weight: 900; color: #e0e0e0; line-height: 1; position: relative; z-index: 1; }
.status-card:hover .status-num { color: #0056b3; transition: color 0.3s; }
.status-deco-line { width: 2px; height: 100%; background: #f0f0f0; margin-top: 10px; }
.status-content-box { flex: 1; }
.status-content-box h3 { font-size: 1.4rem; color: #333; margin-bottom: 15px; font-weight: 700; border-bottom: 1px solid #eee; padding-bottom: 10px; display: inline-block; }
.status-content-box p { font-size: 1rem; color: #555; line-height: 1.8; word-break: keep-all; }


/* --- [수정] 모달 스타일 (심플 버전) --- */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85); /* 배경 더 어둡게 */
  z-index: 2000;
  display: flex; justify-content: center; align-items: center; padding: 20px;
}

.modal-content.simple-modal {
  background: transparent; /* 배경 투명 처리 (이미지 강조) */
  box-shadow: none;
  width: 100%; max-width: 900px; max-height: 90vh;
  position: relative;
  display: flex; flex-direction: column;
}

.close-btn {
  position: absolute; top: -40px; right: 0;
  background: none; border: none; font-size: 2.5rem; cursor: pointer; color: #fff; z-index: 10;
  transition: color 0.3s;
}
.close-btn:hover { color: #e74c3c; }

.modal-body {
  text-align: center;
}

.simple-header {
  margin-bottom: 15px;
}

.simple-header h2 {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.simple-image-area {
  width: 100%;
  display: flex;
  justify-content: center;
}

.simple-image-area img {
  max-width: 100%;
  max-height: 80vh; /* 화면 높이에 맞춤 */
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* 반응형 */
@media (max-width: 992px) {
  .case-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .case-grid { grid-template-columns: 1fr; }
  .status-card { flex-direction: column; gap: 15px; padding: 20px; }
  .status-number-box { flex-direction: row; align-items: center; gap: 10px; width: 100%; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 5px; }
  .status-deco-line { display: none; }
  .status-num { font-size: 2rem; }
  .status-content-box h3 { margin-bottom: 10px; font-size: 1.2rem; border: none; padding: 0; }

  .simple-header h2 { font-size: 1.2rem; }
  .close-btn { top: -35px; right: 0; font-size: 2rem; }
}
</style>
