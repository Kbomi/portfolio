<template>
  <section class="profile">
    <div class="text">
      <h1>
        웹 프론트엔드 개발자<br />
        <b>김보미</b>
      </h1>
      <p>
        퍼블리싱 경력 4년, 프론트엔드 1년차 개발자 김보미입니다.
        <br />
        저는 UI/UX 및 JavaScript에 대해 관심이 많습니다.
        <br />
        기본적으로 HTML, CSS, JavaScript로 퍼블리싱 가능합니다.
        <br />
        (웹 표준 준수, 크로스브라우징 고려)
        <br />
        Vue.js, React.js와 Storybook을 사용한 경험이 있습니다.
        <br />UI개발에 관심이 많고 디자인시스템 구축 경험이 있습니다.
      </p>
    </div>
    <div class="lottie-wrap">
      <Vue3Lottie
        class="background"
        :animationData="BackgroundJSON"
        :width="lottieSize.width"
        :height="lottieSize.height"
        :speed="0.4"
      />
      <Vue3Lottie class="chicken" :animationData="ChickenJSON" :height="200" :width="200" />
    </div>
  </section>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import ChickenJSON from './chicken.json'
import BackgroundJSON from './background.json'

export default {
  components: {
    Vue3Lottie
  },
  data() {
    return {
      ChickenJSON,
      BackgroundJSON,
      lottieSize: {
        width: 465,
        height: 850
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      // tablet
      if (window.innerWidth <= 900) {
        this.lottieSize.height = 1100
        return
      }
      // pc
      this.lottieSize.height = 850
    }
  }
}
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.text {
  width: 50%;
  h1 {
    font-size: 2rem;
    font-weight: normal;
  }
  p {
    margin-top: 1rem;
  }
}
.lottie-wrap {
  position: relative;
  width: 40%;
  max-width: 465px;
  height: 480px;
  overflow: hidden;
}
.background {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
}
.chicken {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* 태블릿 */
@include tablet {
  .profile {
    position: relative;
    display: block;
    padding-top: 8rem;
  }
  .text {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .lottie-wrap {
    width: 100%;
    max-width: 100%;
    height: 520px;
  }
  .chicken {
    left: 70%;
    bottom: -30px;
  }
}

/* 모바일 */
@include mobile {
  .profile {
    padding-top: 3rem;
  }
  .text {
    padding: 0 2rem;
  }
  .lottie-wrap {
    height: 400px;
  }
  .background {
    top: -220px;
  }
  .chicken {
    left: 50%;
  }
}
</style>
