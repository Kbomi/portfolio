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

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
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
