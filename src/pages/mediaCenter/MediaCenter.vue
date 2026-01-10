<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

// --- 상태 관리 ---
const allPosts = ref([]);
const startDate = ref('');
const endDate = ref('');
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const isModalOpen = ref(false);
const selectedPost = ref(null);

// --- Contentful API 정보 ---
const SPACE_ID = 't726qnapeakn';
const ACCESS_TOKEN = 'xLRfwRiS3xHrP6tiC5MqgX2qf7nk6vkKl6op7aX2hlE';
const CONTENT_TYPE_ID = 'mediaCenter';

// --- 데이터 로직 ---
const filteredPosts = computed(() => {
  let posts = allPosts.value;
  if (searchQuery.value) {
    posts = posts.filter(post => post.title.includes(searchQuery.value));
  }
  const start = startDate.value ? new Date(startDate.value) : null;
  const end = endDate.value ? new Date(endDate.value) : null;
  if (start || end) {
    posts = posts.filter(post => {
      const postDate = new Date(post.date.replace(/\./g, '-'));
      if (start && postDate < start) return false;
      if (end && postDate > end) return false;
      return true;
    });
  }
  return posts;
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPosts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / itemsPerPage.value);
});

// 💡 1. 모바일 페이지네이션을 위한 로직 추가
const paginationRange = computed(() => {
  const current = currentPage.value;
  const total = totalPages.value;
  const range = [];
  const delta = 2; // 현재 페이지 주변에 보여줄 페이지 수

  let left = current - delta;
  let right = current + delta;

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
  } else {
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i <= right)) {
        range.push(i);
      }
    }
  }
  // 생략된 페이지(...) 처리를 위한 로직
  const rangedWithDots = [];
  let l;
  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangedWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangedWithDots.push('...');
      }
    }
    rangedWithDots.push(i);
    l = i;
  }
  return rangedWithDots;
});

const modalContentHtml = computed(() => {
  if (selectedPost.value && selectedPost.value.content) {
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const asset = selectedPost.value.assets.find(
            (asset) => asset.sys.id === node.data.target.sys.id
          );
          if (asset && asset.fields.file.contentType.startsWith('image/')) {
            const url = `https:${asset.fields.file.url}`;
            return `<img src="${url}" alt="${asset.fields.title}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1em 0;" />`;
          }
          return '';
        },
      },
    };
    return documentToHtmlString(selectedPost.value.content, options);
  }
  return '';
});

// --- 메서드 ---
function changePage(page) {
  if (typeof page === 'number' && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
function handleSearch() { currentPage.value = 1; }
function resetFilters() {
  startDate.value = '';
  endDate.value = '';
  searchQuery.value = '';
  currentPage.value = 1;
}
function openModal(post) {
  selectedPost.value = post;
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}

// --- 라이프사이클 훅 ---
onMounted(() => {
  fetchPostsFromContentful();
});

async function fetchPostsFromContentful() {
  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`;
  try {
    const response = await axios.get(url, {
      params: { access_token: ACCESS_TOKEN, content_type: CONTENT_TYPE_ID, order: '-sys.updatedAt' },
    });
    const assets = response.data.includes?.Asset || [];
    allPosts.value = response.data.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      date: item.sys.createdAt.split('T')[0].replace(/-/g, '.'),
      register: item.fields.register,
      content: item.fields.content,
      assets: assets,
    }));
  } catch (error) {
    console.error('Contentful 데이터 로딩 실패:', error);
  }
}
</script>

<template>
  <div class="board-section">
    <h2 class="board-title">보도자료</h2>

    <div class="filter-bar">
      <input type="date" v-model="startDate" placeholder="시작일" />
      <input type="date" v-model="endDate" placeholder="종료일" />
      <input type="text" v-model="searchQuery" placeholder="검색어를 입력하세요" @keyup.enter="handleSearch" />
      <button class="btn-search" @click="handleSearch">검색</button>
      <button class="btn-reset" @click="resetFilters">초기화</button>
    </div>

    <div class="list-controls">
      <div class="total-count">
        총 <b>{{ filteredPosts.length }}</b> 건
      </div>
      <select v-model="itemsPerPage" @change="currentPage = 1">
        <option value="10">10개씩 보기</option>
        <option value="20">20개씩 보기</option>
        <option value="50">50개씩 보기</option>
      </select>
    </div>

    <ul class="post-list">
      <li v-for="post in paginatedPosts" :key="post.id" class="post-item" @click="openModal(post)">
        <span class="post-title">{{ post.title }}</span>
        <span class="post-date">{{ post.date }}</span>
      </li>
       <li v-if="paginatedPosts.length === 0" class="no-results">
        검색 결과가 없습니다.
      </li>
    </ul>

    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">이전</button>
      <template v-for="(page, index) in paginationRange" :key="index">
        <button
          v-if="typeof page === 'number'"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <span v-else class="dots">...</span>
      </template>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">다음</button>
    </div>
  </div>

  <Transition name="fade">
    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">{{ selectedPost?.title }}</h3>
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
        <div class="modal-meta">
          <span>작성자: {{ selectedPost?.register }}</span>
          <span>작성일: {{ selectedPost?.date }}</span>
        </div>
        <div class="modal-body" v-html="modalContentHtml"></div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.board-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Pretendard', sans-serif;
}

.board-title {
  font-size: 2rem;
  font-weight: 700;
  padding: 20px;
  background-color: #fcebeb;
  border-radius: 10px 10px 0 0;
  margin: 0;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 10px 10px;
  margin-bottom: 30px;
  background-color: #fdfdfd;

  input[type="date"], input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    flex: 1 1 200px;
  }
  input[type="text"] {
    flex: 2 1 300px;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
    flex-shrink: 0;
  }
  .btn-search {
    background-color: #333;
    color: white;
    &:hover { background-color: #555; }
  }
  .btn-reset {
    background-color: #eee;
    color: #333;
    &:hover { background-color: #ddd; }
  }
}

.list-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .total-count {
    font-size: 1.1rem;
    b {
      font-weight: 700;
      color: var(--main-color);
    }
  }
  select {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #333;

  .post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 20px 10px;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
    }

    .post-title {
      font-size: 1.1rem;
      color: #333;
      word-break: keep-all;
    }
    .post-date {
      font-size: 1rem;
      color: #777;
      white-space: nowrap;
    }
  }

  .no-results {
    padding: 50px;
    text-align: center;
    color: #888;
    border-bottom: 1px solid #eee;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;

  button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &.active {
      background-color: var(--main-color);
      color: white;
      border-color: var(--main-color);
      font-weight: 600;
    }

    &:not(:disabled):hover {
      background-color: #f5f5f5;
    }
  }
  .dots {
    display: flex;
    align-items: center;
    padding: 8px 4px;
    color: #888;
  }
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #eee;

  .modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #888;
    line-height: 1;
  }
}

.modal-meta {
  display: flex;
  gap: 20px;
  padding: 15px 25px;
  background-color: #f9f9f9;
  font-size: 0.9rem;
  color: #555;
  border-bottom: 1px solid #eee;
}

.modal-body {
  padding: 25px;
  overflow-y: auto;
  line-height: 1.7;

  :deep(p) {
    margin-bottom: 1em;
  }
  :deep(h1), :deep(h2), :deep(h3) {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// --- 모바일 반응형 ---
@media (max-width: 768px) {
  .board-section {
    padding: 10px;
  }
  .board-title {
    font-size: 1.5rem;
    padding: 15px;
  }

  .filter-bar {
    flex-direction: column;
    padding: 15px;

    input[type="date"], input[type="text"] {
      // flex 속성을 초기화하고 너비를 100%로 설정
      flex: 1 1 auto;
      width: 100%;
    }

    button {
      width: 100%;
    }
  }

  .post-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 15px;
  }

  .pagination {
    gap: 5px;
    button { padding: 6px 10px; }
  }

  .modal-content {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .modal-header .modal-title {
    font-size: 1.2rem;
  }
}
</style>
