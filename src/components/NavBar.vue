<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    .container
      .row
        .col-sm
          img(src="../includes/to-do-list-icon.png")
          router-link.navbar-brand.mb-0.h1(to="/" style="margin-top:20px;") Vue Todo App 
        .nav-item.col-sm(v-for="(tab,index) in tabs" v-on:click="currentTab=index" v-bind:class="{active: currentTab === index}")
          router-link.nav-link(style="color: black; margin-top:10px;" v-bind:to="tab.route") {{tab.name}}
</template>

<script lang=ts>

import { Component, Vue } from 'vue-property-decorator';
import {observer} from 'mobx-vue';

interface tabs{
  name: string,
  route: string
}
@Component
export default class NavBar extends Vue{

  currentTab=0;
  tabs:tabs[]=[
    {
      name: "Home",
      route: "/home"
    },
    {
      name: "About",
      route: "/about"
    },
    // {
    //   name: "Info",
    //   route: "/info"
    // }
]
}

</script>

<style lang="scss">

.active {
  background-color: grey;
}
.nav-item:hover {
  background-color: grey;
}
.col-sm{
  display: flex;
  flex-direction: row;
}

nav {
  max-height: 75px;
  row{
    margin-top:20px;
  }
}
img {
  margin: 5px;
  height: 70px;
  width: 75px;
}

@media screen and (max-width: 340px) {
  // nav {
  //   width: 100%;
  //   height: 100%;
  //   display:flex;
  //   flex-direction: column;
  // }
  
}
</style>