<template lang="pug">
  .about
    h1 This is an about page
    div(v-if="vm.undones>0")
      h2 You have {{vm.undones}} tasks pending. Go do them noww
    div(v-else-if="vm.tasks.length>0")
      h2 All tasks are done! Great Job!
    div(v-else)
      h2 No tasks! Joblesss.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {observer} from "mobx-vue";
import {store} from "../store/todoList";

@observer
@Component
export default class AboutView extends Vue{
    name="task";
    vm=store;
}
</script>