<script setup>
import { reactive } from 'vue';

// 실제 사이트의 제품군을 기반으로 한 더미 데이터
const products = reactive([
  { id: 1, title: '코인 샤워기', desc: '동전을 사용하여 작동하는 경제적인 샤워기', image: 'https://via.placeholder.com/300x200?text=Coin+Shower' },
  { id: 2, title: '카드/코인 겸용 샤워기', desc: '신용카드와 동전 모두 사용 가능한 하이브리드 모델', image: 'https://via.placeholder.com/300x200?text=Card+Shower' },
  { id: 3, title: '일체형 샤워부스', desc: '설치가 간편한 올인원 샤워 부스 시스템', image: 'https://via.placeholder.com/300x200?text=Shower+Booth' },
  { id: 4, title: '산업용 폴 베이스', desc: '상하좌우 조절이 가능한 고강도 덮개', image: 'https://via.placeholder.com/300x200?text=Pole+Base' },
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
            <a href="#" class="more-link">상세보기 &rarr;</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  padding: 4rem 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
}

/* 그리드 레이아웃: 반응형의 핵심 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.card-content p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 20px;
  min-height: 48px; /* 줄맞춤용 */
}

.more-link {
  color: #0056b3;
  text-decoration: none;
  font-weight: bold;
}
</style>
