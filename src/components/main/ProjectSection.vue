<template>
  <section class="project">
    <h2>사이드프로젝트</h2>
    <div class="card-list">
      <RouterLink to="/chuncheon-festival" class="card">
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
      <RouterLink to="/jeju-festival" class="card">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.card {
  display: block;
  width: calc(100% / 2 - 1.5rem);
  margin-right: 0.5rem;
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
}
</style>
