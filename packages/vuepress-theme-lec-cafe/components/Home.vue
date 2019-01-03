<template>
  <div class="home">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>


    <div class="features">
      <h3>About Lec Cafe</h3>
      <div
        class="feature"
        v-for="(feature, index) in features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="hero">
      <NavLink class="action-button" :item="actionLink"/>
    </div>


    <Content class="custom"/>

    <div class="footer">
      <a href="http://chatbox-inc.com" target="_blank">
        Copyright © 2018-present chatbox.inc
      </a>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },
    features () {
      return [
          {
              title: "気になる最新技術をハンズオン形式で",
              details: `
短い時間で、より多くの達成感を味わって貰えるよう、Lec Cafe では 「実際に手を動かして学ぶ」 ハンズオン形式のセミナーを行っております。
塾や学校のような 「聞くだけ・学ぶだけ」のスタイルとは違って、自分のパソコンで実際に動かしながら学べるので、家に帰ってからの復習もバッチリ！
まだ書籍化されていないような、最新技術やイマドキの技術が体験出来るのも、Lec Cafeならではの魅力です。
`
          },
          {
              title: "気になる最新技術をハンズオン形式で",
              details: `
短い時間で、より多くの達成感を味わって貰えるよう、Lec Cafe では 「実際に手を動かして学ぶ」 ハンズオン形式のセミナーを行っております。
塾や学校のような 「聞くだけ・学ぶだけ」のスタイルとは違って、自分のパソコンで実際に動かしながら学べるので、家に帰ってからの復習もバッチリ！
まだ書籍化されていないような、最新技術やイマドキの技術が体験出来るのも、Lec Cafeならではの魅力です。
`
          },
          {
              title: "気になる最新技術をハンズオン形式で",
              details: `
短い時間で、より多くの達成感を味わって貰えるよう、Lec Cafe では 「実際に手を動かして学ぶ」 ハンズオン形式のセミナーを行っております。
塾や学校のような 「聞くだけ・学ぶだけ」のスタイルとは違って、自分のパソコンで実際に動かしながら学べるので、家に帰ってからの復習もバッチリ！
まだ書籍化されていないような、最新技術やイマドキの技術が体験出来るのも、Lec Cafeならではの魅力です。
`
          },
      ]
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    margin-bottom 2em
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    h3
      display block
      width 100%
      text-align center
      font-size 2em
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 .5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
