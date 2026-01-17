<script setup>
import { ref, computed } from 'vue';

// 1. 카테고리 정의
const categories = ['ALL', '코인/카드 샤워기', '폴타입 샤워기'];
const activeCategory = ref('ALL');

// 2. 제품 데이터 (이미지 경로 유지)
const products = [
  {
    id: 1,
    category: '코인/카드 샤워기',
    name: '코인샤워기 슬림형 (Coin Type)',
    image: 'images/product/코인샤워기 슬림형 (Card Type).jpg',
    summary: '코인샤워기 Basic Type',
    description: '코인샤워기 Basic Type으로 ₩500동전으로만 결제 가능한 제품입니다.',
    specs: [
      { label: '규격', value: '230x95x900H' },
      { label: '소재', value: 'STS304 1.2t / 정전분체도장' },
      { label: '전기', value: 'AC 220V / 60Hz / 32W' },
    ]
  },
  {
    id: 2,
    category: '코인/카드 샤워기',
    name: '코인샤워기 슬림형 (Card & Coin Type)',
    image: 'images/product/코인샤워기 슬림형 (Coin Type).jpg',
    summary: 'RF카드 시스템과 코인을 결합한 모델',
    description: 'RF카드 시스템과 코인을 결합한 모델입니다. 삼성페이, 신용카드, ₩500동전 등 간편결제 기능을 지원하여 편리한 결제가 가능합니다.',
    specs: [
      { label: '규격', value: '210x90x590H' },
      { label: '소재', value: 'STS304 1.2t+정전분체도장' },
      { label: '전기', value: 'AC 220V / 60Hz / 32W' },
    ]
  },
  {
    id: 3,
    category: '코인/카드 샤워기',
    name: '코인샤워기 일체형 (Card Type)',
    image: 'images/product/코인샤워기 일체형 (Card Type).jpg',
    summary: '제품 + 샤워헤드 포함 일체형 모델',
    description: '코인샤워기 자체에 샤워헤드가 포함된 제품입니다. RF카드 시스템과 코인을 결합한 모델입니다. 삼성페이, 신용카드, ₩500동전 등 간편결제 기능을 지원하여 편리한 결제가 가능합니다.',
    specs: [
      { label: '규격', value: '250x100x900H' },
      { label: '소재', value: 'STS304 1.2t+정전분체도장' },
      { label: '전기', value: 'AC 220V / 60Hz / 62W' },
    ]
  },
  {
    id: 4,
    category: '폴타입 샤워기',
    name: '폴 샤워기(Standard)',
    image: 'images/product/2인용폴.jpg',
    summary: '야외 설치에 적합한 자립형 폴 2인용 샤워기',
    description: '야외 설치에 적합한 자립형 폴 2인용 샤워기입니다. 해수욕장·야영장 등 외부 환경에 적합합니다.',
    specs: [
      { label: '규격', value: '190x190x2420H' },
      { label: '소재', value: 'STS304 2.0t+정전분체도장' },
      { label: '전기', value: '1Ø AC 220V / 60Hz / 64W' },
    ]
  },
  {
    id: 5,
    category: '폴타입 샤워기',
    name: '폴 샤워기(Large)',
    image: 'images/product/4인용폴.jpg',
    summary: '야외 설치에 적합한 자립형 폴 4인용 샤워기',
    description: '야외 설치에 적합한 자립형 폴 4인용 샤워기입니다. 해수욕장·야영장 등 외부 환경에 적합합니다.',
    specs: [
      { label: '규격', value: '250x250x2980H' },
      { label: '소재', value: 'STS304 2.5t+정전분체도장' },
      { label: '전기', value: '1Ø AC 220V / 60Hz / 128W' },
    ]
  },
];

// 3. 필터링 로직
const filteredProducts = computed(() => {
  if (activeCategory.value === 'ALL') return products;
  return products.filter(p => p.category === activeCategory.value);
});

// 4. 모달(상세보기) 관련 로직
const selectedProduct = ref(null);
const isModalOpen = ref(false);

const openModal = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedProduct.value = null;
  }, 300);
  document.body.style.overflow = '';
};
</script>

<template>
  <div class="product-view">

    <div class="page-header">
      <div class="container">
        <h1>제품소개</h1>
        <div class="breadcrumb">홈 > 제품소개 > {{ activeCategory }}</div>
      </div>
    </div>

    <section class="container product-section">

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

      <div class="product-grid">
        <article
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          @click="openModal(product)"
        >
          <div class="img-box">
            <img :src="product.image" :alt="product.name" />
            <div class="overlay">
              <span>상세보기 +</span>
            </div>
          </div>
          <div class="text-box">
            <span class="category-tag">{{ product.category }}</span>
            <h3>{{ product.name }}</h3>
            <p>{{ product.summary }}</p>
          </div>
        </article>
      </div>

      <div v-if="filteredProducts.length === 0" class="no-result">
        <p>해당 카테고리에 등록된 제품이 없습니다.</p>
      </div>
    </section>

    <Transition name="modal">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>

          <div class="modal-body" v-if="selectedProduct">
            <div class="modal-img">
              <img :src="selectedProduct.image" :alt="selectedProduct.name" />
            </div>
            <div class="modal-info">
              <span class="badge">{{ selectedProduct.category }}</span>
              <h2>{{ selectedProduct.name }}</h2>
              <p class="desc">{{ selectedProduct.description }}</p>

              <div class="specs-box" v-if="selectedProduct.specs">
                <h4>제품 사양</h4>
                <table>
                  <tbody>
                    <tr v-for="(spec, idx) in selectedProduct.specs" :key="idx">
                      <th>{{ spec.label }}</th>
                      <td>{{ spec.value }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* 공통 레이아웃 */
.product-view {
  width: 100%;
  padding-bottom: 5rem;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 헤더 스타일 */
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

.breadcrumb {
  font-size: 0.9rem;
  color: #666;
}

/* 페이드인 애니메이션 수정 (JS 의존성 제거, CSS 키프레임 사용) */
.product-section {
  /* opacity: 0; 제거 -> 기본적으로 보이게 설정 */
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.category-nav button:hover {
  border-color: #0056b3;
  color: #0056b3;
}

.category-nav button.active {
  background-color: #0056b3;
  border-color: #0056b3;
  color: white;
  font-weight: bold;
}

/* 제품 그리드 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* PC: 4열 */
  gap: 30px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  background: white;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.img-box {
  position: relative;
  width: 100%;
  height: 200px;
  background: #f9f9f9;
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  transition: transform 0.3s;
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 86, 179, 0.7);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}
.overlay span { color: white; font-weight: bold; border: 1px solid white; padding: 5px 15px; border-radius: 20px; }

.product-card:hover .img-box img { transform: scale(1.05); }
.product-card:hover .overlay { opacity: 1; }

.text-box {
  padding: 20px;
}

.category-tag {
  display: inline-block;
  font-size: 0.8rem;
  color: #0056b3;
  margin-bottom: 5px;
  font-weight: 500;
}

.text-box h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 700;
}

.text-box p {
  font-size: 0.9rem;
  color: #888;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.no-result {
  text-align: center;
  padding: 50px 0;
  color: #999;
}

/* --- 모달 스타일 --- */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: 10px;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.close-btn {
  position: absolute;
  top: 15px; right: 20px;
  background: none; border: none;
  font-size: 2rem; cursor: pointer; color: #333;
  z-index: 10;
}

.modal-body {
  display: flex;
  padding: 40px;
  gap: 40px;
}

.modal-img {
  flex: 1;
  background: #f9f9f9;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  min-height: 300px;
}

.modal-img img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.modal-info {
  flex: 1.2;
}

.modal-info .badge {
  background: #f0f6ff;
  color: #0056b3;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
}

.modal-info h2 {
  font-size: 1.8rem;
  margin: 15px 0;
  color: #222;
}

.modal-info .desc {
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
  font-size: 1rem;
}

/* 스펙 테이블 */
.specs-box {
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.specs-box h4 {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
}

.specs-box table {
  width: 100%;
  border-collapse: collapse;
}

.specs-box th, .specs-box td {
  padding: 8px 0;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
}

.specs-box th { width: 30%; color: #666; font-weight: normal; }
.specs-box td { color: #333; font-weight: 500; }
.specs-box tr:last-child th, .specs-box tr:last-child td { border-bottom: none; }

.inquiry-btn {
  display: inline-block;
  background: #0056b3;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}
.inquiry-btn:hover { background: #004494; }

/* Vue Transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* 반응형 (태블릿/모바일) */
@media (max-width: 992px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); }
  .modal-body { flex-direction: column; gap: 20px; padding: 20px; }
  .modal-img { min-height: 250px; }
}

@media (max-width: 768px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .page-header { padding: 2rem 0; margin-bottom: 2rem; }
  .category-nav { gap: 8px; }
  .category-nav button { padding: 8px 16px; font-size: 0.9rem; }
  .modal-info h2 { font-size: 1.5rem; }
}

@media (max-width: 480px) {
  .product-grid { grid-template-columns: 1fr; }
  .text-box h3 { font-size: 1.2rem; }
}
</style>
