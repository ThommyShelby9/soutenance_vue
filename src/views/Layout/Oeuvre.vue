<!-- <template>
  <div class="max-w-lg mx-auto">
    <div class="flex justify-between mb-4">
      <button
        @click="showModal = true"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Ajouter une oeuvre
      </button>
      <button
        class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Filtrer
      </button>
    </div>
    <div class="mb-6">
      <p v-if="!oeuvres.length" class="text-gray-500">
        Aucune oeuvre trouvée pour le moment.
      </p>
      <div
        v-for="oeuvre in oeuvres.data"
        :key="oeuvre.id"
        class="bg-custom-modal rounded shadow p-4 mb-4"
      >
        <h2 class="text-lg font-semibold mb-2">{{ oeuvre.title }}</h2>
        <p class="text-gray-700 mb-2">{{ oeuvre.description }}</p>
        <div class="flex flex-wrap -mx-2">
          <div
            v-for="(image, index) in oeuvre.images"
            :key="index"
            class="w-1/4 px-2 mb-2"
          >
          <img :src="getImageUrl(image)" alt="Image de l'œuvre" class="w-full h-auto rounded">

          </div>
        </div>
        <div class="flex items-center mt-2">
          <button
            @click="likeArtwork(oeuvre.id)"
            class="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
          <span class="text-gray-500 ml-1">{{ oeuvre.likes }}</span>
        </div>
      </div>
    </div>

    !-- Modal pour ajouter une oeuvre --
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
    >
      <div class="bg-custom-modal rounded-lg p-8 w-full max-w-md">
        <h1 class="titre mb-6">Ajouter une oeuvre</h1>
        <form @submit.prevent="add_artwork()" enctype="multipart/form-data">
          <div class="mb-6">
            <label for="title" class="block text-gray-700 font-bold mb-2"
              >Titre</label
            >
            <input
              type="text"
              id="title"
              placeholder="Titre de l'œuvre"
              class="form-input w-full rounded-lg shadow-md"
              v-model="artwork.titre"
            />
          </div>
          <div class="mb-6">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              placeholder="Description de l'œuvre"
              class="form-textarea w-full rounded-lg shadow-md"
              v-model="artwork.description"
            ></textarea>
          </div>
          <div class="mb-6">
            <label for="photos" class="block text-gray-700 font-bold mb-2"
              >Photos (maximum 8)</label
            >
            <input
              type="file"
              id="photos"
              multiple
              class="form-input w-full rounded-lg shadow-md"
              @change="handleFileUpload"
            />
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Ajouter
            </button>
          </div>
        </form>
        <button
          @click="showModal = false"
          class="absolute top-0 right-0 mt-4 mr-4 text-red-700 hover:text-red-700 focus:outline-none"
        >
          &#10005;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import clientHttp from "@/lib/clientHttp";
import router from "@/router";
import { ref } from "vue";
import { toast } from "vue3-toastify";

export default {
  setup() {
    // Variables réactives
    const oeuvres = ref([]); // Tableau des oeuvres existantes
    const showModal = ref(false); // Indicateur pour afficher ou non le modal

    // Variables réactives avec la fonction ref
    const artwork = ref({
      titre: "",
      description: "",
      images: [],
    });

    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.id);
    // Fonction pour gérer le téléchargement de fichiers
    function handleFileUpload(event) {
      const files = event.target.files;
      artwork.value.images = files;
      console.log(files); // Afficher les fichiers dans la console pour vérification
    }

    async function add_artwork() {
      try {
        const formData = new FormData();

        // Ajouter les propriétés titre et description à formData
        formData.append("titre", artwork.value.titre);
        formData.append("description", artwork.value.description);
        formData.append("user_id", user.id);

        // Ajouter les fichiers d'images à formData
        // Ajouter les fichiers d'images à formData avec la clé 'images'
        for (let i = 0; i < artwork.value.images.length; i++) {
          formData.append("files", artwork.value.images[i]);
        }

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const response = await clientHttp.post(
          "/add_artwork",
          formData,
          config
        );

        console.log(response);

        toast.success("L'œuvre a été ajoutée avec succès.");

        showModal.value = false;

        artwork.value.titre = "";
        artwork.value.description = "";
        artwork.value.images = [];

        // Rediriger l'utilisateur vers une autre page ou rafraîchir la liste des œuvres
        // router.push('/oeuvres');
        setTimeout(() => {
          router.go(0)
        }, 3000);
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'œuvre :", error);
        toast.error("Une erreur s'est produite lors de l'ajout de l'œuvre.");
      }
    }
    // Retourner les données et les fonctions à utiliser dans le composant
    async function getArtwork() {
      try {
        const response = await clientHttp.get("/get_artwork");
        oeuvres.value = response;
        console.log(oeuvres.value.data);
      } catch (error) {}
    }

   function getImageUrl(image){
      // Retourne l'URL complète de l'image
      return `http://localhost:8080/src/private_images/${image}`;
    }

    getArtwork();
    return {
      oeuvres,
      showModal,
      artwork,
      handleFileUpload,
      add_artwork,
      getImageUrl
    };
  },
};
</script>
<style scoped>
.form {
  box-shadow: 0 0 10px rgb(4, 236, 225);
  border-radius: 20px;
}

.form-input,
textarea {
  padding: 0.75rem;
}

.titre {
  font-size: 40px;
  color: whitesmoke;
}

.bg-custom-modal {
  background-color: rgb(17, 17, 22);
  box-shadow: 0 0 10px rgb(4, 236, 225);
}
</style> -->


<template>
  <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    <!-- Client Table -->
  <div class="mt-4 mx-4">
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-zinc-500 uppercase border-b  bg-zinc-50  ">
                <th class="px-4 py-3">Client</th>
                <th class="px-4 py-3">Amount</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y ">
              <tr class="bg-zinc-50  hover:bg-zinc-100  text-zinc-700 ">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hans Burger</p>
                      <p class="text-xs text-zinc-600 ">10x Developer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$855.85</td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full  "> Approved </span>
                </td>
                <td class="px-4 py-3 text-sm">15-01-2021</td>
              </tr>
              <tr class="bg-zinc-50  hover:bg-zinc-100 text-zinc-700 ">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Jolina Angelie</p>
                      <p class="text-xs text-zinc-600 ">Unemployed</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$369.75</td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                </td>
                <td class="px-4 py-3 text-sm">23-03-2021</td>
              </tr>
              <tr class="bg-zinc-50  hover:bg-zinc-100  text-zinc-700 ">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Dave Li</p>
                      <p class="text-xs text-zinc-600 ">Influencer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$775.45</td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-zinc-700 bg-zinc-100 rounded-full "> Expired </span>
                </td>
                <td class="px-4 py-3 text-sm">09-02-2021</td>
              </tr>
              <tr class="bg-zinc-50  hover:bg-zinc-100  text-zinc-700 ">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Rulia Joberts</p>
                      <p class="text-xs text-zinc-600 ">Actress</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$1276.75</td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full  "> Approved </span>
                </td>
                <td class="px-4 py-3 text-sm">17-04-2021</td>
              </tr>
              <tr class="bg-zinc-50  hover:bg-zinc-100  text-zinc-700 ">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hitney Wouston</p>
                      <p class="text-xs text-zinc-600 ">Singer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full"> Denied </span>
                </td>
                <td class="px-4 py-3 text-sm">11-01-2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-zinc-500 uppercase border-t bg-zinc-50 sm:grid-cols-9  ">
          <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
          <span class="col-span-2"></span>
          <!-- Pagination -->
          <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                <li>
                  <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                    <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                </li>
                <li>
                  <button class="px-3 py-1 text-white transition-colors duration-150 bg-zinc-600 border border-r-0 border-zinc-800 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                </li>
                <li>
                  <span class="px-3 py-1">...</span>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                    <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
    <!-- ./Client Table -->

    <!-- Contact Form -->
    <div class="mt-8 mx-4">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="p-6 mr-2 bg-zinc-100  sm:rounded-lg">
          <h1 class="text-4xl sm:text-5xl text-zinc-800 :text-white font-extrabold tracking-tight">Get in touch</h1>
          <p class="text-normal text-lg sm:text-2xl font-medium text-zinc-600  mt-2">Fill in the form to submit any query</p>

          <div class="flex items-center mt-8 text-zinc-600 ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-zinc-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">Dhaka, Street, State, Postal Code</div>
          </div>

          <div class="flex items-center mt-4 text-zinc-600 ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-zinc-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">+880 1234567890</div>
          </div>

          <div class="flex items-center mt-4 text-zinc-600 ">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-zinc-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">info@demo.com</div>
          </div>
        </div>
        <form class="p-6 flex flex-col justify-center">
          <div class="flex flex-col">
            <label for="name" class="hidden">Full Name</label>
            <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-zinc-400  text-zinc-800 font-semibold focus:border-zinc-500 focus:outline-none" />
          </div>

          <div class="flex flex-col mt-2">
            <label for="email" class="hidden">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-zinc-400  text-zinc-800 font-semibold focus:border-zinc-500 focus:outline-none" />
          </div>

          <div class="flex flex-col mt-2">
            <label for="tel" class="hidden">Number</label>
            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-zinc-400 text-zinc-800 font-semibold focus:border-zinc-500 focus:outline-none" />
          </div>

          <button type="submit" class="md:w-32 bg-zinc-600  text-white  font-bold py-3 px-6 rounded-lg mt-4 hover:bg-zinc-500 transition ease-in-out duration-300">Submit</button>
        </form>
      </div>
    </div>
    <!-- ./Contact Form -->

    <!-- External resources -->
    <div class="mt-8 mx-4">
      <div class="p-4 bg-zinc-50  border border-zinc-500  rounded-lg shadow-md">
        <h4 class="text-lg font-semibold">Have taken ideas & reused components from the following resources:</h4>
        <ul>
          <li class="mt-3">
            <a class="flex items-center text-zinc-700 " href="https://tailwindcomponents.com/component/sidebar-navigation-1" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Sidebar Navigation</span>
            </a>
          </li>
          <li class="mt-2">
            <a class="flex items-center text-zinc-700 " href="https://tailwindcomponents.com/component/contact-form-1" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Contact Form</span>
            </a>
          </li>
          <li class="mt-2">
            <a class="flex items-center text-zinc-700 " href="https://tailwindcomponents.com/component/trello-panel-clone" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Section: Task Summaries</span>
            </a>
          </li>
          <li class="mt-2">
            <a class="flex items-center text-zinc-700 " href="https://windmill-dashboard.vercel.app/" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Section: Client Table</span>
            </a>
          </li>
          <li class="mt-2">
            <a class="flex items-center text-zinc-700 " href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Section: Social Traffic</span>
            </a>
          </li>
          <li class="mt-2">
            <a class="flex items-center text-zinc-700 " href="https://mosaic.cruip.com" target="_blank">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="inline-flex pl-2">Section: Recent Activities</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- ./External resources -->
  </div>
  
</template>
