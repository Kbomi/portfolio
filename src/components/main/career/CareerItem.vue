<template>
  <li>
    <span class="date">{{ career.date }}</span>
    <div class="desc">
      <b>{{ career.company }}</b>
      <br />
      <span class="text">{{ career.detail.text }}</span>
      <br />
      <button type="button" @click="toggleContent">
        <BIconCaretRightFill :class="{ on: showContent }" />
        프로젝트 내용
      </button>
      <Transition name="slide-fade">
        <ul v-if="showContent" class="career-list sub">
          <CareerItemDetail v-for="item in career.detail.list" :key="item.title" :item="item" />
        </ul>
      </Transition>
    </div>
  </li>
</template>

<script>
import CareerItemDetail from './CareerItemDetail.vue'
import { BIconCaretRightFill } from 'bootstrap-icons-vue'

export default {
  props: {
    career: {
      type: Object,
      required: true
    }
  },
  components: {
    CareerItemDetail,
    BIconCaretRightFill
  },
  data() {
    return {
      showContent: false
    }
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent
    }
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  display: flex;
  padding-left: 2rem;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: $c-green-dark;
  }
  & + li {
    margin-top: 2rem;
  }
}
.date {
  min-width: 150px;
  margin-right: 1rem;
}
.desc {
  font-size: 0.875rem;
  b {
    font-size: 1.125rem;
  }
}
.text {
  display: inline-block;
  margin-top: 0.5rem;
  white-space: pre-wrap;
}
button {
  display: flex;
  align-items: center;
  margin: 0.625rem 0 0 0;
  padding: 0.5rem 0.5rem 0 0;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: bold;
  color: var(--color-text);
  cursor: pointer;
}
button svg {
  width: 12px;
  height: 12px;
  margin-right: 0.375rem;
  transition: transform 0.3s ease-out;
  &.on {
    transform: rotate(90deg);
    transition: transform 0.3s ease-out;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
ul {
  padding: 0;
}

@include tablet {
  .date {
    min-width: 128px;
  }
}

@include mobile {
  li {
    display: block;
    padding-left: 0;
    &::before {
      top: 8px;
      left: -15px;
    }
  }
}
</style>
