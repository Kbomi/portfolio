<template>
  <div class="card">
    <div class="card-image">
      <img
        src="https://source.unsplash.com/daily"
        alt="축제와 관련 없습니다. 랜덤 이미지 입니다."
      />
    </div>
    <div class="card-text">
      <p class="title">{{ item.cultureNm }}</p>
      <p class="desc">{{ item.info }}</p>
      <p class="date">시작일: {{ item.startDate }} - 종료일: {{ item.endDate }}</p>
      <a :href="item.homepage" target="_blank" class="link"><BIconLink45deg />홈페이지 링크</a>
      <a :href="`tel:${item.telno}`"><BIconTelephoneFill />{{ item.telno }}</a>
      <p class="address">{{ item.newAddr }}</p>
    </div>
  </div>
</template>

<script>
import { BIconTelephoneFill, BIconLink45deg } from 'bootstrap-icons-vue'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    BIconTelephoneFill,
    BIconLink45deg
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.card {
  width: calc(100% / 3);
  margin-top: 1rem;
  padding: 0.625rem;
  &-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      height: 100%;
      transform: translateX(-50%);
    }
  }
  &-text {
    padding: 0.75rem 0.25rem;
    background: #fff;
  }
}
.title {
  font-size: 1rem;
  font-weight: bold;
}
.desc {
  font-size: 0.875rem;
}
.date {
  font-size: 0.75rem;
}
</style>
