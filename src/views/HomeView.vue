<script setup lang="ts">
import { ref } from "vue";

const currentIndex = ref(0); // État pour suivre l'index de l'image active

// Fonction pour faire défiler les images automatiquement
const autoScroll = () => {
	setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % 5; // Supposons qu'il y ait 3 images dans le carousel
	}, 5000); // Changement d'image toutes les 5 secondes
};
autoScroll(); // Démarrez le défilement automatique dès que le composant est monté

const setActiveIndex = (index: number) => {
	currentIndex.value = index;
};
</script>
<template>

	<div class="bg-zinc-950 flex flex-col h-screen w-full">
		<div class="absolute top-0 left-0 w-full h-full bg-zinc-950 opacity-20">
			<div class="w-full">
				<img v-if="currentIndex === 0"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Jns9K6ddsBicdkm0Y4afJH6m_lF5WVMAQRBT5kvMTQ&s"
					class="w-full  h-screen object-full " alt=""
					:class="{ 'carousel-item': true, active: currentIndex === 0 }" />
				<img v-if="currentIndex === 1" src="https://www.worldhistory.org/img/c/p/1600x900/10343.jpg" alt=""
					class="w-full  h-screen object-full"
					:class="{ 'carousel-item': true, active: currentIndex === 1 }" />
				<img v-if="currentIndex === 2"
					src="https://image.over-blog.com/EbX6o9I3ux2-G45RvQWQhkYIdxU=/filters:no_upscale()/image%2F1236293%2F20211101%2Fob_47efff_20211028-211740.jpg"
					alt="" class="w-full h-screen object-full"
					:class="{ 'carousel-item': true, active: currentIndex === 2 }" />
				<img v-if="currentIndex === 3"
					src="https://information.tv5monde.com/sites/tv5-info/files/styles/seo_1200/public/2021-12/field_media_image-50826-AP_18327601380322_0.jpg"
					alt="" class="w-full h-screen object-full"
					:class="{ 'carousel-item': true, active: currentIndex === 3 }" />
				<img v-if="currentIndex === 4"
					src="https://media1.ledevoir.com/images_galerie/nwd_675784_520263/image.jpg" alt=""
					class="w-full h-screen object-full"
					:class="{ 'carousel-item': true, active: currentIndex === 4 }" />

			</div>
		</div>
		<div class="flex flex-col">
			<div class="flex justify-between items-center px-8 py-4">
				<RouterLink to="/" class="flex items-center">
					<img src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png" alt=""
						width="80px" height="80px" />
					<p class="text-zinc-400">
						DOKUMITON
					</p>
				</RouterLink>
				<div class="container_content_top_buttons text-white">
					<RouterLink to="/login">
						<button
							class="mr-5 border-dashed border py-1 border-zinc-500 px-5 rounded cursor-pointer hover:bg-zinc-800 text-zinc-400 hover:border">Login</button>
					</RouterLink>
					<RouterLink to="/register">
						<button
							class="px-5 py-1 border-dashed border border-zinc-500 rounded cursor-pointer hover:bg-zinc-800 text-zinc-400 hover:border">Register</button>
					</RouterLink>
				</div>
			</div>
			<div class="flex flex-col gap-8 py-20 justify-center items-center h-[calc(100vh_-_143.44px)]">
				<p class="text-zinc-400 text-2xl text-center ">Explore un univers infini d'expression artistique,<br>
					découvre de nouveaux talents et laisse libre cours à ta créativité <br>  sur notre plateforme d'exposition
					virtuelle.</p>  
				<p class="text-zinc-400 text-2xl">Explose ta créativité.</p>

				<RouterLink to="/login">
					<button
					class="text-zinc-400 border text-xl px-5 py-2 hover:bg-zinc-800 border-zinc-500 px-4 py-2 rounded cursor-pointer mt-4">
					Commençons
				</button>
				</RouterLink>
			</div>

		</div>
		<!--  <div class="container_content_middle flex justify-between items-center w-[800px] mx-auto gap-6">
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
          <div class="container_content_middle_right text-zinc-400 text-4xl relative">
            <p class="">
              Explose ta créativité <br> Découvre d'autres créateurs <br> Explore d'autres talents artistiques. <br>
              <button
                class="text-zinc-400 border hover:bg-zinc-800 border-zinc-500 px-4 py-2 rounded cursor-pointer mt-4"
              >
                Let's Start
              </button>
            </p>
          </div>                                                                  
        </div> -->
	</div>

</template>

<style>
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