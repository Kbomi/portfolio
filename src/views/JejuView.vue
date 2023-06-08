<template>
  <div class="chuncheon">
    <h3>🍊 제주관광정보 🍊</h3>
    <p class="total">총: {{ totalCount }}건</p>
    <div class="list">
      <JejuCard v-for="item in data" :key="item.title" :item="item" />
      <div ref="scrollTrigger" class="scroll-trigger" />
    </div>
  </div>
</template>

<script>
import { getJejuList } from '@/api/jeju.js'
import JejuCard from '../components/project/JejuCard.vue'

export default {
  components: {
    JejuCard
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      totalCount: 0,
      scrollTrigger: null
    }
  },
  created() {
    this.loadData()
  },
  mounted() {
    this.changeBodyColor()

    this.scrollTrigger = this.$refs.scrollTrigger
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && this.data.length) {
        this.currentPage += 1
      }
    }, options)

    observer.observe(this.scrollTrigger)
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
     * 제주 관광 데이터 load
     */
    async loadData() {
      const result = await getJejuList({
        page: this.currentPage
      })

      this.data = [...this.data, ...result.items]
      this.totalCount = result.totalCount
    },
    /**
     * body 태그 background color 변경
     */
    changeBodyColor() {
      const body = document.getElementsByTagName('body')[0]
      body.style.backgroundColor = '#fad09f'
    }
  },
  watch: {
    currentPage() {
      this.loadData()
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  padding-bottom: 2rem;
  font-size: 1.5rem;
  color: #ff6b01;
  text-align: center;
}
.total {
  padding-bottom: 1px;
  background-image: linear-gradient(#fad09f, #fad09f),
    linear-gradient(to right, #d42926 0%, #7d8600 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size: 1.25rem;
  font-weight: bold;
  color: #d42926;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}
.scroll-trigger {
  width: 100%;
  height: 3rem;
}

@include mobile {
  .total {
    padding: 0 0.5rem 1px 0.5rem;
  }
}
</style>
