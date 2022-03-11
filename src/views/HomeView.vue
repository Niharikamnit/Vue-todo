<template lang="pug">
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
          dates: new Date(),
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
.calendar{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>