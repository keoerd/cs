<script setup>
import { reactive } from 'vue';

const products = reactive([
  { id: 1, title: '폴 샤워기(Large)', desc: '야외 설치에 적합한 자립형 4인용 폴 샤워기입니다.', image: 'images/main/main-product1.jpg' },
  { id: 2, title: '코인샤워기 슬림형 (Coin Type)', desc: '기본형으로 ₩500동전 사용', image: 'images/main/main-product2.jpg' },
  { id: 3, title: '코인샤워기 슬림형 (Card & Coin Type)', desc: '₩500동전 + 카드 결제', image: 'images/main/main-product3.jpg' },
  { id: 4, title: '코인샤워기 일체형 (Card Type)', desc: '제품 + 샤워헤드 포함', image: 'images/main/main-product4.jpg' },
]);
</script>

<template>
  <section class="products-section">
    <div class="container">

      <div class="section-header">
        <h2>주요 제품 소개</h2>

        <a href="/pdf/CS.pdf" download class="pdf-download-btn">
          <span class="icon">📥</span> 카탈로그 다운로드 (PDF)
        </a>
      </div>

      <div class="grid">
        <article v-for="product in products" :key="product.id" class="card">
          <div class="card-image">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="card-content">
            <h3>{{ product.title }}</h3>
            <p>{{ product.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  padding: 4rem 20px;
  background-color: #fff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* [추가] 섹션 헤더 스타일 (제목 + 버튼) */
.section-header {
  position: relative; /* 버튼의 절대 위치 기준점 */
  text-align: center; /* 제목 중앙 정렬 */
  margin-bottom: 3rem;
  padding: 0 10px;
}

h2 {
  font-size: 2rem;
  color: #333;
  font-weight: 700;
  margin: 0; /* 마진은 부모인 section-header에서 제어 */
  display: inline-block; /* 중앙 정렬을 위해 */
}

/* [추가] PDF 다운로드 버튼 스타일 */
.pdf-download-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%); /* 수직 중앙 정렬 */

  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
}

.pdf-download-btn:hover {
  background-color: #0056b3; /* 호버 시 파란색 */
  transform: translateY(-50%) scale(1.02);
}

.icon {
  font-size: 1.1em;
}

/* 그리드 레이아웃 설정 */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  border: 1px solid #eee;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: #f9f9f9;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h3 {
  margin-bottom: 10px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 46px;
}

/* 반응형 처리 */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  /* 모바일에서 헤더 레이아웃 변경 */
  .section-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  /* 모바일에서는 절대 위치 해제하고 제목 아래로 배치 */
  .pdf-download-btn {
    position: static;
    transform: none;
    width: auto;
  }

  .pdf-download-btn:hover {
    transform: scale(1.02);
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .products-section {
    padding: 3rem 15px;
  }
}
</style>
