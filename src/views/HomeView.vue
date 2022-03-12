<template lang="pug">
  body
    .calendar
      v-calendar(title-position="left" :attributes='attributes')
    .card
      .card-header Featured
      .card-body
        h5.card-title Check out your todolist for {{newdate}}
        router-link.btn.btn-primary(to="/todolist" tag="button") Go To TodoList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {observer} from 'mobx-vue';

@observer
@Component
export default class HomeView extends Vue {

  attributes:any= [
      {
        key: 'today',
        highlight: true,
        dates: ['2022-03-13'],
      }
    ];
    dateObj = new Date();
    month = this.dateObj.getUTCMonth() + 1; //months from 1-12
    day = this.dateObj.getUTCDate()+1;
    year = this.dateObj.getUTCFullYear();

    newdate = this.day+ "/" + this.month + "/" +this.year ;
}
</script>

<style lang="scss" scoped>
// .calendar{

// }
body {
  margin: 20px;
  background-color: transparent !important;
}
// .calendar{
// width: inherit;
// }
</style>