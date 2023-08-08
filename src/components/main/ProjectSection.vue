<template>
  <section class="project">
    <h2>사이드프로젝트</h2>
    <Flicking class="card-list" :options="{ align: 'prev', circular: true }" :plugins="plugins">
      <RouterLink to="/chuncheon-festival" class="card panel" key="0">
        <div class="card-image">
          <img src="@/assets/images/chuncheon-thumbnail.png" alt="춘천역 표지판 이미지" />
        </div>
        <div class="card-text">
          <p class="title">강원도 춘천시 관내 문화축제</p>
          <p>
            <a href="https://www.data.go.kr/data/15112147/openapi.do#layer-api-guide">OPEN API</a>를
            활용해서 강원도 춘천 문화축제 정보를 제공하는 페이지를 만들었습니다.<br />
            pageView와 pagination을 구현했습니다.
          </p>
        </div>
      </RouterLink>
      <RouterLink to="/jeju-festival" class="card panel" key="1">
        <div class="card-image">
          <img src="@/assets/images/jeju-thumbnail.png" alt="제주 돌하르방을 만지는 이미지" />
        </div>
        <div class="card-text">
          <p class="title">비짓제주 관광정보</p>
          <p>
            <a href="https://www.data.go.kr/data/15076361/openapi.do">OPEN API</a>를 활용해서
            비짓제주에서 제공하는 제주 관공정보 페이지를 만들었습니다.<br />
            infinite scroll을 구현했습니다.
          </p>
        </div>
      </RouterLink>
      <a href="https://www.kko-kkuri.com/new-dictionary" target="_blank" class="card panel" key="2">
        <div class="card-image">
          <img src="@/assets/images/dictionary.png" alt="소통사전" />
        </div>
        <div class="card-text">
          <p class="title">소통사전 - 검색 페이지</p>
          <p>
            개인적으로 운영중인 블로그에 신조어 검색이라는 컨셉을 잡아서 검색 페이지를 만들었습니다.<br/>
            네이버 검색 API를 활용했습니다.
          </p>
        </div>
      </a>
      <a href="https://www.kko-kkuri.com/baseball-game" target="_blank" class="card panel" key="3">
        <div class="card-image">
          <img src="@/assets/images/baseball.png" alt="야구게임 썸네일" />
        </div>
        <div class="card-text">
          <p class="title">숫자 야구게임</p>
          <p>
            개인적으로 운영중인 블로그에 숫자 야구게임을 만들었습니다.
          </p>
        </div>
      </a>
      <template #viewport>
    <span class="flicking-arrow flicking-arrow-prev is-thin"></span>
    <span class="flicking-arrow flicking-arrow-next is-thin"></span>
  </template>
    </Flicking>
  </section>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

export default {
  components: {
    Flicking: Flicking
  },
  data() {
    return {
      plugins: [new Arrow()]
    }
  }
}
</script>

<style scoped lang="scss">
.card-list {
  margin-top: 1rem;
}

.card {
  display: block;
  margin: 2px 0.25rem;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:last-child {
    margin-right: 0;
  }
  &-image {
    position: relative;
    height: 200px;
    border-radius: 6px 6px 0 0;
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
    margin-top: 0.625rem;
    font-size: 0.813rem;
    .title {
      font-size: 1rem;
      font-weight: bold;
    }
  }
}

.flicking-arrow {
  display: none;
}

@include tablet {
  .card {
    width: calc(100% / 3 - 1.5rem);
  }
}

@include mobile {
  .card {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0.875rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .flicking-arrow {
    display: block;
  }
}
</style>
