import React from 'react';
import Routes from './routes';

import {
  GlobalStyle
} from "./GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle>
        <Routes />
      </GlobalStyle>
    </>
  );
}

export default App;
