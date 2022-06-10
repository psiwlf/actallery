import {
    API_URL,
    API_KEY
  } from './config';
  
  const apiSettings = {
    fetchArtist: async (searchTerm) => {
      const endpoint = API_URL + searchTerm + API_KEY
      return await (await fetch(endpoint)).json();
    },
    fetchEvents: async (searchTerm) => {
      const endpoint = API_URL + searchTerm + 'events/' + API_KEY
      return await (await fetch(endpoint)).json();
    },
  };
  
  export default apiSettings;
  