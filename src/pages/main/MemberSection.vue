<template>
  <div class="member_section">
    <div class="section_title" data-aos="fade-up">
      <h4>Member</h4>
      <h1>회원</h1>
    </div>
    <div class="list_container flex_container">
      <div
        v-for="(member, index) in members"
        :key="index"
        class="list_item flip-container" data-aos="fade-up"
        :data-aos-delay="300 * (index + 1)"
      >
        <div class="flip_inner flipper"> <div class="item_front front"> <img :src="member.frontImg" :alt="member.description" />
          </div>
          <div class="item_back back"> <img v-if="member.backImg" :src="member.backImg" :alt="member.description" class="background_img" />
            <div class="text_area" v-html="member.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const members = [
  {
    frontImg: '/images/member01.png',
    backImg: '/images/member01-hover.png', // hover 시 뒷면 배경 이미지
    description:
      '제조, 무역, 금융, 물류 등<br> 다양한 산업 분야의 <br><b>유럽 진출 한국 기업 대표</b>',
  },
  {
    frontImg: '/images/member02.png',
    backImg: '/images/member02-hover.png',
    description: '유럽 각국 <br>경제인협의회를 <br>아우르는 <b>연합 조직</b>',
  },
  {
    frontImg: '/images/member03.png',
    backImg: '/images/member03-hover.png',
    description:
      '유럽 내 상주 중인 <br><b>한인 경제인</b><br><span>(근로자, 공무원, 자영업자, 기업인 등)</span>',
  },
];
</script>

<style lang="scss" scoped>
.member_section {
  margin: var(--section-margin) auto 0;
  .section_title {
    text-align: center;
    margin-bottom: 60px;
    h4 {
      font-family: "ELAND_Choice_M", sans-serif;
      color: var(--main-color);
      font-size: 1.57vw;
      margin-bottom: 10px;
    }
    h1 {
      font-weight: 600;
      font-size: 2.61vw;
    }
  }
  .list_container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 var(--section-padding);
    box-sizing: border-box;
    justify-content: center;
    gap: 40px;

    .list_item {
      flex: 1 1 30%;
      // max-width: 380px;
      // min-width: 290px; // PC에서 최소 너비
      aspect-ratio: 380 / 380; // PC에서의 비율
      perspective: 1000px;
      cursor: pointer;
      border-radius: 15px;
      overflow: visible;

      .flipper {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      &:hover .flipper {
        transform: rotateY(180deg);
      }

      .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 15px;
        overflow: hidden;
      }

      .front {
        z-index: 2;
      }

      .back {
        transform: rotateY(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        color: #fff;

        .background_img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          border-radius: inherit;
        }

        .text_area {
          position: relative;
          z-index: 2;
          font-size: 1.2rem;
          line-height: 1.6;

          b {
            font-weight: bold;
            color: var(--main-color);
          }
          span {
            font-size: 0.9em;
            display: block;
            margin-top: 5px;
          }
        }
      }

      .item_front img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    }
  }
}

/* --- 💻 미디어 쿼리 시작 📱 --- */

// 태블릿 사이즈 (예: 1024px 이하)
@media (max-width: 1024px) {
  .member_section .list_container .list_item {
    flex-basis: 45%; // 한 줄에 2개씩 보이도록 기본 너비 조정
    max-width: 400px; // 최대 너비 살짝 조정
  }
}


// 모바일 사이즈 (예: 768px 이하)
@media (max-width: 768px) {
  .member_section {
    .section_title {
      // 모바일에서는 vw 단위가 너무 커질 수 있으므로 고정값으로 변경
      h4 {
        font-size: 1.2rem;
      }
      h1 {
        font-size: 2rem;
      }
    }
    .list_container {
      gap: 30px; // 모바일에서는 아이템 간격 살짝 줄임

      .list_item {
        flex-basis: 80%; // 한 줄에 1개씩 보이도록 기본 너비를 크게 설정
        max-width: 450px; // 모바일에서는 더 넓게 보이도록 최대 너비 조정
        min-width: auto; // 모바일에서는 최소 너비 제한 해제
        aspect-ratio: 380 / 410; // 비율은 그대로 유지
      }
    }
  }
}
</style>
