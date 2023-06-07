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
      <p class="address">
        <span>주소: {{ item.newAddr }}</span
        ><button type="button" @click="copyContent(item.newAddr)">복사하기</button>
      </p>
      <div class="box">
        <a :href="item.homepage" target="_blank" class="link"
          ><BIconLink45deg /><br />홈페이지 링크</a
        >
        <a :href="`tel:${item.telno}`"><BIconTelephoneFill /><br />{{ item.telno }}</a>
      </div>
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
  methods: {
    async copyContent(text) {
      try {
        console.log('text:', text)
        await navigator.clipboard.writeText(text)
        alert('주소가 복사되었습니다.')
      } catch (err) {
        alert('복사에 실패했습니다. 새로고침 후 다시 시도해주세요.')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: calc(100% / 3 - 0.25rem);
  margin: 0.125rem;
  background: #{$c-white};
  border: 1px solid #{$c-divider-dark-2};
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
    display: flex;
    flex-direction: column;
    height: calc(100% - 200px);
    padding: 0.75rem;
  }

  &:hover .card-text {
    background: #722f8b;
    color: #{$c-white};
    .address {
      border-color: #{$c-white};
      button {
        background: #{$c-white};
        color: #722f8b;
      }
    }
  }
}
.title {
  font-size: 1.125rem;
  font-weight: bold;
}
.desc {
  margin: 0.25rem 0;
  font-size: 0.875rem;
}
.address {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  padding: 0.25rem 0;
  border-top: 1px solid #{$c-divider-dark-2};
  border-bottom: 1px solid #{$c-divider-dark-2};
  font-size: 0.875rem;
  button {
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 6px;
    background: #722f8b;
    color: white;
    cursor: pointer;
  }
}
.date {
  font-size: 0.75rem;
}
.box {
  display: flex;
  margin-top: auto;
  padding-top: 0.75rem;
  svg {
    width: 36px;
    height: 36px;
    padding: 0.313rem;
    border-radius: 50%;
    background: #722f8b;
    fill: #{$c-white};
  }
  a {
    display: block;
    width: 50%;
    font-size: 0.5rem;
    text-align: center;
  }
}
</style>
