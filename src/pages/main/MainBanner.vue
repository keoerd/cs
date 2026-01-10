<template>
  <div id="main-banner">
    <div class="text-group">
      <h1>2026<br> THE FEDERATION OF KOREA BUSINESS<br> ASSOCIATION OF EUROPE</h1>
      <h3>2026 {{ translate('main.mainBanner.text1') }}</h3>
      <p><b>2026.04.01 - 2026.04.02</b>PALACIO MUNICIPAL IFEMA MADRID</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
#main-banner {
  position: relative;
  height: 100vh; /* 예시 높이 */
  background-image: url('/images/main_banner_background.png'); /* public 폴더의 이미지 경로 */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  .text-group {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    h1 {
      font-family: "Special Gothic Condensed One", sans-serif;
      font-size: 90px;
      margin-bottom: 20px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0;
    }
    h3 {
      font-size: 30px;
      margin-bottom: 40px;
      font-weight: 400;
    }
    p {
      font-size: 25px;
       b {
        margin-right: 40px;
        position: relative;
        &::after {
          width: 2px;
          height: 20px;
          background: #fff;
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          content: '';
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .text-group {
    h1 {
      font-size: 7.5vw!important;
      margin-bottom: 5vh!important;
      line-height: 4vh!important;
    }
    h3 {
      font-size: 5vw!important;
      margin-bottom: 7vh!important;
    }
    p {
      font-size: 3vw!important;
      margin-bottom: 50vh!important;
       b {
        margin-right: 10px!important;
        position: relative;
        &::after {
          height: 12px!important;
          right: -6px!important;
          top: 50%;
          transform: translateY(-50%);
          content: '';
        }
      }
    }
  }
}
</style>
