<template>
  <div class="language-switcher">
    <button class="switcher-button" @click="toggleDropdown">
      <img :src="selectedLanguage.flag" :alt="selectedLanguage.name" class="flag-icon" />
      <span class="lang-name">{{ selectedLanguage.nativeName }}</span>
      <span class="chevron" :class="{ 'is-open': isDropdownOpen }">▼</span>
    </button>

    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li
        v-for="lang in languages"
        :key="lang.code"
        @click="selectLanguage(lang)"
        class="dropdown-item"
      >
        <img :src="lang.flag" :alt="lang.name" class="flag-icon" />
        <span>{{ lang.name }} ({{ lang.nativeName }})</span>
        <span v-if="selectedLanguage.code === lang.code" class="check-mark">✔</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; // computed 추가
import { useLanguageStore } from '@/stores/language.js'; // Pinia 스토어 임포트

// --- Pinia 스토어 사용 ---
const languageStore = useLanguageStore();

// --- 데이터 ---
const krFlag = '/flags/kr.svg';
const usFlag = '/flags/us.svg';
const esFlag = '/flags/es.svg';

const languages = ref([
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: krFlag },
  { code: 'en', name: 'English', nativeName: 'English', flag: usFlag },
  // { code: 'es', name: 'Spanish', nativeName: 'Español', flag: esFlag },
]);

const isDropdownOpen = ref(false);

// selectedLanguage를 Pinia 스토어의 상태와 동기화
const selectedLanguage = computed(() => {
  return languages.value.find(lang => lang.code === languageStore.locale) || languages.value[0];
});


// --- 함수 ---
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectLanguage(language) {
  isDropdownOpen.value = false;
  // Pinia 스토어의 액션을 호출하여 언어 상태를 변경
  languageStore.setLocale(language.code);
}
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
  font-family: sans-serif;
}

.switcher-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  line-height: 30px;
}

.switcher-button:hover {
  background-color: #f5f5f5;
}

.flag-icon {
  width: 20px;
  height: 15px;
  border-radius: 2px;
  object-fit: cover;
}

.chevron {
  font-size: 10px;
  transition: transform 0.2s ease-in-out;
}

.chevron.is-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  width: 205px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 5px 0;
  margin: 0;
  z-index: 10;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.check-mark {
  margin-left: auto;
  color: #007bff;
  font-size: 16px;
}

.lang-name {
  width: 80px;
  line-height: 20px;
}

@media (max-width: 1024px) {
  .switcher-button {
    border: none!important;
    margin-left: auto;
  }

  .switcher-button:hover {
    background-color: transparent!important;
  }
}
</style>
