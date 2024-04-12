<template>
  <!-- Your login form -->
  <!--   <div
    class="wrapper bg-custom-blue flex justify-center items-center min-h-screen"
  >
  <img src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png" alt="Your Image" class="mb-8" width="100px">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login()">
      <h1 class="mb-5 font-bold text-4xl">Login</h1>
      <div class="mb-4">
        <label
          class="block text-stone-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Email"
          v-model="credentials.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-stone-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
  </div> -->


  <!-- login form 1 -->
  <!-- <div class="min-h-screen bg-zinc-950 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-stone-500 to-stone-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-stone-200 shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
				</div>
				<div class="divide-y divide-stone-200">
					<div class="py-8 text-base leading-6 space-y-4 text-stone-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-stone-300 text-stone-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-stone-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-stone-400 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-stone-300 text-stone-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-stone-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-stone-400 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->


  <!-- login form2 -->
  <div class="max-w-full min-h-screen mx-auto py-14 px-6 bg-zinc-950">
    <div class="font-sans">
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-6">
              <div class="mb-5 pb-1 flex justify-center font-base text-stone-500">
                <RouterLink to="/">
                  <img src="/src/assets/images/Screenshot_from_2024-04-05_17-12-07-removebg-preview.png" alt="logo"
                    width="100px" class="shadow-xl">
                </RouterLink>


              </div>
              <div class="text-center font-semibold text-stone-500">
                Lorem ipsum dolor, sit amet?
              </div>

              <form class="mt-8">
                <div class="mx-auto max-w-lg">
                  <div class="py-2">
                    <span class="px-1 text-sm text-stone-400">Email</span>
                    <input placeholder="" type="text"
                      class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-stone-300 placeholder-stone-600 shadow-md focus:placeholder-stone-500 focus:bg-white focus:border-stone-600 focus:outline-none">
                  </div>
                  <div class="py-2" x-data="{ show: true }">
                    <span class="px-1 text-sm text-stone-400">Mot de passe</span>
                    <div class="relative">
                      <input placeholder="" :type="show ? 'password' : 'text'" class="text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-stone-300 placeholder-stone-600 shadow-md
                focus:placeholder-stone-500
                focus:bg-white 
                focus:border-stone-600  
                focus:outline-none">
                    </div>
                  </div>
                  <div class="flex justify-end">

                    <label class="block text-stone-500 font-bold my-4"><a href="#"
                        class="cursor-pointer tracking-tighter text-black border-b pb-1 border-stone-200 hover:border-stone-400">
                        <span class="text-stone-500">Mot de passe oublié?</span></a></label>
                  </div> <button class="mt-3 text-lg font-semibold 
                bg-stone-700 hover:bg-stone-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                    Se connecter
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
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
import router from '@/router';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
var show = ref(false)
const credentials = ref({
  email: "",
  password: ""
})
async function login() {
  try {
    const response = await clientHttp.post('/login', {
      email: credentials.value.email,
      password: credentials.value.password
    })
    console.log(response.data.token)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("userInfo", JSON.stringify(response.data.user))
    toast.success('Connexion réussie!', {
      position: toast.POSITION.TOP_LEFT
    })
    setTimeout(() => {
      router.push('/expo')
    }, 3000);
  } catch (error) {
    console.error
    toast.error('Echec!', {
      position: toast.POSITION.TOP_LEFT
    })
  }
}

</script>
