<template>
  <!-- login form2 -->
  <div class="max-w-full min-h-screen mx-auto py-14 px-6 bg-stone-950">
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
                    <span class="px-1 text-sm text-stone-400">Nom et prénom</span>
                    <input placeholder="" type="text"
                      class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-stone-300 placeholder-stone-600 shadow-md focus:placeholder-stone-500 focus:bg-white focus:border-stone-600 focus:outline-none">
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-sm text-stone-400">Email</span>
                    <input placeholder="" type="text"
                      class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-stone-300 placeholder-stone-600 shadow-md focus:placeholder-stone-500 focus:bg-white focus:border-stone-600 focus:outline-none">
                  </div>
                  <div class="py-2" x-data="{ show: true }">
                    <span class="px-1 text-sm text-stone-400">Mot de passe</span>
                    <div class="relative">
                      <input placeholder="password" class="text-md block px-3 py-2 rounded-lg w-full 
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