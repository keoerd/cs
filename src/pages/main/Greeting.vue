<script setup>
import { ref } from 'vue';

// 약력 데이터를 배열로 관리하여 쉽게 추가하거나 수정할 수 있습니다.
const history = ref([
  { year: '2023.', text: '민주평통 부의장 임명' },
  { year: '2017.', text: '창원시 투자유치자문위원 위촉' },
  { year: '2014.', text: '재외동포재단 세계한상대회 운영위원 위촉' },
]);
</script>

<template>
  <div class="greeting_section">
    <div class="greeting_container">
      <div class="img_area" data-aos="fade-right" data-aos-duration="1500">
        <img src="/images/greeting_img.png" alt="고광희 회장">
      </div>
      <div class="text_area">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          <b>존경하는 국내 중소기업 대표 및 경제인 여러분!</b><br>
          여러분의 성공적인 유럽 진출을 위해 최선을 다할 것을 약속드립니다.<br>
          함께 협력하고 도전하며 더 큰 미래를 만들어 나갑시다.
        </h2>
        <p class="name" data-aos="fade-up" data-aos-duration="1500">
          유럽 한인경제인단체 총연합회 회장<span>고광희</span>
        </p>
        <ul data-aos="fade-up" data-aos-duration="1500">
          <li v-for="(item, index) in history" :key="index">
            <span>{{ item.year }}</span>{{ item.text }}
          </li>
        </ul>
        <div class="round_btn" data-aos="fade-up" data-aos-duration="1500">
          <router-link to="/greeting">
            인사말 더보기
            <div class="arrow_wrap">
              <img src="/images/icon/main_arrow.png" alt="arrow icon">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.greeting_section {
  margin: var(--section-margin) auto 0;
  background: linear-gradient(145deg, #f6f2f0 50%, #fff, transparent);
  height: 520px;
  position: relative;
  display: flex; // 자식요소를 중앙정렬하기 위해 추가
  justify-content: center;

  &::after {
    background: url('/images/greeting_bg.png');
    background-repeat: no-repeat;
    content: '';
    display: block;
    width: 520px;
    height: 520px;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 170px;
    z-index: 0;
  }

  .greeting_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
    height: 100%;
    width: 100%;
    max-width: var(--max-width); // 최대 너비 제한
  }

  .img_area {
    position: relative;
    top: -74px;
    z-index: 1;
    flex-shrink: 0; // 이미지가 줄어들지 않도록
  }

  .text_area {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 60px 0;
    box-sizing: border-box;
    align-items: flex-start;

    h2 {
      font-size: 28px;
      font-weight: 400;
      line-height: 1.4;

      b {
        font-size: 30px;
        font-weight: 600;
      }
    }

    .name {
      font-size: 20px;
      color: #515151;

      span {
        font-size: 25px;
        font-weight: bold;
        color: #000;
        margin-left: 20px;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 18px;
        color: #515151;
        margin-bottom: 14px;

        &:last-child {
          margin-bottom: 0;
        }

        span {
          margin-right: 20px;
          font-weight: 500;
          color: #333;
        }
      }
    }

    .round_btn {
      background: var(--point-color);
      height: 60px;
      border-radius: 30px;
      transition: 0.3s;
      width: 260px;

      &:hover {
        background: var(--main-color);
      }

      > a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        padding-left: 40px;

        .arrow_wrap {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            height: 10px;
            width: auto;
          }
        }
      }
    }
  }
}

// --- 💻 미디어 쿼리 📱 ---
@media (max-width: 1200px) {
  .greeting_section {
    &::after {
      left: 50px; // 배경 이미지 위치 조정
    }
    .greeting_container {
      gap: 100px; // 이미지와 텍스트 간격 줄이기
      padding: 0 var(--section-padding);
    }
  }
}

@media (max-width: 1024px) {
  .greeting_section {
    height: auto; // 자동 높이
    padding: 80px var(--section-padding);

    &::after {
      width: 100%;
      left: 0;
      // display: none; // 모바일에서는 배경 이미지 숨김
    }

    .greeting_container {
      flex-direction: column; // 세로로 쌓기
      gap: 50px;
      text-align: center;
    }

    .img_area {
      top: 0; // top 위치 초기화
      width: 100%;
      // max-width: 400px;
      img {
        width: 100%;
        height: auto;
        max-width: 300px;
        margin: 0 auto;
      }
    }

    .text_area {
      align-items: center; // 전체 텍스트 중앙 정렬
      padding: 0;
      gap: 40px; // 각 요소 사이 간격 추가

      h2 {
        font-size: 1.5rem;
        b { font-size: 1.6rem; }
      }

      .name {
        font-size: 1.1rem;
        span { font-size: 1.3rem; }
      }

      ul li {
        font-size: 1rem;
        text-align: left;
      }
    }
  }
}
</style>
