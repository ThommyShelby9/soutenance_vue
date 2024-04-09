<template>
    <div class="wrapper">
      <AsideBar />
      <main class="main">
        <RouterView />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import AsideBar from '@/components/AsideBar.vue'
  import { RouterView } from 'vue-router'
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    width: 100%;
  }
  
  .main {
    flex-grow: 1; /* Pour que le main occupe l'espace restant */
    height: 100vh;
    background-color: rgb(17, 17, 22);
    overflow: auto;
    z-index: 1;
  }
  
  /* Styles supplémentaires selon vos besoins */
  </style>
  