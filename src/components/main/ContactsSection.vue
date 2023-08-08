<template>
  <section class="contacts">
    <h2>연락처</h2>
    <ul>
      <li>
        <a
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=93rlaqhal@gmail.com"
          target="_blank"
        >
          <BIconEnvelope />
          <span>93rlaqhal@gmail.com</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Kbomi" target="_blank">
          <BIconGithub />
          <span>https://github.com/Kbomi</span>
        </a>
      </li>
      <li>
        <a href="https://blog.naver.com/93rlaqhal" target="_blank">
          <BIconEmojiSunglasses />
          <span
            >네이버 블로그<br />
            - 저의 얘기가 담긴 개인 블로그입니다.</span
          >
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import {
  BIconEnvelope,
  BIconGithub,
  BIconCodeSquare,
  BIconEmojiSunglasses
} from 'bootstrap-icons-vue'

export default {
  components: {
    BIconEnvelope,
    BIconGithub,
    BIconCodeSquare,
    BIconEmojiSunglasses
  }
}
</script>

<style scoped lang="scss">
.contacts {
  padding-bottom: 2rem;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
li {
  width: 40%;
  margin-top: 1rem;
}
a {
  display: flex;
  padding: 0.25rem 0;
}
svg {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
span {
  line-height: 20px;
}

@include tablet {
  li {
    width: 48%;
  }
}

@include mobile {
  ul {
    display: block;
    padding-left: 20px;
  }
  li {
    width: 100%;
  }
}
</style>
