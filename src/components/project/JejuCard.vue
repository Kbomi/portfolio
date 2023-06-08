<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.repPhoto.photoid.thumbnailpath" :alt="item.repPhoto.descseo" />
    </div>
    <div class="card-text">
      <p class="title">{{ item.title }}</p>
      <p class="desc">{{ item.introduction }}</p>
      <p class="address">
        <span>주소: {{ item.roadaddress }}</span
        ><button type="button" @click="copyContent(item.newAddr)">복사하기</button>
      </p>
      <a v-if="item.phoneno" class="tel" :href="`tel:${item.phoneno}`"
        ><BIconTelephoneFill />{{ item.phoneno }}</a
      >
      <div class="tag">
        <p class="tag-title">태그</p>
        <p v-for="tag in item.tag.split(',')" :key="tag">#{{ tag }}</p>
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
  width: calc(100% / 3 - 0.5rem);
  margin: 0.25rem;
  background: #{$c-white};
  &-image {
    position: relative;
    height: 200px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
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
    background: #ff6b01;
    color: #{$c-white};
    .address {
      border-color: #{$c-white};
      button {
        background: #{$c-white};
        color: #ff6b01;
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
    background: #7d8600;
    color: white;
    cursor: pointer;
  }
}
.date {
  font-size: 0.75rem;
}
.tel {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.875rem;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
    padding: 0.313rem;
    border-radius: 50%;
    background: #ff6b01;
    fill: #{$c-white};
  }
}

.tag {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  font-size: 0.875rem;
  &-title {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
  }
  p {
    padding-right: 0.5rem;
    &:last-child {
      padding-right: 0;
    }
  }
}

@include tablet {
  .card {
    width: calc(100% / 2 - 0.5rem);
  }
}

@include mobile {
  .card {
    width: 100%;
    margin: 0.5rem;
    &-text {
      padding: 0.875rem;
    }
  }
  .address {
    flex-direction: column;
    align-items: flex-start;
    button {
      margin-top: 0.5rem;
    }
  }
  .date {
    margin-top: 0.25rem;
    span {
      display: block;
      font-size: 0;
    }
  }
}
</style>
