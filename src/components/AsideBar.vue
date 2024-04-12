<!-- <template>
  <div class="flex h-screen">
    <div class="sidebar bg-custom h-screen w-72 flex flex-col">
      <div class="sidebar-header bg-custom py-4 px-2 font-bold text-white">
        <img
          src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png"
          alt=""
          width="100px"
        />
      </div>
      <div class="sidebar-options py-4 px-2">
        !-- Options de la barre latérale --
        <router-link
          to="/"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Home</router-link
        >
        <router-link
          to="/expo/expo"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Expositions</router-link
        >
        <router-link
          to="/evenements"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Événements</router-link
        >
        !-- Les options suivantes seront affichées uniquement pour les utilisateurs ayant le rôle ROLE_CREATOR --
        <router-link
          to="/expositions"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >
          !-- v-if="userInfo.role.role === 'ROLE_CREATOR'" --

          Mes Expositions</router-link
        >
        <router-link
          to="/expo/oeuvre"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Mes oeuvres</router-link
        >
        <router-link
          
          to="/evenements"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300 rounded"
          >Mes Événements</router-link
        >
        <button
          
          class="block py-2 px-4 text-gray-800 hover:bg-red-900 transition duration-300 mt-20 rounded"
        >
        !-- @click="logout" --
          Déconnexion
        </button>
      </div>
    </div>
    <div class="main h-screen w-full flex flex-col">
      <div
        class="navbar bg-custom h-[10vh] w-full py-4 px-6 text-white flex justify-between px-10"
      >
        <div class="navbar_left">
          <p>Bienvenue {{ userInfo.username }} </p>
        </div>
        <div class="navbar_right">
          <img
            src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png"
            alt=""
            width="50px"
          />
          <p>lorem</p>
        </div>
      </div>
      <div class="main-content flex-grow p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, RouterView } from "vue-router";

/* const router = useRouter();

const logout = () => {
  // Ajoutez ici la logique de déconnexion, par exemple, la redirection vers la page de connexion
  router.push("/login");
};

var user = ref();
user.value = localStorage.getItem("userInfo");
const userInfo = JSON.parse(user.value);
console.log(userInfo); */
</script>

<style>
router-link:hover {
  background-color: rgb(0, 195, 255);
  border-radius: 20px;
}
.bg-custom {
  background-color: rgb(2, 2, 2);
}

.hovercustom {
  background-color: rgb(0, 195, 255);
}

.sidebar-options {
  padding-top: 10px;
  padding-left: 30px;
}

.main-content {
  overflow-y: scroll; /* Ajoutez un défilement vertical si nécessaire */
  background-color: rgb(17, 17, 22);
}

</style>
 -->

<template>
  <!-- Sidebar -->
  <div
    class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-900  h-full text-white transition-all duration-300 border-none z-10 sidebar">
    <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul class="flex flex-col py-4 space-y-1">
        <li class="px-5 hidden md:block">
          <div class="flex flex-row items-center h-8">
            <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
          </div>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                </path>
              </svg>
            </span>
            <RouterLink to="/expo" class="ml-2 text-sm tracking-wide truncate">Dashboard</RouterLink>
          </a>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                </path>
              </svg>
            </span>
            <RouterLink to="/oeuvre" class="ml-2 text-sm tracking-wide truncate">Oeuvre</RouterLink>
            <span
              class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                </path>
              </svg>
            </span>
            <RouterLink to="/oeuvre" class="ml-2 text-sm tracking-wide truncate">Exposition</RouterLink>
          </a>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                </path>
              </svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Notifications</span>
            <span
              class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
          </a>
        </li>
        <li class="px-5 hidden md:block">
          <div class="flex flex-row items-center mt-5 h-8">
            <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
          </div>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-950  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
          </a>
        </li>
      </ul>
      <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2024</p>
    </div>
  </div>
  <!-- ./Sidebar -->
</template>
