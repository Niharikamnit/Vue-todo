<template lang="pug">
  .aboutContainer
    .about
      h1 About Todo App
      p.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut diam ac est ornare rhoncus eu faucibus nunc. Etiam odio tellus, blandit a velit ac, laoreet blandit arcu. Praesent orci turpis, placerat et pulvinar ac, gravida et leo. Sed non urna tristique, porta nunc vitae, sollicitudin odio. Donec sed rhoncus urna, eget auctor urna. Sed ullamcorper vitae lacus nec placerat. Donec suscipit risus non mi malesuada, eu aliquet purus tempus. Fusce eget mauris felis.
        vitae libero mi. Suspendisse aliquet at diam eget consequat. Proin tempus justo vel consectetur porttitor. Etiam ultrices, leo sed viverra sodales, enim diam feugiat quam, id venenatis dui nisl in justo. Mauris in neque ac nisi maximus tempor. Sed scelerisque turpis in velit fringilla, vel hendrerit purus maximus. Phasellus a ultrices mauris. Suspendisse potenti. Aenean varius imperdiet viverra. Suspendisse potenti. Etiam velit quam, posuere in auctor ut, pharetra quis est.
    .card
      .card-header Featured
      .card-body
        h5.card-title Status of your Todolist
        p.card-text
            div(v-if="vm.undones>0")
              h5 You have {{vm.undones}} tasks pending. Go do them noww
            div(v-else-if="vm.tasks.length>0")
              h5 All tasks are done! Great Job!
            div(v-else)
              h5 No tasks! Joblesss.
        router-link.btn.btn-primary(to="/todolist" tag="button") Go To TodoList
    
    //- h2 Status of your Todo List
  
</template>

<script lang="ts" scoped>
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

<style lang="scss" scoped>

.aboutContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.about {
  flex-basis: 50%;
}

.card-body{
  background-color: rgb(179, 224, 255);
;
}
</style>