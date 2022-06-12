import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

// this is a controlled component
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    // Because useEffect will render everytime but we want it to render only when we type something so we will use useRef
    if (initial.current) {
      initial.current = false;
      return;
    }

    // delay after stop typing
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 600);

    // destroying timer, to avoid multiple timers
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<FaSearch />} />
      <Input
        type="text"
        placeholder="Search Artist"
        _placeholder={{ opacity: 1, color: 'inherit' }}
        value={state}
        onChange={(event) => setState(event.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
