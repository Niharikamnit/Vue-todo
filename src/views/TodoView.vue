<template lang="pug">
.todoview
    TodoList()
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '../components/TodoList.vue';

@Component({
  components: {
    TodoList,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
.todoview {
    display: flex;
    flex-direction: column;
}
</style>