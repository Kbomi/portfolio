<template>
  <div class="pagination">
    <button
      type="button"
      class="arrow"
      :disabled="currentPageGroup < 2"
      @click="movePage(currentPage - 5)"
    >
      <BIconChevronDoubleLeft />
    </button>
    <button
      type="button"
      class="arrow"
      :disabled="currentPage < 2"
      @click="movePage(currentPage - 1)"
    >
      <BIconChevronLeft />
    </button>
    <div class="number">
      <button
        v-for="page in pageList"
        :key="page"
        type="button"
        @click="movePage(page)"
        :class="{ active: currentPage === page }"
        :disabled="currentPage === page"
      >
        {{ page }}
      </button>
    </div>
    <button
      type="button"
      class="arrow"
      :disabled="totalPages < 2 || currentPage === totalPages"
      @click="movePage(currentPage + 1)"
    >
      <BIconChevronRight />
    </button>
    <button
      type="button"
      class="arrow"
      :disabled="totalPages < 10 || lastPageNumber === totalPages"
      @click="movePage(currentPage + 5)"
    >
      <BIconChevronDoubleRight />
    </button>
  </div>
</template>

<script>
import {
  BIconChevronDoubleLeft,
  BIconChevronLeft,
  BIconChevronRight,
  BIconChevronDoubleRight
} from 'bootstrap-icons-vue'

export default {
  components: {
    BIconChevronDoubleLeft,
    BIconChevronLeft,
    BIconChevronRight,
    BIconChevronDoubleRight
  },
  props: {
    pageView: {
      type: Number,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    movePage: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      pageGroupSize: 5
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / Number(this.pageView))
    },
    currentPageGroup() {
      return Math.ceil(this.currentPage / this.pageGroupSize)
    },
    lastPageNumber() {
      const lastNumber = this.currentPageGroup * this.pageGroupSize
      if (lastNumber > this.totalPages) return this.totalPages
      return lastNumber
    },
    firstPageNumber() {
      if (this.lastPageNumber === this.totalPages) {
        const multipleOfPageDisplayCount = this.lastPageNumber % this.pageGroupSize === 0
        return multipleOfPageDisplayCount
          ? this.lastPageNumber - this.pageGroupSize + 1
          : this.lastPageNumber - (this.lastPageNumber % this.pageGroupSize) + 1
      }

      return this.lastPageNumber - (this.pageGroupSize - 1)
    },
    pageList() {
      const list = []
      for (let i = this.firstPageNumber; i <= this.lastPageNumber; i++) {
        list.push(i)
      }
      return list
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 2.5rem;
}
button {
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid #{$c-divider-dark-2};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  &.arrow {
    margin: 0 0.25rem;
  }
  svg {
    width: 16px;
    height: 16px;
  }
}
.number {
  button {
    margin: 0 0.125rem;
    border: none;
    border-bottom: 1px solid #{$c-divider-dark-2};
    &.active {
      border-color: #722f8b;
      font-weight: bold;
      color: #722f8b;
    }
  }
}

@include mobile {
  .pagination {
    margin-top: 1rem;
    padding: 0 1rem 2.5rem 1rem;
  }
  button {
    width: 24px;
    height: 24px;
    svg {
      width: 16px;
      height: 16px;
    }
    &.arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  }
}
</style>
