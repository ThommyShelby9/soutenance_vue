import axios from 'axios';

const clientHttp = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

// Ajouter un intercepteur pour les requêtes sortantes
clientHttp.interceptors.request.use(
    (config) => {
        // Récupérer le token du local storage
        const token = localStorage.getItem('token');
        
        // Ajouter le header Authorization avec le token Bearer si disponible
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        // En cas d'erreur lors de la configuration de la requête
        return Promise.reject(error);
    }
);

export default clientHttp;
