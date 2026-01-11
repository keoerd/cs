<script setup>
import { ref, computed } from 'vue';

// 1. 카테고리 (설치 장소별 분류)
const categories = ['ALL', '캠핑장/펜션', '기숙사/고시원', '헬스장/사우나', '공공시설/기타'];
const activeCategory = ref('ALL');

// 2. 설치사례 더미 데이터
// detailImages 배열에 여러 장의 현장 사진을 넣으면 모달에서 스크롤로 볼 수 있습니다.
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
      'https://via.placeholder.com/800x600?text=Detail+2',
      'https://via.placeholder.com/800x600?text=Detail+3'
    ]
  },
  {
    id: 2,
    category: '기숙사/고시원',
    title: '천안 OO대학교 기숙사',
    date: '2025.09.20',
    location: '충청남도 천안시',
    mainImage: 'https://via.placeholder.com/600x400?text=Dormitory+Main',
    description: '노후된 샤워 시설 리모델링과 함께 카드 결제형 샤워 시스템을 도입했습니다. 학생들이 학생증(카드)으로 편리하게 이용할 수 있도록 커스터마이징 하였습니다.',
    detailImages: [
      'https://via.placeholder.com/800x600?text=Dorm+Inside',
      'https://via.placeholder.com/800x600?text=Card+System'
    ]
  },
  {
    id: 3,
    category: '헬스장/사우나',
    title: '강남 XX 피트니스 센터',
    date: '2025.08.05',
    location: '서울시 강남구',
    mainImage: 'https://via.placeholder.com/600x400?text=Fitness+Main',
    description: '회원 전용 프라이빗 샤워 부스를 설치했습니다. 고급스러운 인테리어에 맞춰 매립형 컨트롤러를 시공하여 깔끔한 마감이 돋보이는 현장입니다.',
    detailImages: [
      'https://via.placeholder.com/800x600?text=Fitness+Detail'
    ]
  },
  {
    id: 4,
    category: '공공시설/기타',
    title: '부산 해운대 공용 샤워장',
    date: '2025.07.01',
    location: '부산광역시 해운대구',
    mainImage: 'https://via.placeholder.com/600x400?text=Beach+Main',
    description: '해수욕장 개장에 맞춰 야외 코인 샤워기를 설치했습니다. 염분에 강한 특수 도장 처리가 된 폴 베이스와 방수형 코인기를 적용했습니다.',
    detailImages: [
      'https://via.placeholder.com/800x600?text=Beach+View',
      'https://via.placeholder.com/800x600?text=Machine+CloseUp'
    ]
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
    detailImages: [
       'https://via.placeholder.com/800x600?text=Detail+Shot'
    ]
  },
];

// 3. 필터링 로직
const filteredCases = computed(() => {
  if (activeCategory.value === 'ALL') return installCases;
  return installCases.filter(c => c.category === activeCategory.value);
});

// 4. 모달 로직
const selectedCase = ref(null);
const isModalOpen = ref(false);

const openModal = (item) => {
  selectedCase.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedCase.value = null;
  }, 300);
  document.body.style.overflow = '';
};
</script>

<template>
  <div class="install-view">

    <div class="page-header">
      <div class="container">
        <h1>설치사례</h1>
        <div class="breadcrumb">홈 > 설치사례 > {{ activeCategory }}</div>
      </div>
    </div>

    <section class="container case-section">

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
                <img
                  v-for="(img, idx) in selectedCase.detailImages"
                  :key="idx"
                  :src="img"
                  alt="상세 이미지"
                />
              </div>
            </div>

            <div class="modal-footer">
              <button class="action-btn" @click="closeModal">목록으로 닫기</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- 공통 레이아웃 (ProductView와 통일감 유지) --- */
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

/* 페이드인 애니메이션 */
.case-section {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 카테고리 탭 */
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  justify-content: center;
}

.category-nav button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 30px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;
  color: #555;
}

.category-nav button:hover, .category-nav button.active {
  background-color: #0056b3;
  border-color: #0056b3;
  color: white;
  font-weight: bold;
}

/* --- 설치사례 그리드 스타일 --- */
.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 제품보다 조금 더 크게 3열 */
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
  height: 240px; /* 제품보다 이미지를 더 강조 */
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 꽉 차게 */
  transition: transform 0.5s;
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.view-icon {
  color: #fff; border: 1px solid #fff; padding: 8px 16px; font-size: 0.9rem; border-radius: 4px; letter-spacing: 1px;
}

.case-card:hover .img-box img { transform: scale(1.1); }
.case-card:hover .overlay { opacity: 1; }

.text-box { padding: 25px 20px; }

.meta {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
}
.meta .category { font-size: 0.85rem; color: #0056b3; font-weight: 600; }
.meta .date { font-size: 0.8rem; color: #999; }

.text-box h3 {
  font-size: 1.15rem; color: #333; margin-bottom: 10px; font-weight: 700;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.location { font-size: 0.9rem; color: #666; }
.marker { margin-right: 3px; }

.no-result { text-align: center; padding: 50px 0; color: #999; }


/* --- 상세 모달 스타일 (스크롤형) --- */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex; justify-content: center; align-items: center; padding: 20px;
}

.modal-content {
  background: white;
  width: 100%; max-width: 800px; /* 블로그형이라 폭은 적당히 */
  max-height: 90vh; /* 화면 높이의 90% */
  border-radius: 12px;
  position: relative;
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  display: flex; flex-direction: column;
}

.close-btn {
  position: absolute; top: 15px; right: 20px;
  background: none; border: none; font-size: 2rem; cursor: pointer; color: #333; z-index: 10;
}

/* 스크롤 가능한 영역 */
.modal-body.scrollable {
  overflow-y: auto; /* 핵심: 세로 스크롤 */
  padding: 40px;
  flex: 1; /* 남은 공간 다 차지 */
}

/* 커스텀 스크롤바 */
.modal-body::-webkit-scrollbar { width: 8px; }
.modal-body::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
.modal-body::-webkit-scrollbar-track { background: #f1f1f1; }

.modal-header { margin-bottom: 20px; text-align: center; }
.modal-header .badge { display: inline-block; background: #f0f6ff; color: #0056b3; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; margin-bottom: 10px; }
.modal-header h2 { font-size: 1.8rem; color: #222; margin-bottom: 10px; }
.sub-info { font-size: 0.9rem; color: #888; display: flex; gap: 15px; justify-content: center; }

.divider { height: 1px; background: #eee; width: 100%; margin: 20px 0 30px 0; }

.modal-detail { display: flex; flex-direction: column; gap: 30px; }
.modal-detail img { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }

.desc-text {
  font-size: 1.05rem; line-height: 1.8; color: #444; background: #fafafa; padding: 20px; border-radius: 8px;
}

.detail-gallery { display: flex; flex-direction: column; gap: 20px; margin-top: 10px; }

.modal-footer { margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
.action-btn { background: #333; color: white; border: none; padding: 12px 40px; border-radius: 5px; cursor: pointer; font-size: 1rem; transition: background 0.3s; }
.action-btn:hover { background: #111; }

/* Vue Transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* 반응형 */
@media (max-width: 992px) {
  .case-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .case-grid { grid-template-columns: 1fr; gap: 20px; }
  .img-box { height: 200px; }
  .modal-body { padding: 25px; }
  .modal-header h2 { font-size: 1.5rem; }
}
</style>
