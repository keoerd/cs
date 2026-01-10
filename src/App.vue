<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader />

    <main>
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* 전역 스타일 */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Noto Sans KR', sans-serif; color: #333; background-color: #f9f9f9; }
a { text-decoration: none; color: inherit; }
.app-container { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
</style>
