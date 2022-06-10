import { useState, useEffect } from 'react';
import API from './API';

export const useActorFetch = actorName => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorName);

        setState(actor);
        setLoading(false);

      } catch (error) {
        setError(true);
      }
    };
    fetchActor();
  }, [actorName]);

  return { state, loading, error };
};