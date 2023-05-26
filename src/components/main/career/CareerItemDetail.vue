<template>
  <li>
    <span
      ><b>{{ item.title }}</b
      ><br />{{ item.date }}
    </span>
    <span v-if="item.url">URL: {{ item.url }}</span>
    <span class="desc">{{ item.desc }}</span>
  </li>
</template>

<script lang="ts">
import { type PropType } from 'vue'

export interface CareerList {
  title: string
  date: string
  url?: string
  desc: string
}

export default {
  props: {
    item: {
      type: Object as PropType<CareerList>,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
}
li span {
  white-space: pre-wrap;
}
.desc {
  margin-top: 0.375rem;
}
</style>
