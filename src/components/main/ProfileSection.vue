<template>
  <section class="profile">
    <div class="text">
      <h1>
        웹 프론트엔드 개발자<br />
        <b>김보미</b>
      </h1>
      <p>
        퍼블리싱 경력 4년, 프론트엔드 1년차 개발자 김보미입니다. 저는 UI/UX 및 JavaScript에 대해
        관심이 많습니다. 기본적으로 HTML, CSS, JavaScript로 퍼블리싱 가능합니다. (웹 표준 준수,
        크로스브라우징 고려) Vue.js, React.js와 Storybook을 사용한 경험이 있습니다. UI개발에 관심이
        많고 디자인시스템 구축 경험이 있습니다.
      </p>
    </div>
    <div class="lottie-wrap">
      <Vue3Lottie
        class="background"
        :animationData="BackgroundJSON"
        :width="465"
        :height="840"
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
      BackgroundJSON
    }
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.text {
  width: 50%;
}
.text h1 {
  font-size: 2rem;
  font-weight: normal;
}
.text p {
  margin-top: 1rem;
}
.lottie-wrap {
  position: relative;
  width: 40%;
  max-width: 465px;
  height: 600px;
  overflow: hidden;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.chicken {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
