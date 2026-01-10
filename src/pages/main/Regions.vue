<script setup>
import { ref } from 'vue';
import ICountUp from 'vue-countup-v3';

// markers 데이터는 PC에서만 사용되지만, 구조상 유지합니다.
const markers = ref([
  { id: 1, name: '아일랜드', className: 'marker1', posClass: 'lt_down' },
  { id: 2, name: '스웨덴', className: 'marker2', posClass: 'lt_down' },
  { id: 3, name: '노르웨이', className: 'marker3', posClass: 'lt_down' },
  { id: 4, name: '핀란드', className: 'marker4', posClass: 'lb_down' },
  { id: 5, name: '덴마크', className: 'marker5', posClass: 'lt_down' },
  { id: 6, name: '네덜란드', className: 'marker6', posClass: 'lt_down' },
  { id: 7, name: '벨기에', className: 'marker7', posClass: 'lt_down' },
  { id: 8, name: '폴란드', className: 'marker8', posClass: 'lt_down' },
  { id: 9, name: '체코', className: 'marker9', posClass: 'lt_down' },
  { id: 10, name: '독일', className: 'marker10', posClass: 'lb_down' },
  { id: 11, name: '프랑스', className: 'marker11', posClass: 'lt_down' },
  { id: 12, name: '스위스', className: 'marker12', posClass: 'lb_down' },
  { id: 13, name: '오스트리아', className: 'marker13', posClass: 'lb_down' },
  { id: 14, name: '루마니아', className: 'marker14', posClass: 'lt_down' },
  { id: 15, name: '불가리아', className: 'marker15', posClass: 'lt_down' },
  { id: 16, name: '튀르키예', className: 'marker16', posClass: 'lt_down' },
  { id: 17, name: '그리스', className: 'marker17', posClass: 'lt_down' },
  { id: 18, name: '이탈리아', className: 'marker18', posClass: 'lt_down' },
  { id: 19, name: '포르투갈', className: 'marker19', posClass: 'lt_down' },
  { id: 20, name: '스페인', className: 'marker20', posClass: 'rt_down', isRed: true },
]);

const stats = ref({
  countries: 27,
  years: new Date().getFullYear() - 2004,
  committees: 9,
  members: 700,
});
</script>

<template>
  <div class="regions_section">
    <div class="mapBox">
      <img src="https://ecudemo361267.cafe24.com/web/upload/kment/images/map.png" alt="Europe Map" />
      <div class="marker_group">
        <div
          v-for="marker in markers"
          :key="marker.id"
          class="marker"
          :class="[marker.className]"
        >
          <span class="nation_name" :class="[marker.posClass, { red: marker.isRed }]">
            {{ marker.name }}
          </span>
          <span class="point" :class="{ red: marker.isRed }"><span></span></span>
        </div>
      </div>
    </div>

    <div class="left_area">
      <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
        <h4>Regions</h4>
        <h1>회원사 지역</h1>
      </div>
      <div class="desc_wrap" data-aos="fade-up" data-aos-duration="1500">
        <p>
          <b>유럽한인경제인 총연합회</b>
          (The Federation of Korea Business Association of Europe)는<br />
          유럽 27개국가에서 경제활동을 하는 한인 경제인들이 회원으로 구성되어,<br />
          2004년 &lt;외교통상부&gt;와 &lt;EU상공부&gt; 등록으로 창립 된 경제 단체입니다.
        </p>
        <ul>
          <li>
            <p class="num">
              <ICountUp :end-val="stats.countries" />
            </p>
            <span>개</span><p>국가</p>
          </li>
          <li>
            <p class="num">
              <ICountUp :end-val="stats.years" />
            </p>
            <span>년</span><p>역사</p>
          </li>
          <li>
            <p class="num">
              <ICountUp :end-val="stats.committees" />
            </p>
            <span>개</span><p>자문위원회</p>
          </li>
          <li>
            <p class="num">
              <ICountUp :end-val="stats.members" />
            </p>
            <span>명의</span><p>자문 위원 <span>(한인 경제인)</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.regions_section {
  position: relative;

  .mapBox {
    position: relative;
    min-width: 1500px;

    img {
      width: 100%;
      vertical-align: middle;
    }

    .marker_group {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;

      .marker {
        position: absolute;
      }

      .marker1 { top: 52%; left: 38px; }
      .marker2 { top: 24%; right: 46%; }
      .marker3 { top: 29%; right: 57%; }
      .marker4 { top: 26%; right: 26%; }
      .marker5 { top: 46%; left: 41%; }
      .marker6 { top: 54%; left: 34%; }
      .marker7 { top: 59%; left: 30%; }
      .marker8 { top: 54%; left: 61%; }
      .marker9 { top: 59%; left: 56%; }
      .marker10 { top: 59%; left: 43%; }
      .marker11 { top: 68%; left: 26%; }
      .marker12 { top: 68%; left: 36%; }
      .marker13 { top: 66%; left: 54%; }
      .marker14 { top: 71%; right: 23%; }
      .marker15 { top: 76%; right: 27%; }
      .marker16 { top: 84%; right: 13%; }
      .marker17 { top: 87%; right: 27%; }
      .marker18 { top: 81%; right: 46%; }
      .marker19 { top: 83%; left: 50px; }
      .marker20 { top: 83%; left: 14%; }

      .marker .nation_name {
        display: block;
        width: 110px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        background: rgba(255,255,255,0.8);
        border-radius: 20px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ff6c00;
        position: absolute;
        opacity: 1;
        pointer-events: none;

        &.red {
          border-color: #b10f11;
          background: #df2324;
          color: #fff;
          &::after, &::before {
            background: #df2324;
          }
        }

        &.lt_down { right: 27px; top: -58px; }
        &.lb_down {
          right: 27px;
          top: 28px;
          &::before { transform: translateY(-50%) rotate(110deg); top: 0; }
        }
        &.rt_down {
          top: -58px;
          left: 27px;
          &::after { left: -10px; }
          &::before { bottom: 0; left: -36px; transform: translateY(-50%) rotate(110deg); }
        }

        &::after, &::before {
            content: '';
            display: block;
            height: 1px;
            background: #ff6c00;
            position: absolute;
        }
        &::after { width: 10px; right: -10px; top: 50%; transform: translateY(-50%); }
        &::before { width: 40px; right: -36px; bottom: 0; transform: translateY(-50%) rotate(-110deg); }
      }

      .marker .point {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 10px;
        background: #ff6c00;
        border: 2px solid #fff;
        position: relative;
        box-sizing: content-box;

        &.red { background: #df2324; }

        > span {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          opacity: 0.2;
          background: #ff8933;
          position: absolute;
          top: -6px;
          left: -6px;
          animation: dotpulse 1.5s ease-out infinite;
        }
        &.red > span { background: #df2324; }
      }
    }
  }

  .left_area {
    position: absolute;
    left: 12%;
    top: 35%;

    .section_title {
      text-align: left;
      margin-bottom: 50px;
      // h4 { font-size: 1.5rem; color: var(--main-color); }
      // h1 { font-size: 2.5rem; font-weight: 600; }
    }

    .desc_wrap {
      > p {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 60px;
        line-height: 1.8;
        > b { display: block; }
      }

      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;

        &::after {
          content: '';
          display: block;
          width: 50px;
          height: 56px;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        li {
          &:nth-child(1) { border-bottom: 1px dashed #cfcfcf; border-right: 1px dashed #cfcfcf; padding-left: 20px; padding-bottom: 30px; }
          &:nth-child(2) { padding-left: 40px; padding-bottom: 30px; }
          &:nth-child(3) { padding-left: 20px; padding-top: 30px; }
          &:nth-child(4) { border-top: 1px dashed #cfcfcf; border-left: 1px dashed #cfcfcf; padding-left: 40px; padding-top: 30px; }

          .num {
            font-size: 48px;
            font-weight: 700;
            color: var(--main-color);
            margin-top: 0;
            font-family: 'Pretendard', sans-serif;
            display: inline-block;
          }

          > span {
            font-size: 20px;
            font-weight: 500;
            margin-left: 10px;
            display: inline-block;
            color: var(--main-color);
            vertical-align: bottom;
            line-height: 3;
          }

          p {
            color: #3a3a3a;
            font-size: 20px;
            font-weight: 400;
            margin-top: 10px;
            span { font-size: 16px; }
          }
        }
      }
    }
  }
}

@keyframes dotpulse {
  0% { transform: scale(0.6); }
  50% { transform: scale(1); }
  100% { transform: scale(0.6); }
}

// --- 💻 미디어 쿼리 📱 ---
@media (max-width: 1024px) {
  .regions_section {
    position: static; // position 해제
    display: block;   // block으로 변경
    padding: 0 var(--section-padding);
    margin-top: 100px;

    .mapBox {
      display: none; // 💡 지도 부분을 완전히 숨김
    }

    .left_area {
      position: static; // position 해제
      width: 100%;
      text-align: center;
      top: auto;
      left: auto;

      .desc_wrap ul {
        grid-template-columns: repeat(2, 1fr); // 모바일에서도 2열 유지 (혹은 1fr)

        &::after {
          display: none; // 중앙 흰색 박스 제거
        }
        li {
          border: none !important;
          padding: 15px 0 !important;

          // 모바일 가독성을 위해 항목마다 하단 점선 추가
          &:nth-child(1), &:nth-child(2) {
             border-bottom: 1px dashed #cfcfcf !important;
          }
        }
      }
    }
  }
}
</style>
