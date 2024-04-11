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
  background-color: rgb(17, 17, 22);
  overflow-y: auto; /* Utiliser overflow-y: auto pour activer le défilement vertical */
  max-height: calc(100vh - 80px); /* Hauteur maximale du contenu (80px est une valeur arbitraire, vous pouvez ajuster selon vos besoins) */
  padding: 20px; /* Ajouter un espace intérieur pour éviter que le contenu ne colle aux bords */
}

/* Styles des barres de défilement */
.main::-webkit-scrollbar {
  width: 5px;
}

.main::-webkit-scrollbar-thumb {
  background-color: rgb(20, 19, 88);
  border-radius: 35px;
}
</style>
