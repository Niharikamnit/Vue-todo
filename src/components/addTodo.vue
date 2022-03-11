<template lang="pug">
html
  body
    .addTodo
      .d-flex
        input.form-control(v-model='data.name', v-on:keyup.enter.prevent='submitTask', type='text', placeholder='Enter Text')
        |         
        button.btn.btn-primary.rounded-0(v-on:click='submitTask')  Add 

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {observer} from "mobx-vue";
    import {store} from "../store/todoList";

interface data{
    name:string,
    disabled:false,
    vm:any
}

@observer
@Component
export default class addTodo extends Vue {
        name= "addTodo";
        data:data={
                name: "",
                disabled: false,
                vm:store
            }

        submitTask() {
                console.log("submittt");
                if(this.data.name!=="") {
                    this.data.vm.submitTask(this.data.name);
                    this.data.name="";
                }
            }
        }
</script>

<style lang="scss">
.addTodo{
    margin: 20px;
}
</style>
        
