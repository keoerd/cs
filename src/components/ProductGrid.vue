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
      <h2>주요 제품 소개</h2>
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

/* 컨테이너 너비 */
.container {
  max-width: 1400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
  font-weight: 700;
}

/* [핵심 수정] 그리드 레이아웃 설정 */
.grid {
  display: grid;
  /* repeat(4, 1fr):
     화면 크기와 상관없이 무조건 가로를 4등분(1fr x 4)합니다.
     데이터가 8개이므로 정확히 4개씩 2줄이 생성됩니다.
  */
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

/* 이미지 비율 가로2 : 세로3 설정 */
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

.more-link {
  display: inline-block;
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background 0.3s;
}

.more-link:hover {
  background-color: #f0f8ff;
}

/* 반응형 처리 */
/* 태블릿 이하 (1024px)에서는 4개가 너무 좁을 수 있으므로 3개나 2개로 조정하는 것이 좋지만,
   일단 '모바일' 전까지는 4개를 유지하고 싶다면 아래 미디어 쿼리만 두시면 됩니다. */

@media (max-width: 1024px) {
  /* 화면이 좀 작아지면(태블릿) 4개는 너무 좁으니 3개 혹은 2개로 변경 */
  /* 필요 없다면 이 부분 지우셔도 됩니다. */
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  /* 모바일에서는 2열로 유지 (너무 좁으면 1열로 변경: repeat(1, 1fr)) */
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .products-section {
    padding: 3rem 15px;
  }
}
</style>
