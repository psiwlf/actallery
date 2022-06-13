import { Heading, Spinner, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ArtistComponent from '../components/artistComponent';
import EventsComponent from '../components/EventsComponent';
import SearchBar from '../components/SearchBar';
import { useArtistFetch } from '../useArtistFetch';

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { state, loading, error } = useArtistFetch(searchTerm);
  const [cachedArtist, setCachedArtist] = useState();

  useEffect(() => {
    const checkCache = async () => {
      const cacheStorage = await caches.open('artistState');
      const cachedResponse = await cacheStorage.match('/');
      const respJson = await cachedResponse.json();
      if (cachedResponse) {
        setCachedArtist(respJson);
      }
    };
    checkCache();
  }, []);
  return (
    <VStack w="full" h="full" p={4} spacing={4} alignItems="center">
      <Heading>Search Artists</Heading>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading && searchTerm !== '' ? (
        <Spinner size="lg" />
      ) : cachedArtist && !searchTerm ? (
        <>
          {cachedArtist.artist && (
            <ArtistComponent artist={cachedArtist?.artist} />
          )}
          {cachedArtist.events && (
            <EventsComponent events={cachedArtist?.events} />
          )}
        </>
      ) : (
        <>
          {state.artist && <ArtistComponent artist={state?.artist} />}
          {state.events && <EventsComponent events={state?.events} />}
        </>
      )}
    </VStack>
  );
};

export default SearchView;
