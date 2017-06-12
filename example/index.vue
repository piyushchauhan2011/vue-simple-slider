<template>
  <div id="app" class="container">
    <h1>Vue Simple Slider</h1>
    <p>
      Vue slider component with touch and mouse support. <br>
      Modern browsers and IE10+ (IE9 should work, but as flex is not supported you'll need to change CSS).
    </p>
    <p>
      <a href="https://github.com/piyushchauhan2011/vue-simple-slider">Download on GitHub</a>
    </p>
    <h2>Slider with default options</h2>
    <ul>
      <li><code>loop: false</code> - Should arrow navigation loop around</li>
      <li><code>selected: 0</code> - Slide to be selected</li>
      <li><code>showArrows: true</code> - Show arrows navigation</li>
      <li><code>showNav: true</code> - Show pager navigation</li>
    </ul>
    <example></example>
  </div>
</template>

<script>
import example from './example'

export default {
  name: 'app',
  components: {
    example
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
