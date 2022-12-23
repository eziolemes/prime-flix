import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=5bc3301c5424e2acbece33016143080b&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;