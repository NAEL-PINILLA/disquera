const axios = require('axios');

// URL de la API pública
const apiUrl = 'https://open.spotify.com/intl-es?';

// Realizar una solicitud GET a la API
axios.get(apiUrl)
  .then(response => {
    // Manipula los datos de la respuesta aquí
    console.log('Datos de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud a la API:', error);
  });





