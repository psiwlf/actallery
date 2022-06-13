import { useState, useEffect } from 'react';
import API from '../API';

export const useArtistFetch = (artistName) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        setLoading(true);
        setError(false);

        const artist = await API.fetchArtist(artistName);
        const events = await API.fetchEvents(artistName);
        setState({ artist, events });
        if ('caches' in window) {
          // pening given cache and putting our data into it
          caches.open('artistState').then((cache) => {
            cache.put('/', new Response(JSON.stringify({ artist, events })));
          });
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchArtist();
  }, [artistName]);

  return { state, loading, error };
};
