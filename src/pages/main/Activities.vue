<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activities = [
  {
    title: '수출 진출 지원',
    description: '유럽에서 수출박람회를 열어 K마크 한국 중소기업의 <b>유럽시장 진출</b>을 도모합니다.',
    imgSrc: '/images/activity_01.png',
  },
  {
    title: '기업 권익 보호',
    description: '유럽 내 한국 기업들의 <b>권익을 보고하고 지원</b>하기 위한 다양한 활동을 전개합니다.',
    imgSrc: '/images/activity_02.png',
  },
  {
    title: '경제 협력 증진',
    description: '유럽 회원간의 <b>경제 협력 증진</b>을 위해 교류 활동을 추진하고 관련 협의를 진행합니다.',
    imgSrc: '/images/activity_03.png',
  },
  {
    title: '정보 소통 및<br>네트워크 구축',
    description: '<b>회원사 간의 정보 교환 및 네트워크를 구축</b>을 활성화하여 상호 협력을 도모합니다.',
    imgSrc: '/images/activity_04.png',
  },
  {
    title: '문화·경제 교류',
    description: '<b>유럽 및 한국 양국간의 경제 및 문화교류</b>에 이바지 합니다.',
    imgSrc: '/images/activity_05.png',
  },
];

// --- JavaScript 로직은 이전과 동일하게 유지 ---
const activeIndex = ref(0);
let intervalId = null;

const nextItem = () => {
  activeIndex.value = (activeIndex.value + 1) % activities.length;
};
const startAutoCycle = () => {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextItem, 4000);
};
const stopAutoCycle = () => {
  clearInterval(intervalId);
};
const handleMouseOver = (index) => {
  stopAutoCycle();
  activeIndex.value = index;
};
const handleMouseLeave = () => {
  startAutoCycle();
};

onMounted(() => {
  startAutoCycle();
});
onUnmounted(() => {
  stopAutoCycle();
});
</script>

<template>
  <div class="activity_section">
    <div class="section_title" data-aos="fade-up">
      <h4>Activities</h4>
      <h1>주요 활동</h1>
    </div>
    <div class="activity_container" data-aos="fade-up">
      <div class="activity_wrap">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="activity_item"
          :class="{ on: activeIndex === index }"
          @mouseover="handleMouseOver(index)"
          @mouseleave="handleMouseLeave"
        >
          <div class="text_area">
            <h2 v-html="activity.title"></h2>
            <p class="description" v-html="activity.description"></p>
          </div>
          <div class="img_wrap">
            <img :src="activity.imgSrc" :alt="activity.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.activity_section {
  margin: var(--section-margin) auto 0;

  .activity_container {
    padding: 0 var(--section-padding);
    box-sizing: border-box;

    .activity_wrap {
      display: flex;
      gap: 20px;
      // 각 아이템의 높이가 동일하게 유지되도록 부모에서 높이 제어
      height: 550px;

      .activity_item {
        transition: all 0.6s ease;
        cursor: pointer;
        border-top: 2px solid var(--line-color);
        width: calc((100% - 80px) / 5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        background-color: #fff;

        .text_area {
          text-align: center;
          padding: 40px 15px;

          h2 {
            font-size: 22px;
            font-weight: 600;
            line-height: 1.4;
            height: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.4s ease;
          }

          p {
            opacity: 0;
            max-height: 0;
            visibility: hidden;
            transition: max-height 0.6s ease, opacity 0.4s ease, visibility 0.6s ease;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.6;
            color: #fff;
            word-break: keep-all;
          }
        }

        .img_wrap {
          width: 100%;
          // flex-grow: 1을 사용하여 남은 공간을 모두 차지
          flex-grow: 1;
          overflow: hidden;
          border-radius: 10px;
          position: relative;

          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0;
            left: 0;
            transition: background 0.6s ease;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        // --- 활성화(.on) 시 효과 ---
        &.on {
          width: 42%;
          border-top: none;
          border-radius: 20px;
          overflow: hidden;
          // background: linear-gradient(30deg, #bc1012, #e94f50);

          .text_area {
            position: absolute;
            background: linear-gradient(30deg, #bc1012, #e94f50);
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            text-align: left;
            padding: 50px 30px;
            box-sizing: border-box;
            z-index: 10;

            h2 {
              justify-content: flex-start;
              font-size: 30px;
              color: #fff;
              margin-bottom: 20px;
            }
            p {
              opacity: 1;
              visibility: visible;
              max-height: 150px;
            }
          }

          .img_wrap {
            position: static;
            height: 100%;

            &::after {
              background: rgba(0,0,0,0);
            }
            img {
              position: absolute;
              top: 50%;
              height: 60%;
            }
          }
        }
      }
    }
  }
}


// --- 💻 미디어 쿼리 📱 ---
@media (max-width: 1024px) {
  .activity_section .activity_container .activity_wrap {
    flex-direction: column; // 세로로 쌓기
    gap: 15px;
    height: auto; // 자동 높이

    .activity_item,
    .activity_item.on {
      width: 100% !important; // 너비 강제 100%
      flex-direction: row; // 내부 아이템 가로 배치 (텍스트-이미지)
      height: 150px;
      border-radius: 15px;
      transition: height 0.4s ease, background-color 0.4s ease;
      background: #fff; // 비활성 시 배경색
      border-top: 2px solid var(--line-color);

      .text_area {
        position: static; // absolute 해제
        order: 1; // 텍스트를 왼쪽으로
        flex: 1;
        height: 100%;
        padding: 20px;
        text-align: left;
        background: transparent;

        h2 {
          font-size: 18px;
          height: auto;
          margin-bottom: 10px;
          justify-content: flex-start;
          color: #333;
        }

        p {
          font-size: 14px;
          color: #666; // 활성화 아닐 때 글자색
        }
      }

      .img_wrap {
        position: static; // absolute 해제
        order: 2; // 이미지를 오른쪽으로
        height: 100%;
        flex-basis: 150px; // 이미지 너비 고정
        border-radius: 0 10px 10px 0;
      }

      // 모바일 활성화 시
      &.on {
        height: 250px; // 높이 확장
        flex-direction: column; // 내부 아이템 다시 세로 배치
        background: linear-gradient(30deg, #bc1012, #e94f50);

        .text_area {
          order: 0;
          h2 {
            margin-bottom: 15px;
            font-size: 22px;
            color: #fff;
          }
          p {
            color: #fff;
          }
        }

        .img_wrap {
          height: auto;
          flex-grow: 1;
          border-radius: 0;
        }
      }
    }
  }
}
</style>
