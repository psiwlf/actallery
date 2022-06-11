import { VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import ArtistComponent from '../components/artistComponent';
import EventsComponent from '../components/EventsComponent';
import SearchBar from '../components/SearchBar';
import { useArtistFetch } from '../useArtistFetch';

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { state, loading, error } = useArtistFetch(searchTerm);

  return (
    <div>
      <VStack w='full' h='full' p={4} spacing={4} alignItems='center'>

      <h1>Search Artists</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {state.artist ? <ArtistComponent artist={state?.artist} /> : ''}
      {state.events ? <EventsComponent events={state?.events} /> : ''}
      </VStack>
    </div>
  );
};

export default SearchView;
