<template lang="pug">
//- include ../includes/mixins

html
  body.todolist(v-on:scroll="scrollFunction")
        addTodo()
        table.table.table-light
          thead
            tr
              th(scope='col') Task
              // use pipe to add extra lines to a tag content
              //use p. to add alot of content(para) in
              // p tag(instead of pipes every line)
              |         
              th(scope='col') Status
              |         
              th(scope='col') Delete
          |     
          tbody(name="slide" is="transition-group")
            tr(v-for='(task,index) in vm.tasks', :key='index' draggable="true" @dragstart="startDrag($event,index)"  @drop="onDrop($event,index)" @dragover.prevent @dragenter.prevent)              
              th
                span(contenteditable='true', v-on:keydown.enter='editTask($event,index)', v-on:blur='editTask($event,index)', v-bind:class="{'done' : task.finished}")
                  | {{task.name}}
              |         
              td
                button.pointer.btn.btn-dark(v-on:click='changeStatus(index)')
                  | {{task.status}}
              |         
              td
                div
                  button.btn.btn-danger(type='button', v-on:click='deleteTask(index)') Delete
              td
                div
                  button
        |
        //- - const obj = {undones: vm.undones, tasks: vm.tasks}
        //- +status(obj)
        div(v-if='vm.undones>0')
          | Task not finished {{ vm.undones}}
        |     
        div(v-else-if='vm.tasks.length>0')
          | All tasks are done!
        |     
        div(v-else='')
          | No tasks!
        button(@click="scrollToTop" id="myBtn" title="Go to top")
          i.fas.fa-arrow-alt-circle-up
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import {observer} from "mobx-vue";
import {store} from "../store/todoList";
import addTodo from "./addTodo.vue";

interface data{
  done:boolean,
  display: boolean
}
@observer
@Component({
components: {
    addTodo,
  }
})
export default class TodoList extends Vue {
  //typescript has problem if the type can be trivially infered by im still mentioning it
  name= "task";

  data:data={
    done:false,
    display: true
  }
  //not able to add store into interface
    vm=store;

  deleteTask(index: number): void {
    //not able to do this.data.vm
    this.vm.deleteTask(index);
  }

  editTask(event: object, index: number) {
    this.vm.editTask(event,index)
  }

  changeStatus(index: number) {
    this.vm.changeStatus(index);
    // .finished was throwing error, so changed tasks type to any
    this.data.done=this.vm.tasks[index].finished;
    console.log(this.data.done);
  }

  created() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  destroyed() {
    window.removeEventListener('scroll', this.scrollFunction);
  }

  //scroll to top feature
  //Get the button:
  mybutton = document.getElementById("myBtn");
  scrollFunction(e:any) {
    console.log(document.body.scrollTop);
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
      this.mybutton!.style.display='block';
    }
    else {
        this.mybutton!.style.display='none';
    }
  }
  scrollToTop() {
      window.scrollTo(0,0);
  }
  /* eslint-disable no-mixed-spaces-and-tabs */
  startDrag (evt:any, index:any) {
    console.log("drag index:" + index);
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('itemID', index)
    console.log(evt.dataTransfer.getData('itemID'));
  }
  onDrop (evt:any, index:any) {
    console.log("dropp"+index);
  	const olditemID = evt.dataTransfer.getData('itemID')
    const draggedele = this.vm.tasks[olditemID];
    const droppedele = this.vm.tasks[index];
    console.log(draggedele);
    console.log(droppedele); 
    this.vm.tasks.splice(olditemID,1);
    this.vm.tasks.splice(index,0,draggedele);
  }
  /* eslint-disable no-mixed-spaces-and-tabs */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.pointer {
  cursor: pointer;
}
.done {
  text-decoration: solid line-through red 4px;
}
.display{
  display: none;
}
.todolist{
  margin: 50px;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
#myBtn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; 
  // font-size: 18px;
}

// #myBtn:hover {
//   background-color: #555; /* Add a dark-grey background on hover */
// }
</style>
