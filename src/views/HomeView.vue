<script setup lang="ts">
import { ref } from "vue";

const currentIndex = ref(0); // État pour suivre l'index de l'image active

// Fonction pour faire défiler les images automatiquement
const autoScroll = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3; // Supposons qu'il y ait 3 images dans le carousel
  }, 5000); // Changement d'image toutes les 5 secondes
};
autoScroll(); // Démarrez le défilement automatique dès que le composant est monté

const setActiveIndex = (index: number) => {
  currentIndex.value = index;
};
</script>
<template>
  <div class="wrapper bg-custom-blue flex justify-center items-center min-h-screen w-full">
    <div class="container mx-auto">
      <div class="container_content">
        <div class="container_content_top flex justify-between items-center px-4 -mt-10">
          <div class="container_content_top_img">
            <img
              src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png"
              alt=""
              width="80px"
            />
            <p class="text-white">
              DOKUMITON
            </p>
          </div>
          <div class="container_content_top_buttons text-white">
            <a href="/login">
              <button class="mr-2 border border_custom px-4 py-2 rounded cursor-pointer btn">Login</button>
            </a>
            <button class="btn px-4 py-2 rounded cursor-pointer">Register</button>
          </div>
        </div>
        <div class="container_content_middle flex justify-between items-center w-[800px] mx-auto gap-6">
          <div class="container_content_middle_left">
            <div class="image-carousel">
              <img
              v-if="currentIndex === 0"
                src="/src/assets/images/imag.jpeg"
                alt=""
                :class="{ 'carousel-item': true, active: currentIndex === 0 }"
              />
              <img
              v-if="currentIndex === 1"
                src="/src/assets/images/image.jpeg"
                alt=""
                :class="{ 'carousel-item': true, active: currentIndex === 1 }"
              />
              <img
              v-if="currentIndex === 2"
                src="/src/assets/images/images.jpeg"
                alt=""
                :class="{ 'carousel-item': true, active: currentIndex === 2 }"
              />
            </div>
          </div>
          <div class="container_content_middle_right text-white text-4xl relative">
            <p class="text-justify">
              Explose ta créativité, <br> Découvre d'autres créateurs, Explore d'autres talents artistiques. <br>
              <button
                class="btn text-white-500 border border_custom px-4 py-2 rounded cursor-pointer mt-4"
              >
                Let's Start
              </button>
            </p>
          </div>                                                                  
        </div>
      </div>
    </div>
  </div>
</template>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}
.bg-custom-blue {
  background-color: #01050c;
}

.btn:hover{
  background-color:  rgb(0, 195, 255);
}

.border_custom{
  border: 1px solid rgb(0, 195, 255);
}

.image-carousel {
  overflow: hidden;
  position: relative;
  height: 400px;
  width: 400px;
  border-radius: 30px; /* Ajuster la hauteur en fonction de vos besoins */
}

.image-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* L'image couvrira entièrement la div tout en conservant ses proportions */
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-item.slide-up {
  animation: slide-up 15s infinite;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  5% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>