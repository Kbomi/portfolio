<template>
  <div class="chuncheon">
    <h3>강원도 춘천시 관내 문화축제 소개 페이지</h3>
    <div class="filter">
      <p class="total">총: {{ totalCount }}건</p>
      <select name="pageView" id="pageView" v-model="pageView">
        <option value="12">12개씩 보기</option>
        <option value="24">24개씩 보기</option>
        <option value="36">36개씩 보기</option>
      </select>
    </div>
    <div class="list">
      <CultureCard v-for="item in data" :key="item.cultureNo" :item="item" />
    </div>
    <Pagination
      v-if="totalCount"
      :totalCount="totalCount"
      :currentPage="currentPage"
      :movePage="movePage"
      :pageView="pageView"
    />
  </div>
</template>

<script>
import { getFestivalList } from '@/api/chuncheon.js'
import CultureCard from '../components/project/CultureCard.vue'
import Pagination from '../components/common/Pagination.vue'

export default {
  components: {
    CultureCard,
    Pagination
  },
  data() {
    return { currentPage: 1, pageView: 12, data: [], totalCount: 0 }
  },
  created() {
    this.loadData()
  },
  mounted() {
    this.changeBodyColor()
  },
  unmounted() {
    /**
     * 페이지 벗어날 경우 인라인 스타일 제거
     */
    const body = document.getElementsByTagName('body')[0]
    body.style.removeProperty('background-color')
  },
  methods: {
    /**
     * 강원 춘천 문화 축제 데이터 load
     */
    async loadData() {
      console.log('currentPage:', this.currentPage)
      console.log('pageView:', this.pageView)
      const result = await getFestivalList({
        pageNo: this.currentPage,
        numOfRows: this.pageView
      })

      this.data = result.data
      this.totalCount = result.totalCount
    },
    /**
     * body 태그 background color 변경
     */
    changeBodyColor() {
      const body = document.getElementsByTagName('body')[0]
      body.style.backgroundColor = '#fff'
    },
    /**
     * 페이지 이동
     */
    movePage(page) {
      this.currentPage = page
      this.loadData()
    }
  },
  watch: {
    pageView() {
      this.currentPage = 1
      this.loadData()
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  width: calc(100% + 4rem);
  margin-top: -2rem;
  margin-left: -2rem;
  padding: 2rem;
  background: #722f8b;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
}
.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 1px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #722f8b 0%, #fdb826 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.total {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}
</style>
