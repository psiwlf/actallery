import { useState } from 'react';
import './App.css';
import { useArtistFetch } from './useArtistFetch';
import SearchView from './views/SearchView';

function App() {
  return (
    <div className="App">
      Hello Motive
      <SearchView />
    </div>
  );
}

export default App;
