<template>
  <div class="chuncheon">
    <h3>강원도 춘천시 관내 문화축제 소개 페이지</h3>
    <div class="filter"></div>
    <div class="list">
      <CultureCard v-for="item in data" :key="item.cultureNo" :item="item" />
    </div>
  </div>
</template>

<script>
import { getFestivalList } from '@/api/chuncheon.js'
import CultureCard from '../components/project/CultureCard.vue'

export default {
  components: {
    CultureCard
  },
  data() {
    return { page: 1, pageView: 10, data: [] }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      console.log('loadData:', this.page, this.pageView)

      const result = await getFestivalList({
        pageNo: this.page,
        numOfRows: this.pageView
      })

      console.log('result:', result)
      this.data = result.data
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 1.25rem);
  margin-top: 1rem;
  margin-left: -0.625rem;
}
</style>
