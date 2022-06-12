import { Button, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';
import SearchView from './views/SearchView';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaMoon /> : <FaSun />}
      </Button>
      <SearchView />
    </div>
  );
}

export default App;
