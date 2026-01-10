<template>
  <div class="intro_section" id="scroll1">
    <h1 data-aos="fade-up">the Federation of Korea Business Association of Europe</h1>
    <span class="bar" data-aos-="fade-up"></span>
    <p data-aos="fade-up">
      {{ translate('main.introduction.text1') }}
    </p>
  </div>
</template>
<script setup>
// 이 컴포넌트는 특별한 스크립트 로직이 필요하지 않습니다.
</script>
<style lang="scss" scoped>
.intro_section {
  padding: 180px 12% 0;
  text-align: center;
  background-color: #fff;
  text-transform: uppercase;

  h1 {
    color: #cc0e0f;
    font-size: 50px;
    font-family: "Special Gothic Condensed One", sans-serif;
    font-weight: bold;
    letter-spacing: 0;
  }

  .bar {
    display: block;
    background-color: #dc3839;
    height: 1px;
    width: 80px;
    margin: 60px auto;
  }

  p {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.3;
    word-break: keep-all;
  }
}
@media (max-width: 1024px) {
  .intro_section {
    padding: 140px 10px!important;
    h1 {
      font-size: 8vw!important;
      letter-spacing: 0;
    }

    .bar {
      margin: 50px auto!important
    }
    p {
      font-size: 5vw!important;
      word-break: break-all!important;
      text-align: left!important;
      padding: 0 15px!important;
      line-height: 1.6!important;
    }
  }
}
</style>
