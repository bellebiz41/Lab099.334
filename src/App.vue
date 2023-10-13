<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-body-tertiary">
    <br>
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
       
        </RouterLink>
        Weather to day 💗
      </a>
    </div>
  </nav><hr>

  <RouterView />
  
</div>
</template>
<style>
.navbar-brand {
  font-family: 'Itim', cursive;
  color: #695A5B;

}
body {
  background-color: #bc61b6;
}

</style>