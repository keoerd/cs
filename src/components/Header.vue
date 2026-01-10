<template>
  <header id="header">
    <div class="header-inner">
      <a class="header-logo" href="/"><img src="/images/icon/logo.png" alt="Logo" /></a>
      <ul class="header-menu-list">
        <li class="header-menu-item" v-for="link in navLinks" :key="link.text">
          <a v-if="link.isExternal" :href="link.path" target="_blank">{{ translate(link.text) }}</a>
          <router-link v-else :to="{ path: link.path, hash: link.hash }">{{ translate(link.text) }}</router-link>
        </li>
      </ul>
      <LanguageSwitcher class="language-switcher" />
      <button class="hamburger-button" :class="{ 'is-active': mobileMenuOpen }" @click="onHbClick">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="mobile-gnb" :class="{on: mobileMenuOpen}">
      <div class="mobile-gnb-top">
        <button>문의하기</button>
        <LanguageSwitcher />
      </div>
      <ul class="menu-gnb-list">
        <li class="menu-gnb-item" v-for="link in navLinks" :key="link.text">
          <a v-if="link.isExternal" :href="link.path" target="_blank" @click="onHbClick">{{ translate(link.text) }}</a>
          <router-link v-else :to="{ path: link.path, hash: link.hash }" @click="onHbClick">{{ translate(link.text) }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

const mobileMenuOpen = ref(false);
// 네비게이션 링크 데이터를 배열로 관리하면 유지보수가 편리합니다.
const navLinks = [
  { text: 'header.menu.aboutUs', path: '/', hash: '#scroll1' },
  { text: '2026 K-EXPO', path: 'https://expo-homepage.pages.dev/', isExternal: true }, // https:// 추가
  { text: 'header.menu.mediaCenter', path: '/mediaCenter' }, // 내부 경로는 '/'로 시작
  { text: 'header.menu.notices', path: '/notice' },
]

function onHbClick() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: height 0.5s;
  background: #fff;

  .header-inner {
    width: 100%;
    height: var(--header-height-pc);
    padding: 0 120px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;

    .header-logo {
      // width: 200px;
      // margin-left: 40px;
      display: flex;
      width: 100%;
      height: auto;
      max-width: 200px;
    }

    .header-menu-list {
      display: flex;
      gap: 50px;
      list-style: none;
      margin: 0 auto;

      .header-menu-item {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        position: relative;
      }
    }
  }

  /* =========================================== */
  /* 햄버거 버튼 스타일을 .header-inner 밖으로 이동 */
  /* =========================================== */
  $hamburger-size: 40px;
  $bar-width: 25px;
  $bar-height: 20px;
  $bar-thickness: 2px;
  $bar-spacing: 8px;
  $bar-color: #333;
  $transition-duration: 0.3s;
  $timing-function: ease-in-out;

  .hamburger-button {
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    // width: $hamburger-size;
    // height: $hamburger-size;
    position: relative;
    z-index: 1000;
    padding: 0;

    .hamburger-box {
      width: $bar-width;
      height: $bar-height;
      display: block;
      position: relative;
    }

    .hamburger-inner {
      &,
      &::before,
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: $bar-thickness;
        background-color: $bar-color;
        border-radius: 2px;
        position: absolute;
        left: 0;
        // background-color를 transition에 추가
        transition: transform $transition-duration $timing-function,
                    opacity $transition-duration $timing-function,
                    background-color $transition-duration $timing-function;
      }

      top: 50%;
      transform: translateY(-50%);
      &::before { top: -$bar-spacing; }
      &::after { top: $bar-spacing; }
    }

    // 핵심 수정 부분
    &.is-active {
      .hamburger-inner {
        // 중간 줄의 배경색만 투명하게 만들어 숨김 처리
        background-color: transparent;

        // ::before와 ::after는 영향을 받지 않고 회전
        &::before {
          top: 0;
          transform: rotate(45deg);
        }
        &::after {
          top: 0;
          transform: rotate(-45deg);
        }
      }
    }
  }

  .mobile-gnb {
    background-color: #333;
    border-bottom: 1px solid #626262;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &.on {
      max-height: 999px;
      opacity: 1;
    }
    .mobile-gnb-top {
      display: flex;
      background-color: #fff;
       & > * {
        flex: 1;
        text-align: center;
        &:not(:last-child) {
          border-right: 1px solid #ccc;
        }
       }
    }
    .menu-gnb-list {
      display: flex;
      flex-direction: column;
      padding: 8px 0;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      text-align: right;

      .menu-gnb-item {
        padding: 10px 25px;
        &:not(:last-child) {
          border-bottom: 1px solid #626262;
        }
      }
    }
  }
}

// 모바일
// @media (max-width: 767px) {
@media (max-width: 1200px) {
  #header {
    .header-inner {
      height: var(--header-height-mobile) !important;
      // 로고와 햄버거 버튼의 위치를 정렬합니다.
      justify-content: space-between;
      padding: 0 20px;
      .language-switcher {
        display: none;
      }
    }
    .header-logo {
      margin: 0 !important; // auto 대신 0으로 변경
      height: 38px !important;
    }
    .header-menu-list {
      display: none !important;
    }
    // 올바른 클래스 이름으로 수정
    .hamburger-button {
      display: flex !important;
    }
  }
}
</style>
