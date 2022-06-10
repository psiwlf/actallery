import React, { useState, useEffect, useRef } from 'react';
// Image
// import searchIcon from '../../images/search-icon.svg';
// Styles
// import { Wrapper, Content } from './SearchBar.styles';

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
    // <Wrapper>
    //   <Content>
    <div>

        {/* <img src={searchIcon} alt='search-icon' /> */}
        <input type='text' placeholder='Search Artist'
          // inline function below, because we want to send parameter
          onChange={event => setState(event.currentTarget.value)}
          value={state}
          />
          </div>
    //   </Content>
    // </Wrapper>
  );
};

export default SearchBar;