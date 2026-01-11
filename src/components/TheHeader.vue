<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // RouterLink 사용

const isMenuOpen = ref(false);
const activeSubmenu = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) activeSubmenu.value = null;
};

const toggleSubmenu = (index) => {
  if (activeSubmenu.value === index) activeSubmenu.value = null;
  else activeSubmenu.value = index;
};

// 메뉴 데이터 (경로 'link' 업데이트)
const menuItems = [
  {
    name: '회사소개',
    link: '', // 상위 메뉴는 클릭 시 이동 안 함 (모바일 토글용)
    children: [
      { name: '인사말', link: '/company/greeting' },
      { name: '인증서', link: '/company/certification' },
    ]
  },
  { name: '제품소개', link: '/product' },
  { name: '설치사례', link: '/installation-case' }, // 예시
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <RouterLink to="/" @click="isMenuOpen = false"><img src="/images/icon/logo.jpg" alt="씨에스(CS) 로고"></RouterLink>
      </div>

      <button class="mobile-menu-btn" @click="toggleMenu">
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
      </button>

      <nav :class="['nav-menu', { 'active': isMenuOpen }]">
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="item.name"
            :class="{ 'has-submenu': item.children, 'submenu-open': activeSubmenu === index }"
          >
            <div v-if="item.children" class="menu-item-wrapper">
              <div class="menu-label mobile-only" @click="toggleSubmenu(index)">
                <span>{{ item.name }}</span>
                <span class="arrow-icon">▼</span>
              </div>
              <div class="menu-label pc-only">
                <span>{{ item.name }}</span>
                <span class="arrow-icon">▼</span>
              </div>

              <ul v-if="item.children" class="dropdown-menu">
                <li v-for="child in item.children" :key="child.name">
                  <RouterLink :to="child.link" @click="isMenuOpen = false">
                    {{ child.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <RouterLink
              v-else
              :to="item.link"
              class="nav-link"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* CSS 스타일은 이전과 대부분 동일하지만, router-link 대응을 위해 일부 수정 */
.header { background-color: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 20px; height: 70px; display: flex; justify-content: space-between; align-items: center; }
.logo a { font-size: 1.5rem; font-weight: bold; color: #0056b3; text-decoration: none; }

.nav-menu > ul { display: flex; list-style: none; gap: 40px; margin: 0; padding: 0; }
.nav-menu > ul > li { position: relative; height: 70px; display: flex; align-items: center; cursor: pointer; }

/* 링크 및 텍스트 스타일 */
.nav-link, .menu-label, .dropdown-menu a { text-decoration: none; color: #333; font-weight: 500; font-size: 1rem; transition: color 0.3s; display: flex; align-items: center; gap: 5px; }
.nav-link:hover, .menu-label:hover, .dropdown-menu a:hover { color: #0056b3; }

/* 활성화된 링크 스타일 (Vue Router 자동 클래스) */
.router-link-active { color: #0056b3; font-weight: bold; }

.arrow-icon { font-size: 0.7rem; transition: transform 0.3s; }

/* PC: 서브메뉴 */
.dropdown-menu { position: absolute; top: 70px; left: 50%; transform: translateX(-50%); background-color: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 0 0 5px 5px; list-style: none; padding: 10px 0; min-width: 160px; opacity: 0; visibility: hidden; transition: all 0.3s ease; }
.dropdown-menu li a { display: block; padding: 10px 20px; font-size: 0.95rem; color: #555; white-space: nowrap; }
.nav-menu > ul > li:hover .dropdown-menu { opacity: 1; visibility: visible; }
.nav-menu > ul > li:hover .arrow-icon { transform: rotate(180deg); }

.mobile-menu-btn { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
.mobile-menu-btn span { width: 25px; height: 3px; background-color: #333; transition: 0.3s; }
.mobile-menu-btn span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.mobile-menu-btn span.open:nth-child(2) { opacity: 0; }
.mobile-menu-btn span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

/* 유틸리티 클래스 */
.mobile-only { display: none; }
.pc-only { display: flex; }

/* 모바일 대응 */
@media (max-width: 768px) {
  .mobile-menu-btn { display: flex; }
  .mobile-only { display: flex; width: 100%; justify-content: space-between; padding: 15px 20px; }
  .pc-only { display: none; }

  .nav-menu { position: absolute; top: 70px; left: 0; width: 100%; background-color: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-height: 0; overflow-y: auto; transition: max-height 0.4s ease-out; }
  .nav-menu.active { max-height: 500px; }
  .nav-menu > ul { flex-direction: column; gap: 0; }
  .nav-menu > ul > li { width: 100%; height: auto; display: block; border-bottom: 1px solid #f0f0f0; }

  .nav-link { padding: 15px 20px; width: 100%; display: block; }

  .dropdown-menu { position: static; transform: none; box-shadow: none; background-color: #f9f9f9; width: 100%; display: none; padding: 0; opacity: 1; visibility: visible; }
  .submenu-open .dropdown-menu { display: block; }
  .submenu-open .arrow-icon { transform: rotate(180deg); }
  .dropdown-menu li a { padding: 12px 20px 12px 40px; }
}
</style>
