<template lang="pug">
  #app
    NavBar()
    router-view()
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue{}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: transparent;

}
body {
  background-color: transparent !important;
}
</style>
