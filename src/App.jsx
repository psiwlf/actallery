import { useState } from 'react';
import './App.css';
import { useArtistFetch } from './useArtistFetch';
import SearchView from './views/SearchView';

function App() {
  const [state, setState] = useState('');
  // const headers = { 'Content-Type': 'application/json' }
  const res = useArtistFetch(state)
  const search = async () => {
    // const url = 'https://rest.bandsintown.com/artists/' + state + '?app_id=abc'
    // // const url = 'https://rest.bandsintown.com/artists/post%20malone?app_id=abc'
    // const res = await (await fetch(url)).json()
    console.log('fetched', res);
  } 
  return <div className="App">Hello Motive
  <input type='text' name='artist' 
  onChange={event => setState(event.currentTarget.value)}
  value={state}
  />
  {/* <button name='search' onClick={() => <h2>{'hhhjkkjkk'}</h2>}>Print</button> */}
  <button name='search' onClick={search}>Print</button>
  <SearchView props={res} />
  </div>;
}

export default App;
