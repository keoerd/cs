<script setup>
import { ref, computed } from 'vue';

// --- [탭 상태 관리] ---
// 'cases': 설치사례 (기존 갤러리)
// 'status': 설치현황 (이미지 내용)
const activeMainTab = ref('cases');

// --- [탭 1: 설치사례 데이터 및 로직] ---
const categories = ['ALL', '캠핑장/펜션', '기숙사/고시원', '헬스장/사우나', '공공시설/기타'];
const activeCategory = ref('ALL');

const installCases = [
  {
    id: 1,
    category: '캠핑장/펜션',
    title: '가평 OO 캠핑장 샤워실',
    date: '2025.10.15',
    location: '경기도 가평군',
    mainImage: 'https://via.placeholder.com/600x400?text=Camping+Site+Main',
    description: '가평의 대형 캠핑장에 코인 샤워기 CS-500 모델 20대를 설치했습니다. 여름철 성수기 물 부족 문제를 해결하고, 온수 사용량을 효율적으로 관리할 수 있게 되었습니다.',
    detailImages: [
      'https://via.placeholder.com/800x600?text=Detail+1',
      'https://via.placeholder.com/800x600?text=Detail+2'
    ]
  },
  {
    id: 2,
    category: '기숙사/고시원',
    title: '천안 OO대학교 기숙사',
    date: '2025.09.20',
    location: '충청남도 천안시',
    mainImage: 'https://via.placeholder.com/600x400?text=Dormitory+Main',
    description: '노후된 샤워 시설 리모델링과 함께 카드 결제형 샤워 시스템을 도입했습니다.',
    detailImages: []
  },
  {
    id: 3,
    category: '헬스장/사우나',
    title: '강남 XX 피트니스 센터',
    date: '2025.08.05',
    location: '서울시 강남구',
    mainImage: 'https://via.placeholder.com/600x400?text=Fitness+Main',
    description: '회원 전용 프라이빗 샤워 부스를 설치했습니다.',
    detailImages: []
  },
  {
    id: 4,
    category: '공공시설/기타',
    title: '부산 해운대 공용 샤워장',
    date: '2025.07.01',
    location: '부산광역시 해운대구',
    mainImage: 'https://via.placeholder.com/600x400?text=Beach+Main',
    description: '해수욕장 개장에 맞춰 야외 코인 샤워기를 설치했습니다.',
    detailImages: []
  },
   {
    id: 5,
    category: '캠핑장/펜션',
    title: '양양 서핑 전용 펜션',
    date: '2025.06.12',
    location: '강원도 양양군',
    mainImage: 'https://via.placeholder.com/600x400?text=Pension+Main',
    description: '서퍼들을 위한 외부 간이 샤워 시설 및 내부 욕실 코인기 설치 사례입니다.',
    detailImages: []
  },
  {
    id: 6,
    category: '기숙사/고시원',
    title: '신림동 프리미엄 고시텔',
    date: '2025.05.20',
    location: '서울시 관악구',
    mainImage: 'https://via.placeholder.com/600x400?text=Gosiwon+Main',
    description: '1인 1실 샤워룸에 절수형 코인 타이머를 설치하여 수도 요금을 30% 절감한 사례입니다.',
    detailImages: []
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

// --- [탭 2: 설치현황 데이터 (이미지 기반)] ---
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
            class="case-card"
            @click="openModal(item)"
          >
            <div class="img-box">
              <img :src="item.mainImage" :alt="item.title" />
              <div class="overlay">
                <span class="view-icon">VIEW MORE</span>
              </div>
            </div>
            <div class="text-box">
              <div class="meta">
                <span class="category">{{ item.category }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p class="location"><span class="marker">📍</span> {{ item.location }}</p>
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
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>

          <div class="modal-body scrollable" v-if="selectedCase">
            <div class="modal-header">
              <span class="badge">{{ selectedCase.category }}</span>
              <h2>{{ selectedCase.title }}</h2>
              <div class="sub-info">
                <span>일자: {{ selectedCase.date }}</span>
                <span>장소: {{ selectedCase.location }}</span>
              </div>
            </div>
            <div class="divider"></div>
            <div class="modal-detail">
              <img :src="selectedCase.mainImage" class="main-img" alt="메인 전경" />
              <div class="desc-text">
                <p>{{ selectedCase.description }}</p>
              </div>
              <div class="detail-gallery" v-if="selectedCase.detailImages && selectedCase.detailImages.length > 0">
                <img v-for="(img, idx) in selectedCase.detailImages" :key="idx" :src="img" alt="상세 이미지" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- 기본 레이아웃 --- */
.install-view {
  width: 100%;
  padding-bottom: 5rem;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  background-color: #f4f7fa;
  padding: 3rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e1e4e8;
}

.page-header h1 {
  font-size: 2rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.breadcrumb { font-size: 0.9rem; color: #666; }

/* --- [NEW] 메인 탭 네비게이션 스타일 --- */
.main-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 50px;
  border-bottom: 2px solid #eee;
}

.tab-btn {
  flex: 1;
  max-width: 250px;
  padding: 15px 0;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: #888;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  position: relative;
  top: 2px; /* 라인 맞춤 */
}

.tab-btn:hover {
  color: #0056b3;
}

.tab-btn.active {
  color: #0056b3;
  font-weight: 700;
  border-bottom: 3px solid #0056b3;
}

/* 페이드인 애니메이션 */
.fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- TAB 1: 설치사례 스타일 --- */
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  justify-content: center;
}

.category-nav button {
  padding: 8px 18px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  color: #555;
}

.category-nav button:hover, .category-nav button.active {
  background-color: #0056b3;
  border-color: #0056b3;
  color: white;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.case-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.img-box {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.img-box img {
  width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;
}

.overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.view-icon { color: #fff; border: 1px solid #fff; padding: 6px 14px; border-radius: 4px; font-size: 0.8rem; }
.case-card:hover .img-box img { transform: scale(1.1); }
.case-card:hover .overlay { opacity: 1; }

.text-box { padding: 20px; }
.meta { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.8rem; }
.meta .category { color: #0056b3; font-weight: bold; }
.meta .date { color: #999; }
.text-box h3 { font-size: 1.1rem; color: #333; margin-bottom: 8px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.location { font-size: 0.85rem; color: #666; }


/* --- [NEW] TAB 2: 설치현황 스타일 (이미지 컨셉 반영) --- */
.status-list-container {
  max-width: 1000px;
  margin: 0 auto;
}

.status-header-text {
  text-align: center;
  margin-bottom: 50px;
}
.status-header-text h2 { color: #0056b3; font-size: 2rem; font-weight: 800; margin-bottom: 10px; }
.status-header-text p { color: #666; }

.status-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.status-card {
  display: flex;
  gap: 30px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border-left: 5px solid #0056b3; /* 왼쪽 파란색 포인트 */
  transition: transform 0.3s;
}

.status-card:hover {
  transform: translateX(10px); /* 호버 시 오른쪽으로 살짝 이동 */
}

/* 왼쪽 숫자 영역 */
.status-number-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.status-num {
  font-size: 3rem;
  font-weight: 900;
  color: #e0e0e0; /* 은은한 회색 */
  line-height: 1;
  position: relative;
  z-index: 1;
}

/* 숫자 뒤에 색상 입히기 (선택사항) */
.status-card:hover .status-num {
  color: #0056b3; /* 호버 시 파란색으로 변경 */
  transition: color 0.3s;
}

.status-deco-line {
  width: 2px;
  height: 100%;
  background: #f0f0f0;
  margin-top: 10px;
}

/* 오른쪽 텍스트 영역 */
.status-content-box {
  flex: 1;
}

.status-content-box h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 700;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  display: inline-block;
}

.status-content-box p {
  font-size: 1rem;
  color: #555;
  line-height: 1.8; /* 가독성을 위해 줄간격 넓게 */
  word-break: keep-all; /* 단어 단위 줄바꿈 */
}


/* --- 모달 스타일 (기존 유지) --- */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7); z-index: 2000;
  display: flex; justify-content: center; align-items: center; padding: 20px;
}
.modal-content {
  background: white; width: 100%; max-width: 800px; max-height: 90vh;
  border-radius: 12px; position: relative; display: flex; flex-direction: column;
}
.close-btn {
  position: absolute; top: 15px; right: 20px;
  background: none; border: none; font-size: 2rem; cursor: pointer; color: #333; z-index: 10;
}
.modal-body.scrollable { overflow-y: auto; padding: 40px; flex: 1; }
.modal-header { margin-bottom: 20px; text-align: center; }
.modal-header .badge { background: #f0f6ff; color: #0056b3; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; margin-bottom: 10px; display: inline-block; }
.modal-header h2 { font-size: 1.5rem; margin-bottom: 5px; }
.sub-info { font-size: 0.9rem; color: #888; display: flex; gap: 10px; justify-content: center; }
.divider { height: 1px; background: #eee; width: 100%; margin: 20px 0; }
.modal-detail img { width: 100%; border-radius: 8px; margin-bottom: 20px; }
.desc-text { background: #fafafa; padding: 20px; border-radius: 8px; line-height: 1.6; color: #444; }

/* 반응형 */
@media (max-width: 992px) {
  .case-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .case-grid { grid-template-columns: 1fr; }
  
  /* 모바일에서 설치현황 카드 스타일 변경 */
  .status-card { flex-direction: column; gap: 15px; padding: 20px; }
  .status-number-box { flex-direction: row; align-items: center; gap: 10px; width: 100%; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 5px; }
  .status-deco-line { display: none; }
  .status-num { font-size: 2rem; }
  .status-content-box h3 { margin-bottom: 10px; font-size: 1.2rem; border: none; padding: 0; }
}
</style>