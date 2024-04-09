<template>
  <div
    class="wrapper bg-custom-blue flex justify-center items-center min-h-screen"
  >
  <img src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png" alt="Your Image" class="mb-8" width="100px">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="getLogin()">
      <h1 class="mb-5 font-bold text-4xl">Login</h1>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Email"
          v-model="credentials.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="credentials.password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}

.bg-custom-blue {
  background-color: #01050c;
}
</style>

<script setup lang="ts">
import clientHttp from '@/lib/clientHttp';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const credentials = ref({
    email:"",
    password:""
})
async function login(){
    try {
    const response = clientHttp.post('/login', credentials.value)
    console.log(response)
    toast.success('Connexion réussie!', {
        position: toast.POSITION.TOP_LEFT
    })
} catch (error) {
    console.error
    toast.error('Echec!', {
        position: toast.POSITION.TOP_LEFT
    })
}
}


function getLogin(){
    login()
}
</script>
