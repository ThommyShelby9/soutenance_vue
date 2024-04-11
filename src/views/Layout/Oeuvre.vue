<template>
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

    <!-- Modal pour ajouter une oeuvre -->
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
</style>
