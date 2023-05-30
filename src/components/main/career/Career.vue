<template>
  <section class="career">
    <h2>경력</h2>
    <ul class="career-list">
      <CareerItem v-for="career in careerList" :key="career.company" :career="career" />
    </ul>
  </section>
</template>

<script>
import CareerItem from './CareerItem.vue'
import data from './career.json'

const careerList = data

export default {
  components: {
    CareerItem
  },
  data() {
    return {
      careerList
    }
  }
}
</script>

<style>
ul.career-list {
  position: relative;
  margin-top: 1rem;
  padding-left: 0;
}
ul.career-list::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 12px;
  width: 1px;
  height: calc(100% - 20px);
  background: var(--vt-c-green-dark);
}
</style>
