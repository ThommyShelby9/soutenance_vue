<template>
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
        <!-- Options de la barre latérale -->
        <router-link
          to="/"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Home</router-link
        >
        <router-link
          to="/layout/expo"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Expositions</router-link
        >
        <router-link
          to="/evenements"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Événements</router-link
        >
        <!-- Les options suivantes seront affichées uniquement pour les utilisateurs ayant le rôle ROLE_CREATOR -->
        <router-link
          v-if="userInfo.role.role === 'ROLE_CREATOR'"
          to="/expositions"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Mes Expositions</router-link
        >
        <router-link
          v-if="userInfo.role.role === 'ROLE_CREATOR'"
          to="/layout/oeuvre"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300"
          >Mes oeuvres</router-link
        >
        <router-link
          v-if="userInfo.role.role === 'ROLE_CREATOR'"
          to="/evenements"
          class="block py-2 px-4 text-gray-800 hover:bg-gray-300 transition duration-300 rounded"
          >Mes Événements</router-link
        >
        <button
          @click="logout"
          class="block py-2 px-4 text-gray-800 hover:bg-red-900 transition duration-300 mt-20 rounded"
        >
          Déconnexion
        </button>
      </div>
    </div>
    <div class="main h-screen w-full flex flex-col">
      <div
        class="navbar bg-custom h-[10vh] w-full py-4 px-6 text-white flex justify-between px-10"
      >
        <div class="navbar_left">
          <p>Bienvenue {{ userInfo.username }}</p>
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

const router = useRouter();

const logout = () => {
  // Ajoutez ici la logique de déconnexion, par exemple, la redirection vers la page de connexion
  router.push("/login");
};

var user = ref();
user.value = localStorage.getItem("userInfo");
const userInfo = JSON.parse(user.value);
console.log(userInfo);
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
