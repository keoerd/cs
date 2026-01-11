<script setup>
import { reactive } from 'vue';

const products = reactive([
  { id: 1, title: '코인 샤워기', desc: '동전을 사용하여 작동하는 경제적인 샤워기', image: 'images/main/1.png' },
  { id: 2, title: '카드/코인 겸용', desc: '신용카드와 동전 모두 사용 가능한 하이브리드', image: 'images/main/1.png' },
  { id: 3, title: '일체형 샤워부스', desc: '설치가 간편한 올인원 샤워 부스 시스템', image: 'images/main/1.png' },
  { id: 4, title: '산업용 폴 베이스', desc: '상하좌우 조절이 가능한 고강도 덮개', image: 'images/main/1.png' },
  { id: 5, title: '이동식 간이 화장실', desc: '야외 행사 및 공사 현장에 적합한 이동식 모델', image: 'images/main/1.png' },
  { id: 6, title: '절수형 타이머', desc: '물 사용량을 획기적으로 줄여주는 제어 장치', image: 'images/main/1.png' },
  { id: 7, title: '대용량 온수기', desc: '많은 인원이 사용해도 거뜬한 고효율 온수기', image: 'images/main/1.png' },
  { id: 8, title: '샤워장 관리 시스템', desc: 'PC와 모바일로 매출 및 상태를 관리하는 IoT', image: 'images/main/1.png' },
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
  margin-bottom: 20px;
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
